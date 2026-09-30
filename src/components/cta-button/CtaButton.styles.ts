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
    transition: box-shadow 0.25s ease;
  }

  /* solid colour wipe, left → right */
  .cb-el::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--cb-bg-hover);
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
    z-index: 0;
  }

  .cb-el:hover::after {
    transform: scaleX(1);
  }

  .cb-el:hover {
    box-shadow: 0 10px 26px var(--cb-glow);
  }

  .cb-el:focus-visible {
    outline: 2px solid var(--cb-bg);
    outline-offset: 3px;
  }

  .cb-label-mask,
  .cb-icon {
    position: relative;
    z-index: 1;
  }

  .cb-label-mask {
    display: inline-flex;
  }

  .cb-letter-mask {
    overflow: hidden;
    display: inline-block;
    height: 1.2em;
    line-height: 1.2em;
  }

  .cb-letter-track {
    display: flex;
    flex-direction: column;
    transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cb-letter {
    display: block;
    height: 1.2em;
    line-height: 1.2em;
  }

  .cb-icon {
    display: inline-flex;
    transition: transform 0.3s ease;
  }

  .cb-el:hover .cb-letter-track { transform: translateY(-1.2em); }
  .cb-el:hover .cb-icon {
    transform: translateX(30%) rotate(-45deg);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) var(--cb-icon-delay, 0ms);
  }

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
    .cb-el::after,
    .cb-letter-track,
    .cb-icon {
      transition-duration: 0.01ms !important;
      transition-delay: 0ms !important;
    }
  }
`;
