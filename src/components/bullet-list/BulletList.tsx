import * as React from 'react';
import { bulletListCss } from './BulletList.styles';
import { LucideIcon } from '../LucideIcon';

export type BulletListTheme = 'dark' | 'light';
export type BulletListAlign =
  | 'left'
  | 'center'
  | 'tablet-center'
  | 'mobile-l-center'
  | 'mobile-center';

export interface BulletItem {
  title: string;
  body?: string;
}

export interface BulletListProps {
  theme?: BulletListTheme;
  align?: BulletListAlign;
  icon?: string;
  iconColor?: string;
  textColor?: string;
  items?: BulletItem[];
}

const DEFAULT_ITEMS: BulletItem[] = [
  { title: 'Reduce downtime and recurring IT issues' },
  { title: 'Cut wasted spend on licences and suppliers' },
  { title: 'Get a clear, prioritised IT roadmap' },
  { title: 'Strengthen security and compliance' },
];

export const BulletList = ({
  theme = 'dark',
  align = 'left',
  icon = 'check',
  iconColor,
  textColor,
  items = DEFAULT_ITEMS,
}: BulletListProps) => {
  const safeItems = items.length > 0 ? items : DEFAULT_ITEMS;

  return (
    <div
      className={`bl-root bl-${theme} bl-align-${align}`}
    >
      <style>{bulletListCss}</style>
      <ul className="bl-list">
        {safeItems.map((item, i) => (
          <li key={i} className="bl-item">
            <span className="bl-icon" style={iconColor ? { color: iconColor } : undefined}>
              <LucideIcon name={icon} size={16} strokeWidth={2.2} />
            </span>
            <div className="bl-content">
              <p className="bl-title" style={textColor ? { color: textColor } : undefined}>{item.title}</p>
              {item.body && <p className="bl-body" style={textColor ? { color: textColor } : undefined}>{item.body}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
