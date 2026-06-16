import * as React from 'react';
import { marqueeCss } from './Marquee.styles';
import { LucideIcon } from '../LucideIcon';

export type MarqueeTheme = 'dark' | 'light';
export type MarqueeDirection = 'left' | 'right';

export interface MarqueeItem {
  icon: string;
  label: string;
}

export interface MarqueeProps {
  theme?: MarqueeTheme;
  direction?: MarqueeDirection;
  duration?: string;
  items?: MarqueeItem[];
}

const DEFAULT_ITEMS: MarqueeItem[] = [
  { icon: 'bar-chart-2',      label: 'Google Analytics' },
  { icon: 'settings-2',       label: 'ServiceNow' },
  { icon: 'headphones',       label: 'Salesforce' },
  { icon: 'briefcase',        label: 'Dynamics 365' },
  { icon: 'cloud',            label: 'Azure & Azure DevOps' },
  { icon: 'database',         label: 'SQL & databases' },
  { icon: 'layout-dashboard', label: 'Power BI' },
];

export const Marquee = ({
  theme = 'light',
  direction = 'left',
  duration = '30s',
  items = DEFAULT_ITEMS,
}: MarqueeProps) => {
  const safeItems = items.length > 0 ? items : DEFAULT_ITEMS;
  // duplicate for seamless loop
  const loop = [...safeItems, ...safeItems];

  return (
    <div
      className={`mq-root mq-${theme}`}
      style={{ '--mq-duration': duration } as React.CSSProperties}
    >
      <style>{marqueeCss}</style>
      <div className={`mq-track mq-track--${direction}`}>
        {loop.map((item, i) => (
          <span key={i} className="mq-pill">
            <span className="mq-pill-icon">
              <LucideIcon name={item.icon} size={17} strokeWidth={1.8} />
            </span>
            <span className="mq-pill-label">{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
