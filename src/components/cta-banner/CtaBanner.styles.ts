export const ctaBannerCss = `
  .ctab-root,
  .ctab-root *,
  .ctab-root *::before,
  .ctab-root *::after {
    box-sizing: border-box;
  }

  /* ── outer dark shell ── */
  .ctab-root {
    width: 100%;
    font-family: inherit;
    background: #070C18;
    padding: 40px;
  }

  /* ── inner card ── */
  .ctab-card {
    position: relative;
    border-radius: 6px;
    border: 1px solid rgba(16, 200, 229, 0.25);
    background:
      radial-gradient(ellipse 50% 80% at 80% 50%, #0d2ea8 0%, #071a5e 40%, #030812 100%);
    padding: 52px 56px;
    max-width: 1300px;
    margin: 0 auto;
    overflow: hidden;
    box-shadow:
      inset 0 0 0 1px rgba(16, 200, 229, 0.45),
      inset 0 0 28px rgba(16, 200, 229, 0.12);
  }

  /* ── card shine sweep on hover ── */
  .ctab-card::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background: linear-gradient(
      105deg,
      transparent 38%,
      rgba(255, 255, 255, 0.06) 46%,
      rgba(16, 200, 229, 0.14) 50%,
      rgba(255, 255, 255, 0.06) 54%,
      transparent 62%
    );
    transform: translateX(-140%) skewX(-14deg);
    transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .ctab-card:hover::before {
    transform: translateX(140%) skewX(-14deg);
  }

  /* ── corner ticks ── */
  .ctab-tick {
    position: absolute;
    width: 16px;
    height: 16px;
    pointer-events: none;
    z-index: 2;
  }

  .ctab-tick--tl { top: 8px;    left: 8px;  border-top:    2px solid #10C8E5; border-left:   2px solid #10C8E5; }
  .ctab-tick--tr { top: 8px;    right: 8px; border-top:    2px solid #10C8E5; border-right:  2px solid #10C8E5; }
  .ctab-tick--bl { bottom: 8px; left: 8px;  border-bottom: 2px solid #10C8E5; border-left:   2px solid #10C8E5; }
  .ctab-tick--br { bottom: 8px; right: 8px; border-bottom: 2px solid #10C8E5; border-right:  2px solid #10C8E5; }

  /* ── layout ── */
  .ctab-inner {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 48px;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  /* ── left ── */
  .ctab-left {
    min-width: 0;
  }

  /* eyebrow */
  .ctab-eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #10C8E5;
    margin: 0 0 18px;
  }

  .ctab-eyebrow-sq {
    display: inline-block;
    width: 7px;
    height: 7px;
    background: #10C8E5;
    flex-shrink: 0;
  }

  /* heading */
  .ctab-heading {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    line-height: 1.0;
    margin: 0 0 28px;
    color: #ffffff;
    word-break: normal;
    hyphens: none;
  }

  .ctab-heading-highlight {
    display: block;
    background: linear-gradient(90deg, #10C8E5 0%, #3b82f6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* contacts — horizontal row */
  .ctab-contacts {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 32px;
  }

  .ctab-contact {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.75);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
  }

  .ctab-contact:hover {
    color: #10C8E5;
  }

  .ctab-contact svg {
    flex-shrink: 0;
    color: #10C8E5;
  }

  /* ── actions ── */
  .ctab-actions {
    display: flex;
    flex-direction: column;
    gap: 14px;
    min-width: 300px;
  }

  .ctab-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 15px 28px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition:
      background 0.3s cubic-bezier(0.16,1,0.3,1),
      border-color 0.3s cubic-bezier(0.16,1,0.3,1),
      box-shadow 0.3s cubic-bezier(0.16,1,0.3,1),
      transform 0.2s cubic-bezier(0.16,1,0.3,1);
    border: 2px solid transparent;
  }

  .ctab-btn:hover {
    transform: translateY(-1px);
  }

  /* primary — red by default */
  .ctab-btn--primary {
    background: #e11d48;
    border-color: #e11d48;
    color: #ffffff;
    box-shadow: 0 0 24px rgba(225, 29, 72, 0.35);
  }

  .ctab-btn--primary:hover {
    background: #be123c;
    border-color: #be123c;
    box-shadow: 0 0 36px rgba(225, 29, 72, 0.55);
  }

  .ctab-btn svg {
    transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);
  }

  .ctab-btn:hover svg {
    transform: translate(2px, -2px);
  }

  /* secondary — dark with border */
  .ctab-btn--secondary {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.22);
    color: #ffffff;
  }

  .ctab-btn--secondary:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.50);
  }

  /* ── responsive ── */
  @media (max-width: 860px) {
    .ctab-root {
      padding: 24px;
    }

    .ctab-card {
      padding: 40px 32px;
    }

    .ctab-inner {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .ctab-actions {
      min-width: 0;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .ctab-root {
      padding: 16px;
    }

    .ctab-card {
      padding: 32px 20px;
    }

    .ctab-heading {
      font-size: clamp(1.6rem, 8vw, 2.2rem);
      margin-bottom: 20px;
    }

    .ctab-contacts {
      flex-direction: column;
      gap: 10px;
    }

    .ctab-btn {
      font-size: 0.7rem;
      padding: 14px 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ctab-btn { transition: none; }
  }
`;
