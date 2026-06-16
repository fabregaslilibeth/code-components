import { StatsGrid, StatItem, StatsGridTheme } from './StatsGrid';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_ITEMS_JSON = `[
  {"value":"12","unit":"HRS","label":"Saved weekly on reporting"},
  {"value":"1","label":"Single source of truth"},
  {"value":"3","unit":"WK","label":"To first live dashboard"},
  {"value":"100","unit":"%","label":"Team adoption"}
]`;

const parseItems = (raw: string): StatItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const StatsGridWebflow = ({
  theme,
  columns,
  items,
}: {
  theme?: string;
  columns?: string;
  items?: string;
}) => {
  const safeTheme: StatsGridTheme = theme === 'dark' ? 'dark' : 'light';
  const safeCols = Math.max(1, parseInt(columns || '2', 10) || 2);
  return (
    <StatsGrid
      theme={safeTheme}
      columns={safeCols}
      items={parseItems(items || DEFAULT_ITEMS_JSON)}
    />
  );
};

export default declareComponent(StatsGridWebflow, {
  name: 'Stats Grid',
  description: 'Grid of stat cards — value, optional unit superscript, and label',
  group: 'Content',
  props: {
    theme:   props.Text({ name: 'Theme (light / dark)', defaultValue: 'light' }),
    columns: props.Text({ name: 'Columns (1–6)',        defaultValue: '2' }),
    items:   props.Text({ name: 'Items (JSON array)',   defaultValue: DEFAULT_ITEMS_JSON }),
  },
});
