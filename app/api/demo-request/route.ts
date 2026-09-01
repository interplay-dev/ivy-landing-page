import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const HUBSPOT = "https://api.hubapi.com";

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  companyType: string;
  companySize: string;
  source: string;
};

async function hs(token: string, path: string, init?: RequestInit) {
  const res = await fetch(`${HUBSPOT}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  const body = await res.json().catch(() => ({}));
  return { status: res.status, body };
}

// Find the deal stage labeled like "Lead identified" (tolerates the
// portal's "Lead itentified" spelling); fall back to the first stage.
async function resolveStage(token: string) {
  const { status, body } = await hs(token, "/crm/v3/pipelines/deals");
  if (status !== 200 || !Array.isArray(body.results)) return null;
  for (const pipeline of body.results) {
    for (const stage of pipeline.stages ?? []) {
      if (/lead\s*i[dt]ent/i.test(stage.label ?? "")) {
        return { pipeline: pipeline.id, stage: stage.id };
      }
    }
  }
  const first = body.results[0];
  const firstStage = first?.stages?.[0];
  return first && firstStage ? { pipeline: first.id, stage: firstStage.id } : null;
}

async function upsertContact(token: string, p: Payload) {
  const create = await hs(token, "/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({
      properties: {
        email: p.email,
        firstname: p.firstName,
        lastname: p.lastName,
        company: p.company,
      },
    }),
  });
  if (create.status === 201) return create.body.id as string;
  if (create.status === 409) {
    const match = /Existing ID:\s*(\d+)/.exec(create.body.message ?? "");
    if (match) return match[1];
  }
  return null;
}

// Email the request to leon@ivy.one server-side over SMTP (Google Workspace
// app password; SMTP_USER/SMTP_PASS env vars — see README).
async function sendEmail(p: Payload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("demo-request: SMTP_USER/SMTP_PASS not set — email skipped");
    return false;
  }
  const port = Number(SMTP_PORT || 465);
  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transport.sendMail({
      from: `"ivy.one" <${SMTP_USER}>`,
      to: "leon@ivy.one",
      replyTo: p.email,
      subject: "REQUEST A DEMO",
      text: [
        "New demo request from ivy.one",
        "",
        `First name: ${p.firstName}`,
        `Last name: ${p.lastName}`,
        `Work email: ${p.email}`,
        `Company: ${p.company}`,
        `Company type: ${p.companyType}`,
        `Company size: ${p.companySize}`,
        `Heard about us via: ${p.source}`,
      ].join("\n"),
    });
    return true;
  } catch (err) {
    console.error("demo-request: smtp error", err);
    return false;
  }
}

async function createCrmRecords(token: string, p: Payload) {
  try {
    const [stageInfo, contactId] = await Promise.all([
      resolveStage(token),
      upsertContact(token, p),
    ]);

    const properties: Record<string, string> = {
      dealname: `Demo request — ${p.company}`,
      description: [
        `Demo request from ivy.one`,
        `Name: ${p.firstName} ${p.lastName}`,
        `Work email: ${p.email}`,
        `Company: ${p.company}`,
        `Company type: ${p.companyType}`,
        `Company size: ${p.companySize}`,
        `Heard about us via: ${p.source}`,
      ].join("\n"),
    };
    if (stageInfo) {
      properties.pipeline = stageInfo.pipeline;
      properties.dealstage = stageInfo.stage;
    }

    const deal = await hs(token, "/crm/v3/objects/deals", {
      method: "POST",
      body: JSON.stringify({
        properties,
        ...(contactId
          ? {
              associations: [
                {
                  to: { id: contactId },
                  types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }],
                },
              ],
            }
          : {}),
      }),
    });

    if (deal.status !== 201) {
      console.error("demo-request: deal create failed", deal.status, deal.body);
      return { crm: false as const };
    }
    return { crm: true as const, dealId: deal.body.id as string };
  } catch (err) {
    console.error("demo-request: hubspot error", err);
    return { crm: false as const };
  }
}

// Config health check (no secrets — only whether each var is usable).
export async function GET() {
  const t = process.env.HUBSPOT_TOKEN ?? "";
  return NextResponse.json({
    hubspotToken: !t
      ? "missing"
      : t.startsWith("pat-")
        ? "set — correct type"
        : "set — WRONG TYPE (must start with pat-)",
    smtp: process.env.SMTP_USER && process.env.SMTP_PASS ? "set" : "missing",
  });
}

export async function POST(req: Request) {
  let p: Payload;
  try {
    p = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }
  if (!p?.email || !p?.firstName || !p?.company) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  const token = process.env.HUBSPOT_TOKEN;
  if (!token) console.error("demo-request: HUBSPOT_TOKEN is not set");

  const [emailed, crm] = await Promise.all([
    sendEmail(p),
    token ? createCrmRecords(token, p) : Promise.resolve({ crm: false as const }),
  ]);

  return NextResponse.json({ ok: true, emailed, ...crm });
}
