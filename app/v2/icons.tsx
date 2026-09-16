/* Ivy v2 line icons — 24px grid, 1.25 stroke, drawn to match the Figma set. */

type P = { className?: string };
const S = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{children}</svg>
);

export const IconLock = (p: P) => (
  <S {...p}>
    <rect x="4.5" y="10.5" width="15" height="10.5" rx="2.2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" strokeDasharray="2.4 2.2" />
    <circle cx="12" cy="15.75" r="0.9" fill="currentColor" stroke="none" />
  </S>
);
export const IconShield = (p: P) => (
  <S {...p}>
    <path d="M12 2.8 19.2 5.4v5.4c0 4.9-3.1 8.3-7.2 10.4-4.1-2.1-7.2-5.5-7.2-10.4V5.4L12 2.8z" />
    <path d="m8.9 11.9 2.1 2.1 4.2-4.4" />
  </S>
);
export const IconFocus = (p: P) => (
  <S {...p}>
    <path d="M4 8.5V6.2A2.2 2.2 0 0 1 6.2 4h2.3M15.5 4h2.3A2.2 2.2 0 0 1 20 6.2v2.3M20 15.5v2.3a2.2 2.2 0 0 1-2.2 2.2h-2.3M8.5 20H6.2A2.2 2.2 0 0 1 4 17.8v-2.3" />
    <circle cx="12" cy="12" r="3" />
  </S>
);
export const IconKey = (p: P) => (
  <S {...p}>
    <circle cx="8" cy="15" r="4.2" />
    <path d="M11 12 20 3" />
    <path d="m16.2 6.8 2.6 2.6M18.6 4.4l2.2 2.2" />
  </S>
);
export const IconDatabase = (p: P) => (
  <S {...p}>
    <ellipse cx="12" cy="5.5" rx="7.6" ry="2.9" />
    <path d="M4.4 5.5v13c0 1.6 3.4 2.9 7.6 2.9s7.6-1.3 7.6-2.9v-13" />
    <path d="M4.4 12c0 1.6 3.4 2.9 7.6 2.9s7.6-1.3 7.6-2.9" />
  </S>
);
export const IconAudit = (p: P) => (
  <S {...p}>
    <path d="M20 12.2v4.6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6.2a2 2 0 0 1 2-2h7.4" />
    <path d="M12 18.8v2.6M8.5 21.4h7" />
    <path d="m14.8 7.6 2.3 2.3L21.8 5" />
  </S>
);

export const IconLayers = (p: P) => (
  <S {...p}>
    <path d="m12 3.4 8.4 4.2L12 11.8 3.6 7.6 12 3.4z" />
    <path d="m3.6 12 8.4 4.2 8.4-4.2" />
    <path d="m3.6 16.4 8.4 4.2 8.4-4.2" />
  </S>
);
export const IconCube = (p: P) => (
  <S {...p}>
    <path d="m12 2.8 8.2 4.4v9.6L12 21.2 3.8 16.8V7.2L12 2.8z" />
    <path d="M3.8 7.2 12 11.6l8.2-4.4" />
    <path d="M12 11.6v9.6" />
  </S>
);
export const IconCloud = (p: P) => (
  <S {...p}>
    <path d="M7 18.8A4.6 4.6 0 0 1 6.2 9.7 6.1 6.1 0 0 1 18 9.1a4.4 4.4 0 0 1-.4 9.7H7z" />
    <path d="m9.2 13.8 2.1 2.1 4-4.3" />
  </S>
);
export const IconRack = (p: P) => (
  <S {...p}>
    <rect x="4" y="3.6" width="16" height="6.4" rx="1.6" />
    <rect x="4" y="14" width="16" height="6.4" rx="1.6" />
    <path d="M7.2 6.8h.01M7.2 17.2h.01" />
    <path d="M10.6 6.8h6M10.6 17.2h6" />
  </S>
);

/* role icons */
export const IconAgenda = (p: P) => (<S {...p}><path d="M4 6.5h16M4 12h10M4 17.5h13" /><circle cx="18.5" cy="12" r="1" /></S>);
export const IconLedger = (p: P) => (<S {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 12.5h8M8 16h5" /></S>);
export const IconChart = (p: P) => (<S {...p}><path d="M4 19h16" /><path d="M6 15l4-5 3 3 5-7" /></S>);
export const IconMail = (p: P) => (<S {...p}><path d="M4 7.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z" /><path d="m4.5 8 7.5 5.5L19.5 8" /></S>);
export const IconCode = (p: P) => (<S {...p}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5 10.5 19" /></S>);
export const IconCalendar = (p: P) => (<S {...p}><rect x="4" y="5.5" width="16" height="14" rx="2" /><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" /></S>);

/* chip icons */
export const IconFilter = (p: P) => (<S {...p}><path d="M4 6h16l-6 7v5l-4 2v-7L4 6z" /></S>);
export const IconLines = (p: P) => (<S {...p}><path d="M4 8h16M4 12h16M4 16h10" /></S>);
export const IconDoc = (p: P) => (<S {...p}><path d="M6 3.5h8l4 4v13H6z" /><path d="M9 12h6M9 15.5h6" /></S>);
export const IconInbox = (p: P) => (<S {...p}><path d="M4 13h4l2 3h4l2-3h4" /><path d="M6 5h12l2 8v6H4v-6l2-8z" /></S>);
export const IconDollar = (p: P) => (<S {...p}><path d="M12 3v18M7 8h7a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h8" /></S>);
export const IconPage = (p: P) => (<S {...p}><rect x="5" y="3.5" width="14" height="17" rx="2" /><path d="M8.5 8h7M8.5 12h7M8.5 16h4" /></S>);
export const IconFlag = (p: P) => (<S {...p}><path d="M4 20V5l4 2 4-2 4 2 4-2v15" /><path d="M8 13h8" /></S>);
export const IconFolder = (p: P) => (<S {...p}><path d="M4 7h6l2 2h8v10H4z" /></S>);
export const IconPerson = (p: P) => (<S {...p}><circle cx="12" cy="8" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></S>);
export const IconBoard = (p: P) => (<S {...p}><rect x="3.5" y="5" width="17" height="12" rx="2" /><path d="M8 20h8M12 17v3" /></S>);
export const IconRefresh = (p: P) => (<S {...p}><path d="M20 12a8 8 0 1 1-2.3-5.7" /><path d="M20 4v5h-5" /></S>);
export const IconCheck = (p: P) => (<S {...p}><path d="m5 12 4.5 4.5L19 7" /></S>);
export const IconBolt = (p: P) => (<S {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></S>);
export const IconPlus = (p: P) => (<S {...p}><path d="M12 4v16M4 12h16" /></S>);
