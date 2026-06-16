import { CSSProperties } from 'react';

export const S = {
  root: {
    position: 'relative',
    fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif",
    backgroundColor: '#080c14',
    color: '#ffffff',
    minHeight: '320px',
  } as CSSProperties,

  inner: {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3.5rem 2.5rem 0',
    display: 'grid',
    gridTemplateColumns: '1fr 420px',
    alignItems: 'stretch',
    minHeight: '320px',
  } as CSSProperties,

  contentCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: '3.5rem',
    zIndex: 2,
  } as CSSProperties,

  eyebrow: {
    fontSize: '0.875rem',
    fontWeight: 700,
    color: '#3b82f6',
    marginBottom: '0.5rem',
    margin: '0 0 0.5rem 0',
  } as CSSProperties,

  headline: {
    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 0.1rem 0',
    lineHeight: 1.2,
  } as CSSProperties,

  name: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 900,
    background: 'linear-gradient(90deg, #0F63F3 0%, #00D4FF 50%, #10C8E5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 0 1.5rem 0',
    lineHeight: 1.05,
    letterSpacing: '-0.01em',
  } as CSSProperties,

  tagline: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 0.65rem 0',
  } as CSSProperties,

  body: {
    fontSize: '0.95rem',
    lineHeight: 1.65,
    color: 'rgba(255,255,255,0.75)',
    margin: '0 0 1.5rem 0',
    maxWidth: '520px',
  } as CSSProperties,

  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.75rem',
  } as CSSProperties,

  badgeImg: {
    height: '52px',
    width: 'auto',
    flexShrink: 0,
    borderRadius: '4px',
  } as CSSProperties,

  badgeText: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.45,
    margin: 0,
  } as CSSProperties,

  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '999px',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
    transition: 'opacity 0.2s, transform 0.15s',
    boxShadow: '0 4px 20px rgba(37,99,235,0.45)',
  } as CSSProperties,

  ctaDot: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#22c55e',
    border: '2px solid #080c14',
  } as CSSProperties,

  // Photo column: photo is anchored to the bottom of the section
  photoCol: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  } as CSSProperties,

  photo: {
    display: 'block',
    width: '100%',
    maxWidth: '380px',
    height: 'auto',
    alignSelf: 'flex-end',
    position: 'relative',
    zIndex: 1,
  } as CSSProperties,

  // Wrapper that anchors the popup relative to the button
  btnWrap: {
    position: 'relative',
    display: 'inline-block',
  } as CSSProperties,

  // Invisible backdrop to close popup on outside click
  popupOverlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 100,
    background: 'transparent',
  } as CSSProperties,

  popup: {
    position: 'fixed',
    width: '320px',
    backgroundColor: '#1a2744',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
    zIndex: 101,
    fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif",
  } as CSSProperties,

  popupHeader: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1a2f6e 100%)',
    padding: '1rem 1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as CSSProperties,

  popupHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  } as CSSProperties,

  popupAvatar: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'top',
    border: '2px solid rgba(255,255,255,0.3)',
    flexShrink: 0,
  } as CSSProperties,

  popupName: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: 0,
    lineHeight: 1.2,
  } as CSSProperties,

  popupRole: {
    fontSize: '0.75rem',
    color: '#22c55e',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  } as CSSProperties,

  popupRoleDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#22c55e',
    display: 'inline-block',
    flexShrink: 0,
  } as CSSProperties,

  popupClose: {
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.6)',
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '0.25rem',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  } as CSSProperties,

  popupBody: {
    padding: '1.25rem',
    backgroundColor: '#1a2744',
  } as CSSProperties,

  popupTimestamp: {
    textAlign: 'center',
    fontSize: '0.7rem',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '0.75rem',
  } as CSSProperties,

  popupBubbleRow: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '0.6rem',
    marginBottom: '1.25rem',
  } as CSSProperties,

  popupBubbleAvatar: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'top',
    flexShrink: 0,
  } as CSSProperties,

  popupBubble: {
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    borderRadius: '14px 14px 14px 2px',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    lineHeight: 1.5,
    maxWidth: '240px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  } as CSSProperties,

  popupCta: {
    textAlign: 'center',
    marginBottom: '0.75rem',
  } as CSSProperties,

  popupCtaLabel: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '0.5rem',
    display: 'block',
  } as CSSProperties,

  whatsappBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: '90%',
    padding: '0.8rem',
    backgroundColor: '#25d366',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
  } as CSSProperties,

  mediaQueries: `
    .expert-cta-inner {
      grid-template-columns: 1fr 420px;
    }
    @media (max-width: 860px) {
      .expert-cta-inner {
        grid-template-columns: 1fr !important;
        padding-bottom: 0 !important;
      }
      .expert-cta-content {
        padding-bottom: 2rem !important;
        align-items: center !important;
        text-align: center !important;
      }
      .expert-cta-content p,
      .expert-cta-content h1,
      .expert-cta-content h2 {
        text-align: center;
      }
      .expert-cta-badge-row {
        justify-content: center !important;
        flex-wrap: wrap !important;
      }
      .expert-cta-photo-col {
        justify-content: center !important;
      }
      .expert-cta-photo-col img {
        max-width: 280px !important;
        width: 72vw !important;
      }
    }
    .expert-cta-cta-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
    .expert-cta-whatsapp-btn:hover {
      background-color: #1fb855 !important;
    }
  `,
};
