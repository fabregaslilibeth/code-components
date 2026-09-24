import * as React from 'react';
import { pricingCardCss } from './PricingCard.styles';
import { LucideIcon } from '../LucideIcon';

export type PricingCardTheme = 'light' | 'dark';

export interface PricingBand {
  /** Band name shown in bold, e.g. "Small" */
  label: string;
  /** Small uppercase line under the name, e.g. "10–49 staff" */
  sub?: string;
  /** Price shown when this band is selected, e.g. "£540" */
  price: string;
  /** Optional note under the price. Falls back to the `note` prop. Supports **bold**. */
  note?: string;
}

/** A checklist row: either a plain string, or a bold lead-in plus trailing text. */
export type ChecklistItem = string | { bold?: string; text?: string };

export interface PricingCardProps {
  theme?: PricingCardTheme;

  /* content */
  kicker?: string;
  badge?: string;
  bandLabel?: string;
  helpLabel?: string;
  helpHref?: string;
  priceSuffix?: string;
  note?: string;
  fineprint?: string;
  footNote?: string;
  footIcon?: string;

  /* pricing */
  showBands?: boolean;
  bands?: PricingBand[];
  defaultBand?: number;
  /** Price used when `showBands` is false. */
  price?: string;

  /* checklist */
  checklist?: ChecklistItem[];
  checkIcon?: string;

  /* actions */
  ctaLabel?: string;
  ctaHref?: string;
  ctaTarget?: string;
  ctaIcon?: string;
  altLabel?: string;
  altHref?: string;
  altTarget?: string;

  /* colours */
  accentColor?: string;
  accentColor2?: string;
  ctaColor?: string;
  ctaTextColor?: string;
}

/** Renders **bold** segments inside an otherwise plain string. */
const renderEmphasis = (text: string): React.ReactNode =>
  text.split('**').map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));

const normaliseItem = (item: ChecklistItem): { bold: string; text: string } => {
  if (typeof item === 'string') return { bold: '', text: item };
  return { bold: item.bold ?? '', text: item.text ?? '' };
};

export const PricingCard = ({
  theme = 'light',

  kicker = 'Your price',
  badge = 'Fixed · No hidden fees',
  bandLabel = 'Organisation size',
  helpLabel = 'How is this set?',
  helpHref = '',
  priceSuffix = '+ VAT',
  note = '',
  fineprint = '',
  footNote = '',
  footIcon = 'lock',

  showBands = true,
  bands = [],
  defaultBand = 0,
  price = '',

  checklist = [],
  checkIcon = 'check',

  ctaLabel = 'Start certification',
  ctaHref = '',
  ctaTarget,
  ctaIcon = 'arrow-right',
  altLabel = '',
  altHref = '',
  altTarget,

  accentColor = '#0F63F3',
  accentColor2 = '#10C8E5',
  ctaColor = '#D92B45',
  ctaTextColor = '#FFFFFF',
}: PricingCardProps) => {
  const labelId = React.useId();
  const hasBands = showBands && bands.length > 0;

  const startIndex = Math.min(Math.max(defaultBand, 0), Math.max(bands.length - 1, 0));
  const [active, setActive] = React.useState(startIndex);
  const [swapping, setSwapping] = React.useState(false);

  // Keep selection valid if the band list is edited in the Designer.
  React.useEffect(() => {
    setActive((current) => Math.min(Math.max(current, 0), Math.max(bands.length - 1, 0)));
  }, [bands.length]);

  const selected = hasBands ? bands[active] : undefined;
  const shownPrice = selected?.price ?? price;
  const shownNote = selected?.note ?? note;

  const selectBand = (index: number) => {
    if (index === active) return;
    setSwapping(true);
    setActive(index);
    window.setTimeout(() => setSwapping(false), 140);
  };

  const renderLink = (
    className: string,
    href: string,
    target: string | undefined,
    children: React.ReactNode
  ) => {
    if (!href) {
      return (
        <button type="button" className={className}>
          {children}
        </button>
      );
    }
    return (
      <a
        className={className}
        href={href}
        target={target || undefined}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  };

  return (
    <div
      className={`pc-root pc-${theme}`}
      data-pc-price={shownPrice}
      style={
        {
          '--pc-accent': accentColor,
          '--pc-accent-2': accentColor2,
          '--pc-cta-bg': ctaColor,
          '--pc-cta-text': ctaTextColor,
        } as React.CSSProperties
      }
    >
      <style>{pricingCardCss}</style>

      {(kicker || badge) && (
        <div className="pc-head">
          {kicker && <span className="pc-kicker">{kicker}</span>}
          {badge && <span className="pc-badge">{badge}</span>}
        </div>
      )}

      <div className="pc-body">
        {hasBands && (
          <>
            <div className="pc-band-label">
              <span className="pc-band-label-text" id={labelId}>
                {bandLabel}
              </span>
              {helpLabel && helpHref && (
                <a className="pc-help" href={helpHref}>
                  {helpLabel}
                </a>
              )}
            </div>

            <div
              className={`pc-bands pc-bands-${bands.length === 1 ? 1 : bands.length % 3 === 0 ? 3 : 2}`}
              role="group"
              aria-labelledby={labelId}
            >
              {bands.map((band, i) => (
                <button
                  key={i}
                  type="button"
                  className="pc-band"
                  aria-pressed={i === active}
                  onClick={() => selectBand(i)}
                >
                  <span className="pc-band-name">{band.label}</span>
                  {band.sub && <span className="pc-band-sub">{band.sub}</span>}
                </button>
              ))}
            </div>
          </>
        )}

        <div className={`pc-price-block${hasBands ? '' : ' pc-no-bands'}`}>
          <div className="pc-price-row">
            <span className={`pc-price${swapping ? ' pc-swap' : ''}`}>{shownPrice}</span>
            {priceSuffix && <span className="pc-price-suffix">{priceSuffix}</span>}
          </div>
          {shownNote && <p className="pc-note">{renderEmphasis(shownNote)}</p>}
        </div>

        {checklist.length > 0 && (
          <ul className="pc-list">
            {checklist.map((item, i) => {
              const { bold, text } = normaliseItem(item);
              return (
                <li key={i} className="pc-list-item">
                  {checkIcon && (
                    <span className="pc-list-icon">
                      <LucideIcon name={checkIcon} size={14} strokeWidth={3} />
                    </span>
                  )}
                  <span>
                    {bold && <strong>{bold}</strong>}
                    {bold && text ? ' ' : ''}
                    {text}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {ctaLabel &&
          renderLink(
            'pc-cta',
            ctaHref,
            ctaTarget,
            <>
              {ctaLabel}
              {ctaIcon && (
                <span className="pc-cta-icon">
                  <LucideIcon name={ctaIcon} size={15} strokeWidth={2.5} />
                </span>
              )}
            </>
          )}

        {altLabel && (
          <a
            className="pc-alt"
            href={altHref || undefined}
            target={altTarget || undefined}
            rel={altTarget === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {altLabel}
          </a>
        )}

        {fineprint && <p className="pc-fine">{fineprint}</p>}

        {footNote && (
          <div className="pc-foot">
            {footIcon && (
              <span className="pc-foot-icon">
                <LucideIcon name={footIcon} size={15} strokeWidth={2} />
              </span>
            )}
            <span>{renderEmphasis(footNote)}</span>
          </div>
        )}
      </div>
    </div>
  );
};
