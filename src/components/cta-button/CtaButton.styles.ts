export const ctaButtonCss = `
  .cb-root,
  .cb-root *,
  .cb-root *::before,
  .cb-root *::after {
    box-sizing: border-box;
  }

  .cb-root {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-family: inherit;
  }

  /* ── alignment variants (Webflow breakpoints) ── */
  .cb-root.cb-pos-center { justify-content: center; }

  @media (max-width: 991px) {
    .cb-root.cb-pos-tablet-center { justify-content: center; }
  }

  @media (max-width: 767px) {
    .cb-root.cb-pos-mobile-l-center { justify-content: center; }
  }

  @media (max-width: 479px) {
    .cb-root.cb-pos-mobile-center { justify-content: center; }
  }

  /* ── the button itself ── */
  .cb-el {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    font-family: inherit;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    border: 1px solid transparent;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    background: var(--cb-bg);
    color: var(--cb-text);
    transition:
      background 0.25s ease,
      box-shadow 0.25s ease,
      color      0.20s ease,
      filter     0.25s ease;
  }

  /* diagonal shine sweep */
  .cb-el::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 30%,
      rgba(255, 255, 255, 0.16) 50%,
      transparent 70%
    );
    transform: translateX(-100%);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  }

  .cb-el:hover::before {
    transform: translateX(100%);
  }

  .cb-el:hover {
    background: var(--cb-bg-hover);
    box-shadow: 0 10px 26px var(--cb-glow);
  }

  .cb-el:focus-visible {
    outline: 2px solid var(--cb-bg);
    outline-offset: 3px;
  }

  .cb-label,
  .cb-icon {
    position: relative;
    z-index: 1;
  }

  .cb-icon {
    display: inline-flex;
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cb-el:hover .cb-icon { transform: translateX(3px); }
  .cb-el.cb-diag:hover .cb-icon { transform: translate(2px, -2px); }

  /* ── size variants ── */
  .cb-el.cb-size-small {
    padding: 11px 20px;
    font-size: 12px;
    gap: 7px;
  }

  .cb-el.cb-size-big {
    padding: 16px 32px;
    font-size: 14px;
    gap: 10px;
  }

  /* ── shape variants ── */
  .cb-el.cb-shape-pill    { border-radius: 999px; }
  .cb-el.cb-shape-rounded { border-radius: 8px; }
  .cb-el.cb-shape-square  { border-radius: 0; }

  /* ── icon-only ── */
  .cb-el.cb-icon-only.cb-size-small { padding: 11px; }
  .cb-el.cb-icon-only.cb-size-big   { padding: 16px; }

  @media (prefers-reduced-motion: reduce) {
    .cb-el,
    .cb-el::before,
    .cb-icon {
      transition-duration: 0.01ms !important;
    }
  }
`;
