import { CSSProperties } from 'react';

const BG_DARK = '#0a0e1a';
const CARD_BG = '#111827';
const CARD_BG_HIGHLIGHT = '#1a2332';
const ACCENT_CYAN = '#22d3ee';
const ACCENT_CYAN_DIM = 'rgba(34, 211, 238, 0.9)';
const TEXT_WHITE = '#ffffff';
const TEXT_MUTED = 'rgba(255, 255, 255, 0.85)';
const TEXT_SOFT = 'rgba(255, 255, 255, 0.7)';
const CHECK_GREEN = '#22c55e';
const WARNING_AMBER = '#f59e0b';
const WARNING_BG = 'rgba(245, 158, 11, 0.12)';
const BORDER_SUBTLE = 'rgba(255, 255, 255, 0.12)';

export const pricingDetailsStyles = {
  container: {
    fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif",
    backgroundColor: 'transparent',
    color: TEXT_WHITE,
    padding: '2rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  } as CSSProperties,

  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 340px',
    gap: '2rem',
    alignItems: 'start',
  } as CSSProperties,

  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  } as CSSProperties,

  sidebar: {
    position: 'sticky' as const,
    top: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  } as CSSProperties,

  eyebrow: {
    fontSize: '0.8rem',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    color: ACCENT_CYAN,
    margin: '0 0 0.25rem 0',
  } as CSSProperties,

  title: {
    fontSize: '1.75rem',
    fontWeight: '700',
    margin: '0 0 0.35rem 0',
    color: TEXT_WHITE,
    lineHeight: 1.25,
  } as CSSProperties,

  subtitle: {
    fontSize: '1rem',
    color: TEXT_MUTED,
    margin: '0 0 1rem 0',
    lineHeight: 1.5,
  } as CSSProperties,

  card: {
    backgroundColor: CARD_BG,
    borderRadius: '16px',
    padding: '1.5rem 1.75rem',
    border: '1px solid',
    borderColor: BORDER_SUBTLE,
    boxSizing: 'border-box',
  } as CSSProperties,

  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.75rem',
  } as CSSProperties,

  stars: {
    color: '#eab308',
    fontSize: '1.1rem',
    letterSpacing: '0.05em',
  } as CSSProperties,

  ratingLabel: {
    fontSize: '0.9rem',
    color: TEXT_MUTED,
    fontWeight: '500',
  } as CSSProperties,

  priceFrom: {
    fontSize: '0.9rem',
    color: TEXT_MUTED,
    marginBottom: '0.2rem',
  } as CSSProperties,

  priceAmount: {
    fontSize: '1.85rem',
    fontWeight: '700',
    color: TEXT_WHITE,
    marginBottom: '1rem',
  } as CSSProperties,

  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  } as CSSProperties,

  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    color: TEXT_MUTED,
  } as CSSProperties,

  checkIcon: {
    color: CHECK_GREEN,
    flexShrink: 0,
    fontSize: '1rem',
  } as CSSProperties,

  warningBox: {
    display: 'flex',
    gap: '0.6rem',
    alignItems: 'flex-start',
    marginTop: '1rem',
    padding: '0.85rem 1rem',
    backgroundColor: WARNING_BG,
    borderRadius: '10px',
    border: '1px solid rgba(245, 158, 11, 0.35)',
  } as CSSProperties,

  warningIcon: {
    color: WARNING_AMBER,
    flexShrink: 0,
    fontSize: '1.2rem',
    lineHeight: 1,
  } as CSSProperties,

  warningText: {
    fontSize: '0.875rem',
    color: TEXT_MUTED,
    margin: 0,
    lineHeight: 1.5,
  } as CSSProperties,

  warningTitle: {
    fontWeight: '700',
    color: TEXT_WHITE,
    marginBottom: '0.2rem',
  } as CSSProperties,

  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    margin: '0 0 0.75rem 0',
    color: TEXT_WHITE,
  } as CSSProperties,

  tabRow: {
    display: 'flex',
    gap: '0.25rem',
    marginBottom: '1rem',
    borderBottom: '1px solid',
    borderColor: BORDER_SUBTLE,
    paddingBottom: 0,
  } as CSSProperties,

  tabButton: (active: boolean): CSSProperties => ({
    padding: '0.6rem 1rem',
    border: 'none',
    background: 'none',
    color: active ? ACCENT_CYAN : TEXT_SOFT,
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    position: 'relative' as const,
    marginBottom: '-1px',
    borderBottom: active ? `2px solid ${ACCENT_CYAN}` : '2px solid transparent',
    transition: 'color 0.2s, border-color 0.2s',
  }),

  tabPanel: {
    fontSize: '0.95rem',
    color: TEXT_MUTED,
    lineHeight: 1.65,
  } as CSSProperties,

  tabPanelHeading: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: TEXT_WHITE,
    margin: '0 0 0.5rem 0',
  } as CSSProperties,

  tabPanelList: {
    margin: '0.5rem 0 1rem 0',
    paddingLeft: '1.25rem',
  } as CSSProperties,

  benefitItem: {
    display: 'flex',
    gap: '0.6rem',
    marginBottom: '0.85rem',
    alignItems: 'flex-start',
  } as CSSProperties,

  benefitEmoji: {
    flexShrink: 0,
    fontSize: '1.1rem',
  } as CSSProperties,

  benefitTitle: {
    fontWeight: '600',
    color: TEXT_WHITE,
    marginBottom: '0.15rem',
  } as CSSProperties,

  benefitDesc: {
    fontSize: '0.9rem',
    color: TEXT_SOFT,
    margin: 0,
    lineHeight: 1.5,
  } as CSSProperties,

  conditionsList: {
    margin: 0,
    paddingLeft: '1.25rem',
    color: TEXT_MUTED,
    lineHeight: 1.7,
    fontSize: '0.9rem',
  } as CSSProperties,

  sidebarCard: {
    backgroundColor: CARD_BG,
    borderRadius: '14px',
    padding: '1.25rem',
    border: '1px solid',
    borderColor: BORDER_SUBTLE,
  } as CSSProperties,

  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: TEXT_MUTED,
    marginBottom: '0.5rem',
    display: 'block',
  } as CSSProperties,

  select: {
    width: '100%',
    padding: '0.65rem 0.9rem',
    borderRadius: '8px',
    border: `1px solid ${BORDER_SUBTLE}`,
    backgroundColor: CARD_BG_HIGHLIGHT,
    color: TEXT_WHITE,
    fontSize: '0.95rem',
    cursor: 'pointer',
    appearance: 'none' as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2388a0b0' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.75rem center',
    paddingRight: '2rem',
  } as CSSProperties,

  buyButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.85rem 1.5rem',
    backgroundColor: ACCENT_CYAN,
    color: BG_DARK,
    border: 'none',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    textDecoration: 'none',
    width: '100%',
    transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
  } as CSSProperties,

  relatedTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    margin: '0 0 1rem 0',
    color: TEXT_WHITE,
  } as CSSProperties,

  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1rem',
  } as CSSProperties,

  relatedCard: {
    display: 'block',
    padding: '1rem 1.15rem',
    backgroundColor: CARD_BG,
    borderRadius: '12px',
    border: '1px solid',
    borderColor: BORDER_SUBTLE,
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
  } as CSSProperties,

  relatedCardTitle: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: TEXT_WHITE,
    margin: '0 0 0.35rem 0',
  } as CSSProperties,

  relatedCardDesc: {
    fontSize: '0.8rem',
    color: TEXT_SOFT,
    margin: '0 0 0.5rem 0',
    lineHeight: 1.4,
  } as CSSProperties,

  relatedCardLink: {
    fontSize: '0.85rem',
    color: ACCENT_CYAN,
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
  } as CSSProperties,

  faqTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    margin: '0 0 1rem 0',
    color: TEXT_WHITE,
  } as CSSProperties,

  faqItem: {
    borderBottom: '1px solid',
    borderColor: BORDER_SUBTLE,
  } as CSSProperties,

  faqQuestion: {
    width: '100%',
    padding: '1rem 0',
    border: 'none',
    background: 'none',
    color: TEXT_WHITE,
    fontSize: '0.95rem',
    fontWeight: '600',
    textAlign: 'left' as const,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.75rem',
    transition: 'color 0.2s',
  } as CSSProperties,

  faqAnswer: {
    fontSize: '0.9rem',
    color: TEXT_MUTED,
    lineHeight: 1.6,
    padding: '0 0 1rem 0',
    margin: 0,
    paddingTop: 0,
  } as CSSProperties,

  faqAnswerWrap: {
    overflow: 'hidden',
    transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
  } as CSSProperties,
};
