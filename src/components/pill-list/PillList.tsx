import * as React from 'react';
import { pillListCss } from './PillList.styles';
import { LucideIcon } from '../LucideIcon';

export type PillListTheme = 'dark' | 'light';

export type PillListAlign =
  | 'left'
  | 'center'
  | 'tablet center'
  | 'mobile L center'
  | 'mobile center';

const ALIGN_CLASS: Record<PillListAlign, string> = {
  'left': '',
  'center': 'pl-center-all',
  'tablet center': 'pl-center-991',
  'mobile L center': 'pl-center-767',
  'mobile center': 'pl-center-479',
};

export interface PillItem {
  icon?: string;
  label: string;
  href?: string;
}

export interface PillListProps {
  theme?: PillListTheme;
  align?: PillListAlign;
  items?: PillItem[];
}

const DEFAULT_ITEMS: PillItem[] = [
  { icon: 'hard-hat',      label: 'Construction & building' },
  { icon: 'factory',       label: 'Manufacturing & engineering' },
  { icon: 'landmark',      label: 'Financial services' },
  { icon: 'building-2',    label: 'Public sector & government' },
  { icon: 'scale',         label: 'Legal services' },
  { icon: 'shield',        label: 'Insurance' },
  { icon: 'utensils',      label: 'Hospitality & leisure' },
  { icon: 'users',         label: 'Recruitment & staffing' },
  { icon: 'sprout',        label: 'Agriculture' },
  { icon: 'cpu',           label: 'Technology & SaaS' },
  { icon: 'stethoscope',   label: 'Healthcare' },
  { icon: 'graduation-cap', label: 'Education' },
];

export const PillList = ({
  theme = 'light',
  align = 'left',
  items = DEFAULT_ITEMS,
}: PillListProps) => {
  const safeItems = items.length > 0 ? items : DEFAULT_ITEMS;
  const alignClass = ALIGN_CLASS[align] || '';

  return (
    <div className={`pl-root pl-${theme}${alignClass ? ` ${alignClass}` : ''}`}>
      <style>{pillListCss}</style>
      <div className="pl-track">
        {safeItems.map((item, i) => {
          const Tag = item.href ? 'a' : 'span';
          const linkProps = item.href
            ? { href: item.href }
            : {};
          return (
            <Tag key={i} className={`pl-pill${item.href ? ' pl-pill--link' : ''}`} {...linkProps}>
              {item.icon && (
                <span className="pl-pill-icon">
                  <LucideIcon name={item.icon} size={15} strokeWidth={1.8} />
                </span>
              )}
              <span className="pl-pill-label">{item.label}</span>
            </Tag>
          );
        })}
      </div>
    </div>
  );
};
