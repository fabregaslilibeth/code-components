import * as React from 'react';
import { resultsStatsCss } from './ResultsStats.styles';
import { ColumnTiers, parseColumnTiers, parseGridGap, buildResponsiveGridCss, useGridScope } from '../gridLayout';

export type ResultsStatsTheme = 'dark' | 'light';

export interface ResultsStat {
  value?: string;
  label?: string;
}

export interface ResultsStatsProps {
  theme?: ResultsStatsTheme;
  stats?: ResultsStat[];
  /** Comma-separated column counts: desktop, ≤991px, ≤768px, ≤479px. Fewer than
   *  4 values? The last one given carries through the remaining breakpoints. */
  columns?: string;
  /** Grid gap as "column;row" (e.g. "16px;16px"). One value applies to both. */
  gap?: string;
  /** Corner tick accents on each box. Default on. */
  showTicks?: boolean;
}

const DEFAULT_STATS: ResultsStat[] = [
  { value: '21', label: 'Security findings identified' },
  { value: '5', label: 'Findings remediated' },
  { value: '3', label: 'Critical issues resolved' },
  { value: '197', label: 'Malicious emails quarantined in 30 days' },
  { value: '146', label: 'Additional emails flagged for review' },
];

const DEFAULT_COLUMNS: ColumnTiers = [4, 2, 1, 1];
const DEFAULT_GAP = { col: '1px', row: '1px' };

export const ResultsStats = ({
  theme = 'dark',
  stats,
  columns,
  gap,
  showTicks = true,
}: ResultsStatsProps) => {
  const list = stats && stats.length > 0 ? stats : DEFAULT_STATS;
  const scope = useGridScope('rs');

  if (list.length === 0) return null;

  const cols = parseColumnTiers(columns, DEFAULT_COLUMNS);
  const dynamicCss = buildResponsiveGridCss(scope, '.rs-grid', '.rs-stat', cols, list.length);
  const { col: colGap, row: rowGap } = parseGridGap(gap, DEFAULT_GAP);

  return (
    <section className={`rs-root rs-${theme} ${scope}`}>
      <style>{resultsStatsCss}</style>
      <style>{dynamicCss}</style>
      <div className="rs-grid" style={{ columnGap: colGap, rowGap }}>
        {list.map((stat, i) => (
          <div className="rs-stat" key={i}>
            {showTicks && (
              <>
                <span className="rs-tick tl" aria-hidden="true" />
                <span className="rs-tick tr" aria-hidden="true" />
              </>
            )}
            {stat.value && <p className="rs-value">{stat.value}</p>}
            {stat.label && <p className="rs-label">{stat.label}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};
