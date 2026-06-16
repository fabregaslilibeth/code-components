import * as React from 'react';
import { pointsCss } from './Points.styles';
import { LucideIcon } from '../LucideIcon';

export type PointsTheme = 'dark' | 'light';

export interface PointItem {
  icon: string;
  title: string;
  body: string;
}

export interface PointsProps {
  theme?: PointsTheme;
  title?: string;
  body?: string;
  points?: PointItem[];
  tickColor?: string;
}

const DEFAULT_POINTS: PointItem[] = [
  { icon: 'workflow',       title: 'Automated workflows',  body: 'Trigger Power Automate flows from any action in your app.' },
  { icon: 'bell',           title: 'Approvals & alerts',   body: 'Route approvals and alerts straight into Microsoft Teams.' },
  { icon: 'refresh-cw',     title: 'Always in sync',       body: 'Keep data consistent across every connected system.' },
];

const Ticks: React.FC<{ color?: string }> = ({ color = 'var(--pt-line-strong)' }) => {
  const base: React.CSSProperties = { position: 'absolute', width: 12, height: 12, pointerEvents: 'none', zIndex: 2 };
  const b = `1px solid ${color}`;
  const o = 8; // inset from edge — stays inside overflow:hidden
  return (
    <React.Fragment>
      <span style={{ ...base, top: o, left: o,   borderTop: b, borderLeft: b   }} aria-hidden />
      <span style={{ ...base, top: o, right: o,  borderTop: b, borderRight: b  }} aria-hidden />
      <span style={{ ...base, bottom: o, left: o,  borderBottom: b, borderLeft: b  }} aria-hidden />
      <span style={{ ...base, bottom: o, right: o, borderBottom: b, borderRight: b }} aria-hidden />
    </React.Fragment>
  );
};

export const Points = ({
  theme = 'dark',
  title = 'Automate the apps you build',
  body = 'Pair Power Apps with Power Automate and Microsoft Teams to handle approvals, notifications and back-end tasks automatically.',
  points = DEFAULT_POINTS,
  tickColor,
}: PointsProps) => {
  const safePoints = points.length > 0 ? points : DEFAULT_POINTS;

  return (
    <div className={`pt-root pt-${theme}`}>
      <style>{pointsCss}</style>
      <div className="pt-card">
        <Ticks color={tickColor} />
        <div className="pt-header">
          <h3 className="pt-title">{title}</h3>
          <p className="pt-body">{body}</p>
        </div>
        <div className="pt-grid">
          {safePoints.map((pt, i) => (
            <div key={i} className="pt-point">
              <span className="pt-icon-wrap">
                <LucideIcon name={pt.icon} size={20} strokeWidth={1.8} />
              </span>
              <div className="pt-point-text">
                <div className="pt-point-title">{pt.title}</div>
                <div className="pt-point-desc">{pt.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
