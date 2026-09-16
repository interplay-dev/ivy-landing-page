"use client";

import { useRef, useState } from "react";

/* The 30-day deployment card. Content mirrors the "Timeline / 30-day"
   component set in Figma (Week 1 / Week 2 / Week 4). */

type Stage = {
  key: string;
  tab: string;
  title: string;
  percent: number;
  chips: string[];
};

const STAGES: Stage[] = [
  {
    key: "w1",
    tab: "Week 1",
    title: "Vault setup — Ivy live and integrated",
    percent: 25,
    chips: ["Tech setup", "Onboarding", "Integrations"],
  },
  {
    key: "w2",
    tab: "Week 2",
    title: "Team onboarding and custom protocols",
    percent: 60,
    chips: ["Trainings", "Customization", "Workflows"],
  },
  {
    key: "w4",
    tab: "Week 4",
    title: "Fully set up and running autonomously",
    percent: 100,
    chips: ["Final audit", "Education", "Optimization"],
  },
];

export default function Timeline() {
  const [index, setIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const stage = STAGES[index];

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (index + 1) % STAGES.length
        : (index - 1 + STAGES.length) % STAGES.length;
    setIndex(next);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();
  };

  return (
    <div className="tl">
      <h3 className="tl__head">
        From Ivy&rsquo;s first hello to a fully trained team in{" "}
        <em className="acc">30 days</em>.
      </h3>

      <div className="tl__tabs" role="tablist" aria-label="Deployment weeks" ref={tabsRef} onKeyDown={onKey}>
        {STAGES.map((s, n) => (
          <button
            key={s.key}
            type="button"
            role="tab"
            id={`tl-tab-${s.key}`}
            aria-controls="tl-panel"
            aria-selected={n === index}
            tabIndex={n === index ? 0 : -1}
            data-on={n === index ? "true" : undefined}
            onClick={() => setIndex(n)}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div className="tl__panel" id="tl-panel" role="tabpanel" aria-labelledby={`tl-tab-${stage.key}`}>
        <div className="tl__stage">
          <h4>{stage.title}</h4>
          <span className="tl__pct">{stage.percent}%</span>
        </div>

        <div
          className="tl__track"
          role="progressbar"
          aria-valuenow={stage.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${stage.tab} progress`}
        >
          <span className="tl__fill" style={{ width: `${stage.percent}%` }} />
        </div>

        <div className="tl__chips">
          {stage.chips.map((c) => (
            <span className="tl__chip" key={c}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
