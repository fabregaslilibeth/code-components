import { GridArray } from './GridArray';
import { GridItem } from '../grid/Grid';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_ITEMS_JSON = `[
  {"icon":"layers","title":"TEST","body":"TEST"},
  {"icon":"layers","title":"TEST","body":"TEST"},
  {"icon":"layers","title":"TEST","body":"TEST"},
  {"icon":"layers","title":"TEST","body":"TEST"},
  {"icon":"layers","title":"TEST","body":"TEST"},
  {"icon":"layers","title":"TEST","body":"TEST"}
]`;

const parseItems = (raw: string): GridItem[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const GridArrayWebflow = ({
  theme,
  columns,
  gap,
  items,
}: {
  theme?: string;
  columns?: string;
  gap?: string;
  items?: string;
}) => {
  const safeTheme = theme === 'light' ? 'light' as const : 'dark' as const;
  const safeColumns = columns ? parseInt(columns, 10) || undefined : undefined;
  return (
    <GridArray
      theme={safeTheme}
      columns={safeColumns}
      gap={gap}
      items={parseItems(items || DEFAULT_ITEMS_JSON)}
    />
  );
};

export default declareComponent(GridArrayWebflow, {
  name: 'Grid Array',
  description: 'Uniform icon-card grid — accepts items as a JSON array',
  group: 'Content',
  props: {
    theme:   props.Text({ name: 'Theme (dark / light)', defaultValue: 'dark' }),
    columns: props.Text({ name: 'Columns (desktop)',    defaultValue: '3' }),
    gap:     props.Text({ name: 'Grid gap (CSS value)', defaultValue: '14px' }),
    items:   props.Text({ name: 'Items (JSON array)',   defaultValue: DEFAULT_ITEMS_JSON }),
  },
});
