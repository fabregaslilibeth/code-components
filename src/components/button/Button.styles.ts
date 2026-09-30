export const buttonCss = `
  .btn-root,
  .btn-root *,
  .btn-root *::before,
  .btn-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .btn-root.btn-dark {
    --btn-border:       rgba(125, 170, 215, 0.22);
    --btn-border-hover: rgba(16, 200, 229, 0.85);
    --btn-text:         rgba(221, 233, 249, 0.85);
    --btn-text-hover:   #001b41;
    --btn-icon:         #10C8E5;
    --btn-icon-hover:   #001b41;
    --btn-glow:         rgba(16, 200, 229, 0.24);
  }

  /* ── light theme ── */
  .btn-root.btn-light {
    --btn-border:       rgba(3, 36, 71, 0.18);
    --btn-border-hover: rgba(16, 200, 229, 0.85);
    --btn-text:         rgba(0, 27, 65, 0.80);
    --btn-text-hover:   #001b41;
    --btn-icon:         #10C8E5;
    --btn-icon-hover:   #001b41;
    --btn-glow:         rgba(16, 200, 229, 0.20);
  }

  .btn-root {
    display: inline-flex;
    font-family: inherit;
  }

  .btn-el {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: var(--btn-bg);
    border: 1px solid var(--btn-border);
    border-radius: 999px;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    outline: none;
    transition: border-color 0.30s ease, box-shadow 0.30s ease;
  }

  /* solid colour wipe, left → right */
  .btn-el::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--btn-fill);
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
    z-index: 0;
  }

  .btn-el:hover::after {
    transform: scaleX(1);
  }

  .btn-el:hover {
    border-color: var(--btn-border-hover);
    box-shadow:
      0 0 0 3px var(--btn-glow),
      0 0 18px var(--btn-glow);
  }

  .btn-label-mask {
    position: relative;
    z-index: 1;
    display: inline-flex;
  }

  .btn-letter-mask {
    overflow: hidden;
    display: inline-block;
    height: 1.2em;
    line-height: 1.2em;
  }

  .btn-letter-track {
    display: flex;
    flex-direction: column;
    transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .btn-letter {
    display: block;
    height: 1.2em;
    line-height: 1.2em;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--btn-text);
    transition: color 0.2s ease;
  }

  .btn-el:hover .btn-letter-track {
    transform: translateY(-1.2em);
  }

  .btn-el:hover .btn-letter {
    color: var(--btn-text-hover);
  }

  .btn-icon {
    display: flex;
    align-items: center;
    color: var(--btn-icon);
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease, color 0.25s ease;
  }

  .btn-el:hover .btn-icon {
    color: var(--btn-icon-hover);
    transform: translateX(30%) rotate(-45deg);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) var(--btn-icon-delay, 0ms), color 0.25s ease;
  }

  /* icon-only: no gap, equal padding */
  .btn-el.btn-icon-only {
    padding: 14px;
    gap: 0;
  }
`;
