import * as React from 'react';
import { ctaBannerCss } from './CtaBanner.styles';

export interface CtaBannerProps {
  eyebrow?: string;
  headingBefore?: string;
  headingHighlight?: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
  </svg>
);

const ArrowUpRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
  </svg>
);

export const CtaBanner = ({
  eyebrow          = 'Ready to build',
  headingBefore    = 'Build the app',
  headingHighlight = 'your team needs.',
  phone            = '0333 370 7000',
  phoneHref        = 'tel:03333707000',
  email            = 'hello@intouchtech.co.uk',
  primaryLabel     = 'Book a free Power Apps call',
  primaryHref      = '#contact',
  secondaryLabel   = 'Talk to an expert',
  secondaryHref    = 'tel:03333707000',
}: CtaBannerProps) => (
  <div className="ctab-root">
    <style>{ctaBannerCss}</style>
    <div className="ctab-card">

      {/* corner ticks */}
      <span className="ctab-tick ctab-tick--tl" aria-hidden />
      <span className="ctab-tick ctab-tick--tr" aria-hidden />
      <span className="ctab-tick ctab-tick--bl" aria-hidden />
      <span className="ctab-tick ctab-tick--br" aria-hidden />

      <div className="ctab-inner">
        <div className="ctab-left">
          {eyebrow && (
            <p className="ctab-eyebrow">{eyebrow}</p>
          )}
          <h2 className="ctab-heading">
            {headingBefore}
            <span className="ctab-heading-highlight">{headingHighlight}</span>
          </h2>
          <div className="ctab-contacts">
            <a className="ctab-contact" href={phoneHref}>
              <PhoneIcon />{phone}
            </a>
            <a className="ctab-contact" href={`mailto:${email}`}>
              <MailIcon />{email}
            </a>
          </div>
        </div>

        <div className="ctab-actions">
          <a className="ctab-btn ctab-btn--primary" href={primaryHref}>
            {primaryLabel}
            <ArrowUpRight />
          </a>
          <a className="ctab-btn ctab-btn--secondary" href={secondaryHref}>
            <PhoneIcon />{secondaryLabel}
          </a>
        </div>
      </div>
    </div>
  </div>
);
