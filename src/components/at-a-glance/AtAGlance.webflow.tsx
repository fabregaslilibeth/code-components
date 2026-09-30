import { AtAGlance, AtAGlanceTheme, AtAGlanceItem } from './AtAGlance';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_ITEMS_JSON = `[
  {"label":"Industry","value":"Housing"},
  {"label":"Company size","value":"Approximately 35 colleagues using IT across the office and wider estate"},
  {"label":"Environment","value":"Microsoft 365, Microsoft Defender and an IT environment supporting office and estate-based users"},
  {"label":"Service","value":"Penetration testing and email security"},
  {"label":"Objective","value":"Replace manual security checks with regular automated testing, strengthen email protection and create a clearer process for identifying and remediating cyber security weaknesses"}
]`;

const parseItems = (raw: string): AtAGlanceItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const AtAGlanceWebflow = ({
  theme,
  items,
  columns,
  showTicks,
  gap,
}: {
  theme?: string;
  items?: string;
  columns?: string;
  showTicks?: boolean;
  gap?: string;
}) => {
  const safeTheme: AtAGlanceTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <AtAGlance
      theme={safeTheme}
      items={parseItems(items || DEFAULT_ITEMS_JSON)}
      columns={columns}
      showTicks={showTicks ?? true}
      gap={gap}
    />
  );
};

export default declareComponent(AtAGlanceWebflow, {
  name: 'At A Glance',
  description: 'Responsive fact grid — one box per item, so the box count follows your data. The columns prop sets how many per row at each breakpoint, and the last box stretches to fill a leftover row instead of leaving a gap.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    items: props.Text({
      name: 'Items (JSON array)',
      defaultValue: DEFAULT_ITEMS_JSON,
      tooltip: 'Array of {label, value}. Add or remove items to change the box count — no separate "columns match items" setting needed.',
    }),
    columns: props.Text({
      name: 'Columns (desktop, 991px, 768px, 479px)',
      defaultValue: '4,2,1',
      tooltip: 'Comma-separated column counts, e.g. "4,3,2,1" = 4 desktop, 3 at 991px, 2 at 768px, 1 at 479px. Give fewer values and the last one carries through the rest — "4,3" means 3 columns from 991px all the way down.',
    }),
    showTicks: props.Boolean({
      name: 'Show corner ticks',
      defaultValue: true,
      tooltip: 'Small cyan corner accents on each box, matching the Card and Slider components.',
    }),
    gap: props.Text({
      name: 'Gap (column;row)',
      defaultValue: '32px;14px',
      tooltip: 'Column and row gap as "col;row", e.g. "32px;14px". Give one value on its own (e.g. "20px") to apply it to both.',
    }),
  },
});
