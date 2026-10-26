import * as React from 'react';
import { LucideIcon } from '../LucideIcon';
import { numberedListCss } from './NumberedList.styles';
import { HeadingTag } from '../headingTag';

export type NumberedListTheme = 'light' | 'dark';

export interface NumberedListItem {
  icon: string;
  title: string;
  body: string;
}

export interface NumberedListProps {
  theme?: NumberedListTheme;
  activeIndex?: number;
  items?: NumberedListItem[];
  headingTag?: HeadingTag;
  showNumbers?: boolean;
  gap?: number;
}

const DEFAULT_ITEMS: NumberedListItem[] = [
  { icon: 'compass',   title: 'Power Apps consultancy (UK)',  body: 'Strategy, scoping and roadmaps from a UK Power Platform team.' },
  { icon: 'code-2',    title: 'Custom app development',       body: 'Canvas and model-driven app development built around your process.' },
  { icon: 'layers',    title: 'App modernisation',            body: 'Replace spreadsheets, paper and legacy tools with secure apps.' },
  { icon: 'plug',      title: 'Integration & Dataverse',      body: 'Connect Microsoft 365, SharePoint, SQL and Dataverse securely.' },
  { icon: 'graduation-cap', title: 'Training & enablement',   body: 'Hands-on training so your team can own and extend your apps.' },
  { icon: 'shield-check',   title: 'Support & health checks', body: 'Ongoing support, optimisation and security reviews.' },
];

export const NumberedList = ({
  theme = 'light',
  activeIndex,
  items = DEFAULT_ITEMS,
  headingTag = 'h3',
  showNumbers = true,
  gap = 0,
}: NumberedListProps) => {
  const safeItems = items.length > 0 ? items : DEFAULT_ITEMS;
  const Heading = headingTag as React.ElementType;

  return (
    <div
      className={`nl-root nl-${theme}${gap > 0 ? ' nl-root--gapped' : ''}${showNumbers ? '' : ' nl-root--nonum'}`}
      style={gap > 0 ? ({ '--nl-gap': `${gap}rem` } as React.CSSProperties) : undefined}
    >
      <style>{numberedListCss}</style>
      {safeItems.map((item, i) => {
        const num = String(i + 1).padStart(2, '0');
        const isActive = activeIndex === i;
        return (
          <div key={i} className={`nl-row${isActive ? ' nl-row--active' : ''}`}>
            {showNumbers && <span className="nl-num">{num}</span>}
            <span className="nl-icon-wrap">
              <LucideIcon name={item.icon} size={20} strokeWidth={1.6} />
            </span>
            <div className="nl-text">
              <Heading className="nl-title">{item.title}</Heading>
              <p className="nl-body">{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
