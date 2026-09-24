import type { PricingBand, ChecklistItem } from './PricingCard';

/** Default bands — Cyber Essentials self-certification headcount ladder. */
export const DEFAULT_BANDS: PricingBand[] = [
  { label: 'Micro',  sub: '1–9 staff',     price: '£420', note: '**Micro** band — 1–9 employees.' },
  { label: 'Small',  sub: '10–49 staff',   price: '£540', note: '**Small** band — 10–49 employees.' },
  { label: 'Medium', sub: '50–249 staff',  price: '£660', note: '**Medium** band — 50–249 employees.' },
  { label: 'Large',  sub: '250+ staff',    price: '£840', note: '**Large** band — 250+ employees.' },
];

export const DEFAULT_CHECKLIST: ChecklistItem[] = [
  { bold: 'IASME portal access',           text: 'with the current question set' },
  { bold: 'Pre-submission technical review', text: 'by your assessor' },
  { bold: 'One free resubmission',          text: 'within two working days' },
  { bold: 'Certificate, badge assets',      text: 'and directory listing' },
];

export const DEFAULT_BANDS_JSON = JSON.stringify(DEFAULT_BANDS, null, 2);
export const DEFAULT_CHECKLIST_JSON = JSON.stringify(DEFAULT_CHECKLIST, null, 2);
