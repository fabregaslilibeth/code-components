export const caseStudySpotlightCss = `
  .csp-root,
  .csp-root *,
  .csp-root *::before,
  .csp-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .csp-root.csp-dark {
    --csp-field: #070C18;
    --csp-panel: #0A1325;
    --csp-line: rgba(125, 170, 215, 0.14);
    --csp-line-strong: rgba(16, 200, 229, 0.34);
    --csp-head: #ffffff;
    --csp-dim: rgba(221, 233, 249, 0.56);
    --csp-cyan: #10C8E5;
    --csp-tagbg: rgba(7, 12, 24, 0.68);
    --csp-media1: #0A1325;
    --csp-media2: #070C18;
  }

  /* ── light theme ── */
  .csp-root.csp-light {
    --csp-field: #f3f4f6;
    --csp-panel: #e8edf5;
    --csp-line: rgba(3, 36, 71, 0.12);
    --csp-line-strong: rgba(16, 200, 229, 0.34);
    --csp-head: #001b41;
    --csp-dim: rgba(0, 27, 65, 0.60);
    --csp-cyan: #10C8E5;
    --csp-tagbg: rgba(255, 255, 255, 0.80);
    --csp-media1: #e8edf5;
    --csp-media2: #dde6f2;
  }

  .csp-root {
    width: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  /* ── stage ── */
  .csp-root .csp-stage {
    position: relative;
    border: 1px solid var(--csp-line);
    background: var(--csp-field);
    overflow: hidden;
  }

  .csp-root .csp-track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .csp-root .csp-slide {
    flex: 0 0 100%;
    display: grid;
    grid-template-columns: 44% 1fr;
    min-height: 420px;
    min-width: 0;
  }

  /* ── media ── */
  .csp-root .csp-media {
    position: relative;
    overflow: hidden;
    background:
      repeating-linear-gradient(45deg, rgba(16, 200, 229, 0.05) 0 1px, transparent 1px 14px),
      linear-gradient(160deg, var(--csp-media1), var(--csp-media2));
    border-right: 1px solid var(--csp-line);
    min-height: 280px;
  }

  .csp-root .csp-media img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .csp-root .csp-tag {
    position: absolute;
    bottom: 16px;
    left: 16px;
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    background: var(--csp-tagbg);
    backdrop-filter: blur(6px);
    border: 1px solid var(--csp-line-strong);
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--csp-cyan);
  }

  /* ── content ── */
  .csp-root .csp-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 44px;
    min-width: 0;
  }

  .csp-root .csp-client {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--csp-cyan);
    opacity: 0.85;
    margin: 0 0 14px;
  }

  .csp-root .csp-title {
    font-size: clamp(21px, 2.4vw, 28px);
    font-weight: 800;
    line-height: 1.28;
    letter-spacing: -0.01em;
    color: var(--csp-head);
    margin: 0 0 14px;
    overflow-wrap: anywhere;
  }

  .csp-root .csp-excerpt {
    font-size: 14.5px;
    line-height: 1.7;
    color: var(--csp-dim);
    margin: 0 0 24px;
    max-width: 46ch;
    overflow-wrap: anywhere;
  }

  .csp-root .csp-stats {
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding-top: 20px;
    margin-bottom: 24px;
    border-top: 1px solid var(--csp-line);
  }

  .csp-root .csp-stat-value {
    font-size: 32px;
    font-weight: 800;
    color: var(--csp-cyan);
    line-height: 1;
    white-space: nowrap;
  }

  .csp-root .csp-stat-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--csp-dim);
    max-width: 200px;
    line-height: 1.35;
  }

  /* ── CTA ── */
  .csp-root .csp-cta {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    align-self: flex-start;
    padding: 13px 22px;
    background: transparent;
    border: 1px solid var(--csp-line);
    border-radius: 999px;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--csp-head);
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .csp-root .csp-cta::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.08) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .csp-root .csp-cta:hover {
    background: rgba(16, 200, 229, 0.08);
    border-color: rgba(16, 200, 229, 0.55);
    box-shadow: 0 0 0 3px rgba(16, 200, 229, 0.14), 0 0 18px rgba(16, 200, 229, 0.14);
  }

  .csp-root .csp-cta:hover::before {
    transform: translateX(100%);
  }

  .csp-root .csp-cta svg {
    position: relative;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .csp-root .csp-cta:hover svg {
    transform: translate(2px, -2px);
  }

  .csp-root .csp-cta span {
    position: relative;
  }

  @media (max-width: 768px) {
    .csp-root .csp-slide {
      grid-template-columns: 1fr;
      min-height: 0;
    }
    .csp-root .csp-media {
      border-right: none;
      border-bottom: 1px solid var(--csp-line);
      min-height: 220px;
    }
    .csp-root .csp-content {
      padding: 28px 22px 32px;
    }
  }

  /* ── nav ── */
  .csp-root .csp-nav {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 22px;
    flex-wrap: wrap;
  }

  .csp-root .csp-arrow {
    flex-shrink: 0;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid var(--csp-line-strong);
    background: transparent;
    color: var(--csp-cyan);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: 0;
    transition:
      background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .csp-root .csp-arrow::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(105deg, transparent 38%, rgba(255, 255, 255, 0.1) 46%, rgba(16, 200, 229, 0.28) 50%, rgba(255, 255, 255, 0.1) 54%, transparent 62%);
    transform: translateX(-140%) skewX(-14deg);
    transition: transform 0.95s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .csp-root .csp-arrow svg {
    position: relative;
  }

  .csp-root .csp-arrow:hover {
    background: rgba(16, 200, 229, 0.12);
    border-color: rgba(16, 200, 229, 0.9);
    box-shadow: 0 0 0 1px rgba(16, 200, 229, 0.45), 0 0 28px rgba(16, 200, 229, 0.28), inset 0 0 18px rgba(16, 200, 229, 0.1);
    transform: scale(1.08);
  }

  .csp-root .csp-arrow:hover::before {
    transform: translateX(140%) skewX(-14deg);
  }

  .csp-root .csp-arrow:active {
    transform: scale(0.95);
  }

  .csp-root .csp-dots {
    display: flex;
    gap: 8px;
  }

  .csp-root .csp-dot {
    width: 22px;
    height: 3px;
    background: var(--csp-line);
    border: none;
    cursor: pointer;
    padding: 0;
    border-radius: 2px;
    transition: background 0.3s ease, width 0.3s ease;
  }

  .csp-root .csp-dot.is-active {
    background: var(--csp-cyan);
    width: 32px;
  }

  .csp-root .csp-counter {
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--csp-dim);
  }

  .csp-root .csp-arrow:focus-visible,
  .csp-root .csp-cta:focus-visible,
  .csp-root .csp-dot:focus-visible {
    outline: 2px solid var(--csp-cyan);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .csp-root .csp-track,
    .csp-root .csp-cta,
    .csp-root .csp-cta::before,
    .csp-root .csp-arrow,
    .csp-root .csp-arrow::before,
    .csp-root .csp-dot {
      transition: none;
    }
  }
`;
