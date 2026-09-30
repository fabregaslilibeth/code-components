import * as React from 'react';
import { atAGlanceCss } from './AtAGlance.styles';
import { ColumnTiers, parseColumnTiers, parseGridGap, buildResponsiveGridCss, useGridScope } from '../gridLayout';

export type AtAGlanceTheme = 'dark' | 'light';

export interface AtAGlanceItem {
  label?: string;
  value?: string;
}

export interface AtAGlanceProps {
  theme?: AtAGlanceTheme;
  items?: AtAGlanceItem[];
  /** Comma-separated column counts: desktop, ≤991px, ≤768px, ≤479px. Fewer than
   *  4 values? The last one given carries through the remaining breakpoints. */
  columns?: string;
  /** Corner tick accents on each box. Default on. */
  showTicks?: boolean;
  /** Grid gap as "column;row" (e.g. "32px;14px"). One value applies to both. */
  gap?: string;
}

const DEFAULT_ITEMS: AtAGlanceItem[] = [
  { label: 'Industry', value: 'Housing' },
  { label: 'Company size', value: 'Approximately 35 colleagues using IT across the office and wider estate' },
  { label: 'Environment', value: 'Microsoft 365, Microsoft Defender and an IT environment supporting office and estate-based users' },
  { label: 'Service', value: 'Penetration testing and email security' },
  { label: 'Objective', value: 'Replace manual security checks with regular automated testing, strengthen email protection and create a clearer process for identifying and remediating cyber security weaknesses' },
];

const DEFAULT_COLUMNS: ColumnTiers = [4, 2, 1, 1];
const DEFAULT_GAP = { col: '32px', row: '14px' };

export const AtAGlance = ({
  theme = 'dark',
  items,
  columns,
  showTicks = true,
  gap,
}: AtAGlanceProps) => {
  const list = items && items.length > 0 ? items : DEFAULT_ITEMS;
  const scope = useGridScope('aag');

  if (list.length === 0) return null;

  const cols = parseColumnTiers(columns, DEFAULT_COLUMNS);
  const dynamicCss = buildResponsiveGridCss(scope, '.aag-grid', '.aag-item', cols, list.length);
  const { col: colGap, row: rowGap } = parseGridGap(gap, DEFAULT_GAP);

  return (
    <section className={`aag-root aag-${theme} ${scope}`}>
      <style>{atAGlanceCss}</style>
      <style>{dynamicCss}</style>
      <div className="aag-grid" style={{ columnGap: colGap, rowGap }}>
        {list.map((item, i) => (
          <div className="aag-item" key={i}>
            {showTicks && (
              <>
                <span className="aag-tick tl" aria-hidden="true" />
                <span className="aag-tick tr" aria-hidden="true" />
              </>
            )}
            {item.label && <p className="aag-label">{item.label}</p>}
            {item.value && <p className="aag-value">{item.value}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};
