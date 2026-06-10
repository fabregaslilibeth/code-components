import { CSSProperties } from 'react';

const BG_DARK = '#0a0e1a';
const BG_DARK_BLUE = '#0c1222';
const ACCENT_ORANGE = '#f97316';
const ACCENT_ORANGE_LIGHT = '#fb923c';
const EYEBROW_AMBER = '#fbbf24';
const TEXT_WHITE = '#ffffff';
const TEXT_MUTED = 'rgba(255, 255, 255, 0.9)';
const TEXT_LIGHT = 'rgba(255, 255, 255, 0.75)';
const CHECK_GREEN = '#22c55e';
const BOX_BG = 'rgba(255, 255, 255, 0.06)';
const BOX_BORDER = 'rgba(255, 255, 255, 0.12)';

export const bannerStyles = {
  root: {
    position: 'relative' as const,
    fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif",
    color: TEXT_WHITE,
    overflow: 'hidden',
  } as CSSProperties,

  /** The banner itself is slanted: full-width block with background + diagonal clip (not the inner card) */
  heroWrap: {
    position: 'relative' as const,
    width: '100%',
    minHeight: '560px',
    backgroundColor: BG_DARK_BLUE,
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
    WebkitClipPath: 'polygon(0 0, 100% 0, 100% 78%, 0 100%)',
  } as CSSProperties,

  heroInner: {
    position: 'relative' as const,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1.5rem 6rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    alignItems: 'center',
    minHeight: '560px',
  } as CSSProperties,

  contentCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left' as const,
  } as CSSProperties,

  eyebrow: {
    fontSize: '0.8rem',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    color: EYEBROW_AMBER,
    marginBottom: '0.75rem',
  } as CSSProperties,

  h1: {
    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: TEXT_WHITE,
    margin: '0 0 1rem 0',
    maxWidth: '520px',
  } as CSSProperties,

  subheadline: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: TEXT_MUTED,
    margin: '0 0 1.25rem 0',
    maxWidth: '480px',
  } as CSSProperties,

  supportingList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 1.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  } as CSSProperties,

  supportingItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem',
    color: TEXT_MUTED,
  } as CSSProperties,

  checkIcon: {
    color: CHECK_GREEN,
    flexShrink: 0,
    fontSize: '1.1rem',
    lineHeight: 1,
  } as CSSProperties,

  ctaPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.85rem 1.75rem',
    backgroundColor: ACCENT_ORANGE,
    color: TEXT_WHITE,
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.2s, transform 0.15s',
    marginBottom: '0.75rem',
  } as CSSProperties,

  trustLine: {
    fontSize: '0.8rem',
    color: TEXT_LIGHT,
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
  } as CSSProperties,

  trustStars: {
    color: CHECK_GREEN,
    letterSpacing: '0.05em',
  } as CSSProperties,

  /** Right column: video placeholder + right box stacked */
  rightCol: {
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '1.25rem',
    minHeight: '320px',
  } as CSSProperties,

  videoPlaceholder: {
    width: '100%',
    maxWidth: '480px',
    aspectRatio: '16/10',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: TEXT_LIGHT,
    fontSize: '0.9rem',
  } as CSSProperties,

  /** Image that "sticks out" - overlapping diagonal bottom edge (no rotation; banner is the slanted element) */
  stickyImageWrap: {
    position: 'absolute' as const,
    right: '2%',
    bottom: '-100px',
    width: 'min(340px, 40vw)',
    zIndex: 2,
    boxShadow: '0 24px 56px rgba(0, 0, 0, 0.45)',
    borderRadius: '12px',
    overflow: 'hidden',
  } as CSSProperties,

  stickyImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    verticalAlign: 'middle',
  } as CSSProperties,

  /** Right-side premium box */
  rightBox: {
    backgroundColor: BOX_BG,
    border: `1px solid ${BOX_BORDER}`,
    borderRadius: '12px',
    padding: '1.5rem',
    maxWidth: '320px',
    marginLeft: 'auto',
  } as CSSProperties,

  rightBoxTitle: {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: TEXT_WHITE,
    margin: '0 0 0.35rem 0',
  } as CSSProperties,

  rightBoxBadge: {
    fontSize: '0.7rem',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.04em',
    color: EYEBROW_AMBER,
    marginBottom: '1rem',
  } as CSSProperties,

  rightBoxList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 1rem 0',
  } as CSSProperties,

  rightBoxItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: TEXT_MUTED,
    marginBottom: '0.5rem',
  } as CSSProperties,

  rightBoxCta: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '0.7rem 1rem',
    backgroundColor: ACCENT_ORANGE,
    color: TEXT_WHITE,
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
    marginBottom: '0.5rem',
  } as CSSProperties,

  rightBoxMicro: {
    fontSize: '0.7rem',
    color: TEXT_LIGHT,
    textAlign: 'center' as const,
  } as CSSProperties,

  /** Orange strip under diagonal (optional) */
  diagonalStrip: {
    height: '6px',
    backgroundColor: ACCENT_ORANGE,
    width: '100%',
  } as CSSProperties,

  /** Layout: on smaller screens stack and adjust diagonal */
  mediaQueries: `
    @media (max-width: 900px) {
      .banner-hero-inner {
        grid-template-columns: 1fr;
        text-align: center;
        padding-bottom: 8rem;
      }
      .banner-content-col {
        align-items: center;
        text-align: center;
      }
      .banner-h1, .banner-subheadline { max-width: none; }
      .banner-right-box { margin-left: 0; margin: 0 auto; }
      .banner-sticky-wrap { right: 50%; transform: translateX(50%) rotate(-2deg); bottom: -60px; width: 280px; }
    }
    @media (max-width: 600px) {
      .banner-hero-wrap { clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); min-height: auto; }
      .banner-hero-inner { min-height: auto; }
    }
    .banner-cta-primary:hover, .banner-right-cta:hover {
      background-color: ${ACCENT_ORANGE_LIGHT};
      transform: translateY(-1px);
    }
  `,
};
