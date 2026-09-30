import * as React from 'react';

export type ColumnTiers = [number, number, number, number];

/**
 * Parses a comma-separated column-count string into 4 breakpoint tiers —
 * desktop, ≤991px, ≤768px, ≤479px. Fewer than 4 values? The last one given
 * carries through the remaining tiers, e.g. "4,3" -> [4,3,3,3].
 */
export const parseColumnTiers = (raw: string | undefined, fallback: ColumnTiers): ColumnTiers => {
  const parts = (raw || '')
    .split(',')
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => Number.isFinite(n) && n > 0);

  if (parts.length === 0) return fallback;

  const tiers: number[] = [];
  for (let i = 0; i < 4; i++) {
    tiers.push(parts[i] !== undefined ? parts[i] : tiers[i - 1]);
  }
  return tiers as ColumnTiers;
};

/** Parses a "col;row" gap string. A single value on its own applies to both. */
export const parseGridGap = (
  raw: string | undefined,
  fallback: { col: string; row: string }
): { col: string; row: string } => {
  const parts = (raw || '')
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  if (parts.length === 0) return fallback;
  if (parts.length === 1) return { col: parts[0], row: parts[0] };
  return { col: parts[0], row: parts[1] };
};

/**
 * When the item count doesn't divide evenly into a row, the last item
 * stretches to absorb the leftover columns instead of leaving a gap —
 * e.g. 5 items in 4 columns: the 5th spans all 4; 7 in 4: the 7th spans 2.
 */
export const lastItemSpan = (cols: number, count: number): number => {
  if (count === 0 || cols <= 1) return 1;
  const remainder = count % cols;
  return remainder === 0 ? 1 : cols - remainder + 1;
};

/**
 * Builds the per-breakpoint grid-template-columns + last-child span CSS for
 * a responsive grid, scoped to a unique instance class (see useGridScope) so
 * multiple instances of the same component on one page never collide — an
 * unscoped selector here would be a page-global rule, and the last instance's
 * <style> tag would win for every instance's last item, not just its own.
 */
export const buildResponsiveGridCss = (
  scope: string,
  gridSelector: string,
  itemSelector: string,
  cols: ColumnTiers,
  count: number
): string => {
  const [c0, c1, c2, c3] = cols;
  const [s0, s1, s2, s3] = cols.map((c) => lastItemSpan(c, count));
  return `
    .${scope} ${gridSelector} { grid-template-columns: repeat(${c0}, 1fr); }
    .${scope} ${itemSelector}:last-child { grid-column: span ${s0}; }
    @media (max-width: 991px) {
      .${scope} ${gridSelector} { grid-template-columns: repeat(${c1}, 1fr); }
      .${scope} ${itemSelector}:last-child { grid-column: span ${s1}; }
    }
    @media (max-width: 768px) {
      .${scope} ${gridSelector} { grid-template-columns: repeat(${c2}, 1fr); }
      .${scope} ${itemSelector}:last-child { grid-column: span ${s2}; }
    }
    @media (max-width: 479px) {
      .${scope} ${gridSelector} { grid-template-columns: repeat(${c3}, 1fr); }
      .${scope} ${itemSelector}:last-child { grid-column: span ${s3}; }
    }
  `;
};

/**
 * A unique, CSS-safe class for scoping a component instance's dynamically
 * generated <style> block. Call unconditionally, before any early return.
 */
export const useGridScope = (prefix: string): string => {
  const rawId = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  return `${prefix}-id-${rawId}`;
};
