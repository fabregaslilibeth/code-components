import { CSSProperties } from 'react';

export const S = {
  root: {
    position: 'relative',
    fontFamily: 'inherit',
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
    fontSize: 'var(--_typography---font-size--h6, 1.125rem)',
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#3b82f6',
    marginBottom: '0.5rem',
    margin: '0 0 0.5rem 0',
  } as CSSProperties,

  headline: {
    fontSize: 'var(--_typography---font-size--h4, 1.5rem)',
    fontWeight: 500,
    color: '#ffffff',
    margin: '0 0 0.1rem 0',
    lineHeight: 1.3,
  } as CSSProperties,

  name: {
    fontSize: 'var(--_typography---font-size--h2, 3rem)',
    fontWeight: 700,
    background: 'linear-gradient(90deg, #0F63F3 0%, #00D4FF 50%, #10C8E5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 0 1.5rem 0',
    lineHeight: 1.2,
  } as CSSProperties,

  tagline: {
    fontSize: 'var(--_typography---font-size--h6, 1.125rem)',
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#ffffff',
    margin: '0 0 0.65rem 0',
  } as CSSProperties,

  body: {
    fontSize: 'var(--_typography---font-size--text-main, 1.125rem)',
    lineHeight: 1.5,
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
    fontSize: 'var(--_typography---font-size--text-small, 0.9375rem)',
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.5,
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
    font: 'inherit',
    fontSize: 'var(--_typography---font-size--text-main, 1.125rem)',
    fontWeight: 400,
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.15s',
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
    fontFamily: 'inherit',
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
    fontSize: 'var(--_typography---font-size--h6, 1.125rem)',
    fontWeight: 500,
    color: '#ffffff',
    margin: 0,
    lineHeight: 1.5,
  } as CSSProperties,

  popupRole: {
    fontSize: 'var(--_typography---font-size--text-small, 0.9375rem)',
    lineHeight: 1.5,
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
    font: 'inherit',
    fontSize: 'var(--_typography---font-size--text-main, 1.125rem)',
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
    fontSize: 'var(--_typography---font-size--text-small, 0.9375rem)',
    lineHeight: 1.5,
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
    fontSize: 'var(--_typography---font-size--text-small, 0.9375rem)',
    lineHeight: 1.5,
    maxWidth: '240px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  } as CSSProperties,

  popupCta: {
    textAlign: 'center',
    marginBottom: '0.75rem',
  } as CSSProperties,

  popupCtaLabel: {
    fontSize: 'var(--_typography---font-size--text-small, 0.9375rem)',
    fontWeight: 400,
    lineHeight: 1.5,
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
    fontSize: 'var(--_typography---font-size--text-main, 1.125rem)',
    fontWeight: 400,
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
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
    .expert-cta-cta-btn::after,
    .expert-cta-whatsapp-btn::after {
      content: '';
      position: absolute;
      inset: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
      pointer-events: none;
      z-index: 0;
    }
    .expert-cta-cta-btn:hover::after,
    .expert-cta-whatsapp-btn:hover::after {
      transform: scaleX(1);
    }
    .expert-cta-cta-btn::after {
      background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
    }
    .expert-cta-whatsapp-btn::after {
      background: #1fb855;
    }
    .expert-cta-cta-btn > *,
    .expert-cta-whatsapp-btn > * {
      position: relative;
      z-index: 1;
    }
    .expert-cta-cta-btn:hover {
      transform: translateY(-1px);
    }
    .expert-cta-label-mask {
      display: inline-flex;
    }
    .expert-cta-letter-mask {
      overflow: hidden;
      display: inline-block;
      height: 1.2em;
      line-height: 1.2em;
    }
    .expert-cta-letter-track {
      display: flex;
      flex-direction: column;
      transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .expert-cta-letter {
      display: block;
      height: 1.2em;
      line-height: 1.2em;
    }
    .expert-cta-cta-btn:hover .expert-cta-letter-track,
    .expert-cta-whatsapp-btn:hover .expert-cta-letter-track {
      transform: translateY(-1.2em);
    }
    @media (prefers-reduced-motion: reduce) {
      .expert-cta-cta-btn,
      .expert-cta-whatsapp-btn,
      .expert-cta-cta-btn::after,
      .expert-cta-whatsapp-btn::after,
      .expert-cta-letter-track {
        transition: none;
      }
    }
  `,
};
