import { PricingCard, PricingCardTheme, PricingBand, ChecklistItem } from './PricingCard';
import { DEFAULT_BANDS, DEFAULT_CHECKLIST, DEFAULT_BANDS_JSON, DEFAULT_CHECKLIST_JSON } from './PricingCard.data';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

type WebflowLink = { href?: string; target?: string } | string | undefined;

const linkHref = (link: WebflowLink): string =>
  typeof link === 'string' ? link : link?.href ?? '';

const linkTarget = (link: WebflowLink): string | undefined =>
  typeof link === 'string' ? undefined : link?.target || undefined;

const parseBands = (raw: string): PricingBand[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as PricingBand[]) : DEFAULT_BANDS;
  } catch {
    return DEFAULT_BANDS;
  }
};

const parseChecklist = (raw: string): ChecklistItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as ChecklistItem[]) : DEFAULT_CHECKLIST;
  } catch {
    return DEFAULT_CHECKLIST;
  }
};

const PricingCardWebflow = ({
  theme,
  kicker,
  badge,
  bandLabel,
  helpLabel,
  helpLink,
  priceSuffix,
  note,
  fineprint,
  footNote,
  footIcon,
  showBands,
  bands,
  defaultBand,
  price,
  checklist,
  checkIcon,
  ctaLabel,
  ctaLink,
  ctaIcon,
  altLabel,
  altLink,
  accentColor,
  accentColor2,
  ctaColor,
  ctaTextColor,
}: {
  theme?: string;
  kicker?: string;
  badge?: string;
  bandLabel?: string;
  helpLabel?: string;
  helpLink?: WebflowLink;
  priceSuffix?: string;
  note?: string;
  fineprint?: string;
  footNote?: string;
  footIcon?: string;
  showBands?: boolean;
  bands?: string;
  defaultBand?: number;
  price?: string;
  checklist?: string;
  checkIcon?: string;
  ctaLabel?: string;
  ctaLink?: WebflowLink;
  ctaIcon?: string;
  altLabel?: string;
  altLink?: WebflowLink;
  accentColor?: string;
  accentColor2?: string;
  ctaColor?: string;
  ctaTextColor?: string;
}) => {
  const safeTheme: PricingCardTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <PricingCard
      theme={safeTheme}
      kicker={kicker}
      badge={badge}
      bandLabel={bandLabel}
      helpLabel={helpLabel}
      helpHref={linkHref(helpLink)}
      priceSuffix={priceSuffix}
      note={note}
      fineprint={fineprint}
      footNote={footNote}
      footIcon={footIcon}
      showBands={showBands ?? true}
      bands={parseBands(bands ?? DEFAULT_BANDS_JSON)}
      defaultBand={Number(defaultBand ?? 0) || 0}
      price={price}
      checklist={parseChecklist(checklist ?? DEFAULT_CHECKLIST_JSON)}
      checkIcon={checkIcon}
      ctaLabel={ctaLabel}
      ctaHref={linkHref(ctaLink)}
      ctaTarget={linkTarget(ctaLink)}
      ctaIcon={ctaIcon}
      altLabel={altLabel}
      altHref={linkHref(altLink)}
      altTarget={linkTarget(altLink)}
      accentColor={accentColor}
      accentColor2={accentColor2}
      ctaColor={ctaColor}
      ctaTextColor={ctaTextColor}
    />
  );
};

export default declareComponent(PricingCardWebflow, {
  name: 'Pricing Card',
  description: 'Sticky pricing panel — selectable price bands, checklist, CTA. All text and colours are props.',
  group: 'Content',
  props: {
    theme: props.Variant({
      name: 'Theme',
      defaultValue: 'light',
      options: ['light', 'dark'],
      group: 'Style',
    }),

    /* ── content ── */
    kicker: props.Text({
      name: 'Kicker',
      defaultValue: 'Your price',
      tooltip: 'Small label above the card. Leave empty to hide.',
      group: 'Content',
    }),
    badge: props.Text({
      name: 'Badge',
      defaultValue: 'Fixed · No hidden fees',
      tooltip: 'Pill in the top-right. Leave empty to hide.',
      group: 'Content',
    }),
    priceSuffix: props.Text({
      name: 'Price suffix',
      defaultValue: '+ VAT',
      group: 'Content',
    }),
    note: props.Text({
      name: 'Note under price',
      defaultValue: 'Set by total headcount across your whole organisation, not by the part being certified.',
      tooltip: 'Fallback note. A band with its own "note" overrides this. Wrap text in **asterisks** for bold.',
      group: 'Content',
    }),
    fineprint: props.Text({
      name: 'Fineprint',
      defaultValue: 'Payment taken on submission. Certificate valid 12 months from issue.',
      group: 'Content',
    }),
    footNote: props.Text({
      name: 'Footnote',
      defaultValue: "Assessed and certified by IASME, the NCSC's appointed Cyber Essentials Partner.",
      tooltip: 'Boxed note at the bottom. Leave empty to hide.',
      group: 'Content',
    }),
    footIcon: props.Text({
      name: 'Footnote icon (lucide)',
      defaultValue: 'lock',
      group: 'Content',
    }),

    /* ── pricing ── */
    showBands: props.Boolean({
      name: 'Show price bands',
      defaultValue: true,
      tooltip: 'Turn off for a single fixed price.',
      group: 'Pricing',
    }),
    bands: props.Text({
      name: 'Bands (JSON array)',
      defaultValue: DEFAULT_BANDS_JSON,
      tooltip: 'Array of { label, sub, price, note }. Note is optional and supports **bold**.',
      group: 'Pricing',
    }),
    defaultBand: props.Number({
      name: 'Default band (0 = first)',
      defaultValue: 0,
      group: 'Pricing',
    }),
    price: props.Text({
      name: 'Fixed price',
      defaultValue: '£540',
      tooltip: 'Used only when "Show price bands" is off.',
      group: 'Pricing',
    }),
    bandLabel: props.Text({
      name: 'Band label',
      defaultValue: 'Organisation size',
      group: 'Pricing',
    }),
    helpLabel: props.Text({
      name: 'Help link label',
      defaultValue: 'How is this set?',
      tooltip: 'Needs both a label and a link to appear.',
      group: 'Pricing',
    }),
    helpLink: props.Link({
      name: 'Help link',
      group: 'Pricing',
    }),

    /* ── checklist ── */
    checklist: props.Text({
      name: 'Checklist (JSON array)',
      defaultValue: DEFAULT_CHECKLIST_JSON,
      tooltip: 'Either plain strings, or { bold, text } objects for a bold lead-in.',
      group: 'Checklist',
    }),
    checkIcon: props.Text({
      name: 'Check icon (lucide)',
      defaultValue: 'check',
      group: 'Checklist',
    }),

    /* ── actions ── */
    ctaLabel: props.Text({
      name: 'Button label',
      defaultValue: 'Start certification',
      group: 'Actions',
    }),
    ctaLink: props.Link({
      name: 'Button link',
      group: 'Actions',
    }),
    ctaIcon: props.Text({
      name: 'Button icon (lucide)',
      defaultValue: 'arrow-right',
      group: 'Actions',
    }),
    altLabel: props.Text({
      name: 'Secondary label',
      defaultValue: 'Not sure which band? Talk to an assessor',
      tooltip: 'Leave empty to hide.',
      group: 'Actions',
    }),
    altLink: props.Link({
      name: 'Secondary link',
      group: 'Actions',
    }),

    /* ── colours ── */
    accentColor: props.Text({
      name: 'Accent colour',
      defaultValue: '#0F63F3',
      tooltip: 'Ticks, selected band, help link, start of the top bar.',
      group: 'Style',
    }),
    accentColor2: props.Text({
      name: 'Accent colour 2',
      defaultValue: '#10C8E5',
      tooltip: 'End of the top bar gradient.',
      group: 'Style',
    }),
    ctaColor: props.Text({
      name: 'Button colour',
      defaultValue: '#D92B45',
      group: 'Style',
    }),
    ctaTextColor: props.Text({
      name: 'Button text colour',
      defaultValue: '#FFFFFF',
      group: 'Style',
    }),
  },
});
