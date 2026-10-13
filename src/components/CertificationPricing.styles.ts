import { CSSProperties } from 'react';

const BG_DARK = '#0a0e1a';
const CARD_BG = '#111827';
const CARD_BG_HIGHLIGHT = '#1a2332';
const ACCENT_CYAN = '#22d3ee';
const ACCENT_CYAN_DIM = 'rgba(34, 211, 238, 0.9)';
const BORDER_GRADIENT = 'linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)';
const TEXT_WHITE = '#ffffff';
const TEXT_MUTED = 'rgba(255, 255, 255, 0.85)';
const CHECK_GREEN = '#22c55e';
const CHECK_CYAN = '#22d3ee';
const CROSS_RED = '#ef4444';

// Site type scale (Webflow variables cross the shadow root); fallbacks used outside Webflow.
const FS_SMALL = 'var(--_typography---font-size--text-small, 0.9375rem)';
const FS_MAIN = 'var(--_typography---font-size--text-main, 1.125rem)';
const FS_H3 = 'var(--_typography---font-size--h3, 2.125rem)';

export const certificationPricingStyles = {
  container: {
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    color: TEXT_WHITE,
  } as CSSProperties,

  toggleRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  } as CSSProperties,

  toggleWrapper: {
    display: 'inline-flex',
    gap: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: `2px solid ${ACCENT_CYAN}`,
    borderRadius: '9999px',
    padding: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
  } as CSSProperties,

  toggleButton: (isActive: boolean): CSSProperties => ({
    padding: '0.6rem 1.5rem',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    font: 'inherit',
    fontSize: FS_MAIN,
    fontWeight: '400',
    backgroundColor: isActive ? ACCENT_CYAN : 'transparent',
    color: isActive ? BG_DARK : '#a1a1a1',
    transition: 'all 0.2s',
  }),

  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    alignItems: 'stretch',
  } as CSSProperties,

  card: (isHighlighted: boolean): CSSProperties => ({
    position: 'relative',
    backgroundColor: isHighlighted ? CARD_BG_HIGHLIGHT : CARD_BG,
    borderRadius: '16px',
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid transparent',
    backgroundImage: `linear-gradient(${isHighlighted ? CARD_BG_HIGHLIGHT : CARD_BG}, ${isHighlighted ? CARD_BG_HIGHLIGHT : CARD_BG}), ${BORDER_GRADIENT}`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    boxSizing: 'border-box',
  }),

  badge: {
    position: 'absolute' as const,
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: ACCENT_CYAN,
    color: BG_DARK,
    fontSize: FS_SMALL,
    fontWeight: '400',
    padding: '0.35rem 0.75rem',
    borderRadius: '8px',
  } as CSSProperties,

  cardTitle: {
    fontSize: FS_H3,
    fontWeight: '500',
    lineHeight: 1.3,
    margin: '0 0 0.5rem 0',
    color: TEXT_WHITE,
  } as CSSProperties,

  cardDescription: {
    fontSize: FS_MAIN,
    color: TEXT_MUTED,
    lineHeight: 1.5,
    marginBottom: '0px',
    flex: '0 0 auto',
    minHeight: '5rem',
  } as CSSProperties,

  priceWrap: {
    marginBottom: '1.25rem',
  } as CSSProperties,

  priceFrom: {
    fontSize: FS_SMALL,
    lineHeight: 1.5,
    color: TEXT_MUTED,
    marginBottom: '0.15rem',
  } as CSSProperties,

  priceAmount: {
    fontSize: FS_H3,
    fontWeight: '500',
    lineHeight: 1.2,
    color: TEXT_WHITE,
  } as CSSProperties,

  ctaButton: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.25rem',
    backgroundColor: ACCENT_CYAN,
    color: BG_DARK,
    border: 'none',
    borderRadius: '9999px',
    overflow: 'hidden',
    fontSize: FS_MAIN,
    fontWeight: '400',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform 0.15s',
    marginBottom: '1.25rem',
  } as CSSProperties,

  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    margin: '0 0 1rem 0',
    border: 'none',
  } as CSSProperties,

  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 1rem 0',
    textAlign: 'left',
    alignSelf: 'stretch',
  } as CSSProperties,

  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    fontSize: FS_MAIN,
    lineHeight: 1.5,
    color: TEXT_MUTED,
    textAlign: 'left',
  } as CSSProperties,

  checkIcon: {
    color: CHECK_GREEN,
    flexShrink: 0,
    fontSize: '1em',
    lineHeight: 1,
  } as CSSProperties,

  checkIconCyan: {
    color: CHECK_CYAN,
    flexShrink: 0,
    fontSize: '1em',
    lineHeight: 1,
  } as CSSProperties,

  crossIcon: {
    color: CROSS_RED,
    flexShrink: 0,
    fontSize: '1em',
    lineHeight: 1,
  } as CSSProperties,

  featureItemExcluded: {
    opacity: 0.7,
  } as CSSProperties,

  detailsLink: {
    fontSize: FS_MAIN,
    color: ACCENT_CYAN_DIM,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontWeight: '400',
    marginTop: 'auto',
    transition: 'color 0.2s',
  } as CSSProperties,
};
