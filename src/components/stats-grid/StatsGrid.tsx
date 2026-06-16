import * as React from 'react';
import { statsGridCss } from './StatsGrid.styles';

export type StatsGridTheme = 'light' | 'dark';

export interface StatItem {
  value: string;
  unit?: string;
  label: string;
}

export interface StatsGridProps {
  theme?: StatsGridTheme;
  columns?: number;
  items?: StatItem[];
}

const DEFAULT_ITEMS: StatItem[] = [
  { value: '12',  unit: 'HRS', label: 'Saved weekly on reporting' },
  { value: '1',               label: 'Single source of truth' },
  { value: '3',   unit: 'WK',  label: 'To first live dashboard' },
  { value: '100', unit: '%',   label: 'Team adoption' },
];

const DURATION = 1800; // ms

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target: number, triggered: boolean) {
  const [display, setDisplay] = React.useState(0);
  const rafRef = React.useRef<number>(0);

  React.useEffect(() => {
    if (!triggered) return;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      setDisplay(Math.round(easeOutExpo(progress) * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered, target]);

  return display;
}

const StatCard: React.FC<{ item: StatItem; triggered: boolean }> = ({ item, triggered }) => {
  const numeric = parseFloat(item.value);
  const isNumber = !isNaN(numeric) && isFinite(numeric);
  const count = useCountUp(isNumber ? numeric : 0, triggered && isNumber);
  const displayed = isNumber ? String(count) : item.value;

  return (
    <div className="sg-card">
      <div className="sg-value-row">
        <span className="sg-value">{displayed}</span>
        {item.unit && <span className="sg-unit">{item.unit}</span>}
      </div>
      <p className="sg-label">{item.label}</p>
    </div>
  );
};

export const StatsGrid = ({
  theme = 'light',
  columns = 2,
  items = DEFAULT_ITEMS,
}: StatsGridProps) => {
  const safeItems = items.length > 0 ? items : DEFAULT_ITEMS;
  const safeCols = Math.min(Math.max(columns, 1), 6);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = React.useState(false);

  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`sg-root sg-${theme}`}>
      <style>{statsGridCss}</style>
      <div
        className="sg-grid"
        style={{ '--sg-cols': safeCols } as React.CSSProperties}
      >
        {safeItems.map((item, i) => (
          <StatCard key={i} item={item} triggered={triggered} />
        ))}
      </div>
    </div>
  );
};
