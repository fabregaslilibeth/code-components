import { ResultsStats, ResultsStatsTheme, ResultsStat } from './ResultsStats';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_STATS_JSON = `[
  {"value":"21","label":"Security findings identified"},
  {"value":"5","label":"Findings remediated"},
  {"value":"3","label":"Critical issues resolved"},
  {"value":"197","label":"Malicious emails quarantined in 30 days"},
  {"value":"146","label":"Additional emails flagged for review"}
]`;

const parseStats = (raw: string): ResultsStat[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const ResultsStatsWebflow = ({
  theme,
  stats,
  columns,
  gap,
  showTicks,
}: {
  theme?: string;
  stats?: string;
  columns?: string;
  gap?: string;
  showTicks?: boolean;
}) => {
  const safeTheme: ResultsStatsTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <ResultsStats
      theme={safeTheme}
      stats={parseStats(stats || DEFAULT_STATS_JSON)}
      columns={columns}
      gap={gap}
      showTicks={showTicks ?? true}
    />
  );
};

export default declareComponent(ResultsStatsWebflow, {
  name: 'Results Stats',
  description: 'Grid of big-number stat boxes with corner-tick accents — one box per stat, so the count follows your data. Same responsive columns/gap system as At A Glance.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    stats: props.Text({
      name: 'Stats (JSON array)',
      defaultValue: DEFAULT_STATS_JSON,
      tooltip: 'Array of {value, label}.',
    }),
    columns: props.Text({
      name: 'Columns (desktop, 991px, 768px, 479px)',
      defaultValue: '4,2,1',
      tooltip: 'Comma-separated column counts, e.g. "4,3,2,1". Give fewer values and the last one carries through the rest.',
    }),
    gap: props.Text({
      name: 'Gap (column;row)',
      defaultValue: '1px;1px',
      tooltip: 'Column and row gap as "col;row". Defaults tight, for a seamless dashboard-readout look — open it up for a spaced-card look instead.',
    }),
    showTicks: props.Boolean({
      name: 'Show corner ticks',
      defaultValue: true,
      tooltip: 'Small cyan corner accents on each box, matching At A Glance and Tick Box.',
    }),
  },
});
