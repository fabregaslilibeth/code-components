import * as React from 'react';
import { ServiceLogo } from './ServiceLogos';
import { serviceListCss } from './ServiceList.styles';

export type ServiceListTheme = 'light' | 'dark';

export interface ServiceItem {
  logo: string;       // built-in key (e.g. "power-bi") or an image URL
  title: string;
  body: string;
  url?: string;
}

export interface ServiceListProps {
  theme?: ServiceListTheme;
  items?: ServiceItem[];
}

const DEFAULT_ITEMS: ServiceItem[] = [
  { logo: 'power-bi',      title: 'Power BI',          body: 'Dashboards that drive decisions',      url: '#' },
  { logo: 'power-automate',title: 'Power Automate',    body: 'Automate the admin that wastes hours', url: '#' },
  { logo: 'teams',         title: 'Microsoft Teams',   body: 'Make Teams work for your business',    url: '#' },
  { logo: 'copilot',       title: 'Microsoft Copilot', body: 'Get Copilot-ready, securely',          url: '#' },
  { logo: 'm365',          title: 'Microsoft 365',     body: 'Secure, modern workplace foundations', url: '#' },
  { logo: 'managed-it',    title: 'Managed IT',        body: 'One partner for support & security',   url: '#' },
];

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const isUrl = (s: string) => s.startsWith('http') || s.startsWith('/') || s.startsWith('.');

export const ServiceList = ({
  theme = 'light',
  items = DEFAULT_ITEMS,
}: ServiceListProps) => {
  const safeItems = items.length > 0 ? items : DEFAULT_ITEMS;

  return (
    <div className={`svl-root svl-${theme}`}>
      <style>{serviceListCss}</style>
      {safeItems.map((item, i) => {
        const num = String(i + 1).padStart(2, '0');
        const Tag = item.url ? 'a' : 'div';
        const linkProps = item.url
          ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
          : {};

        return (
          <Tag key={i} className="svl-row" {...linkProps}>
            <span className="svl-num">{num}</span>
            <span className="svl-logo">
              {isUrl(item.logo)
                ? <img src={item.logo} alt={item.title} />
                : <ServiceLogo name={item.logo} />
              }
            </span>
            <div className="svl-text">
              <p className="svl-title">{item.title}</p>
              <p className="svl-body">{item.body}</p>
            </div>
            <span className="svl-arrow">
              <ArrowUpRight />
            </span>
          </Tag>
        );
      })}
    </div>
  );
};
