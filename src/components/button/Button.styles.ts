export const buttonCss = `
  .btn-root,
  .btn-root *,
  .btn-root *::before,
  .btn-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .btn-root.btn-dark {
    --btn-bg:           transparent;
    --btn-bg-hover:     rgba(16, 200, 229, 0.08);
    --btn-border:       rgba(125, 170, 215, 0.22);
    --btn-border-hover: rgba(16, 200, 229, 0.55);
    --btn-text:         rgba(221, 233, 249, 0.85);
    --btn-text-hover:   #ffffff;
    --btn-icon:         #10C8E5;
    --btn-glow:         rgba(16, 200, 229, 0.18);
    --btn-shine:        rgba(255, 255, 255, 0.06);
  }

  /* ── light theme ── */
  .btn-root.btn-light {
    --btn-bg:           transparent;
    --btn-bg-hover:     rgba(16, 200, 229, 0.06);
    --btn-border:       rgba(3, 36, 71, 0.18);
    --btn-border-hover: rgba(16, 200, 229, 0.55);
    --btn-text:         rgba(0, 27, 65, 0.80);
    --btn-text-hover:   #001b41;
    --btn-icon:         #10C8E5;
    --btn-glow:         rgba(16, 200, 229, 0.14);
    --btn-shine:        rgba(16, 200, 229, 0.08);
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
    transition:
      background   0.30s ease,
      border-color 0.30s ease,
      box-shadow   0.30s ease,
      color        0.20s ease;
  }

  /* shine sweep pseudo */
  .btn-el::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 30%,
      var(--btn-shine) 50%,
      transparent 70%
    );
    transform: translateX(-100%);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
    border-radius: inherit;
  }

  .btn-el:hover::before {
    transform: translateX(100%);
  }

  .btn-el:hover {
    background:    var(--btn-bg-hover);
    border-color:  var(--btn-border-hover);
    box-shadow:
      0 0 0 3px var(--btn-glow),
      0 0 18px var(--btn-glow);
  }

  .btn-label {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--btn-text);
    transition: color 0.20s ease;
    position: relative;
    z-index: 1;
  }

  .btn-el:hover .btn-label {
    color: var(--btn-text-hover);
  }

  .btn-icon {
    display: flex;
    align-items: center;
    color: var(--btn-icon);
    position: relative;
    z-index: 1;
    transition: transform 0.30s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .btn-el:hover .btn-icon {
    transform: translate(2px, -2px);
  }

  /* icon-only: no gap, equal padding */
  .btn-el.btn-icon-only {
    padding: 14px;
    gap: 0;
  }
`;
