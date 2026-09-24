export const pricingCardCss = `
  .pc-root,
  .pc-root *,
  .pc-root *::before,
  .pc-root *::after {
    box-sizing: border-box;
  }

  /* ── light theme ── */
  .pc-root.pc-light {
    --pc-surface:      #ffffff;
    --pc-surface-alt:  #f4f8fe;
    --pc-head:         #001b41;
    --pc-text:         #2a3a55;
    --pc-dim:          #5a6b85;
    --pc-faint:        #77869d;
    --pc-line:         rgba(0, 27, 65, 0.12);
    --pc-line-strong:  rgba(15, 99, 243, 0.30);
    --pc-band-bg:      #ffffff;
    --pc-band-hover:   #f7faff;
    --pc-shadow:       0 1px 2px rgba(0, 27, 65, 0.05), 0 10px 30px rgba(0, 27, 65, 0.07);
    --pc-badge-bg:     rgba(6, 118, 71, 0.08);
    --pc-badge-text:   #067647;
    --pc-badge-line:   rgba(6, 118, 71, 0.24);
  }

  /* ── dark theme ── */
  .pc-root.pc-dark {
    --pc-surface:      #0a1325;
    --pc-surface-alt:  #070c18;
    --pc-head:         #ffffff;
    --pc-text:         #eaf1fb;
    --pc-dim:          rgba(221, 233, 249, 0.56);
    --pc-faint:        rgba(234, 241, 251, 0.30);
    --pc-line:         rgba(125, 170, 215, 0.14);
    --pc-line-strong:  rgba(16, 200, 229, 0.34);
    --pc-band-bg:      rgba(255, 255, 255, 0.03);
    --pc-band-hover:   #0c1730;
    --pc-shadow:       none;
    --pc-badge-bg:     rgba(18, 183, 106, 0.12);
    --pc-badge-text:   #12b76a;
    --pc-badge-line:   rgba(18, 183, 106, 0.28);
  }

  .pc-root {
    position: relative;
    display: block;
    width: 100%;
    font-family: inherit;
    background: var(--pc-surface);
    border: 1px solid var(--pc-line-strong);
    box-shadow: var(--pc-shadow);
    color: var(--pc-text);
  }

  /* accent bar across the top */
  .pc-root::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--pc-accent) 0%, var(--pc-accent-2) 100%);
  }

  /* ── head ── */
  .pc-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 22px 24px 0;
  }

  .pc-kicker {
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--pc-dim);
  }

  .pc-badge {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 999px;
    white-space: nowrap;
    background: var(--pc-badge-bg);
    color: var(--pc-badge-text);
    border: 1px solid var(--pc-badge-line);
  }

  .pc-body {
    padding: 18px 24px 24px;
  }

  /* ── band selector ── */
  .pc-band-label {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 9px;
  }

  .pc-band-label-text {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--pc-dim);
  }

  .pc-help {
    font-size: 11.5px;
    color: var(--pc-accent);
    text-decoration: none;
    border-bottom: 1px dotted var(--pc-accent);
    transition: opacity 0.2s ease;
  }

  .pc-help:hover {
    opacity: 0.75;
  }

  .pc-bands {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }

  .pc-bands.pc-bands-1 { grid-template-columns: 1fr; }
  .pc-bands.pc-bands-3 { grid-template-columns: repeat(3, 1fr); }

  .pc-band {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: left;
    padding: 11px 12px;
    font-family: inherit;
    background: var(--pc-band-bg);
    border: 1px solid var(--pc-line);
    color: var(--pc-dim);
    cursor: pointer;
    outline: none;
    transition:
      border-color 0.2s ease,
      background   0.2s ease,
      color        0.2s ease;
  }

  .pc-band:hover {
    background: var(--pc-band-hover);
    border-color: var(--pc-accent);
    color: var(--pc-text);
  }

  .pc-band:focus-visible {
    outline: 2px solid var(--pc-accent);
    outline-offset: 2px;
  }

  .pc-band[aria-pressed="true"] {
    background: color-mix(in srgb, var(--pc-accent) 7%, transparent);
    border-color: var(--pc-accent);
    box-shadow: inset 0 0 0 1px var(--pc-accent);
    color: var(--pc-head);
  }

  .pc-band-name {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: inherit;
  }

  .pc-band-sub {
    font-size: 10.5px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    opacity: 0.85;
  }

  /* ── price ── */
  .pc-price-block {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--pc-line);
  }

  .pc-price-block.pc-no-bands {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }

  .pc-price-row {
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-wrap: wrap;
  }

  .pc-price {
    font-size: 52px;
    font-weight: 800;
    letter-spacing: -0.045em;
    line-height: 1;
    color: var(--pc-head);
    font-variant-numeric: tabular-nums;
    transition: opacity 0.16s ease;
  }

  .pc-price.pc-swap { opacity: 0.25; }

  .pc-price-suffix {
    font-size: 13px;
    font-weight: 600;
    color: var(--pc-dim);
    letter-spacing: 0.02em;
  }

  .pc-note {
    margin: 9px 0 0;
    font-size: 12.5px;
    line-height: 1.5;
    color: var(--pc-dim);
  }

  .pc-note strong {
    color: var(--pc-head);
    font-weight: 700;
  }

  /* ── checklist ── */
  .pc-list {
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin: 20px 0;
    padding: 17px 0;
    list-style: none;
    border-top: 1px solid var(--pc-line);
    border-bottom: 1px solid var(--pc-line);
  }

  .pc-list-item {
    display: flex;
    gap: 9px;
    align-items: flex-start;
    font-size: 13px;
    line-height: 1.45;
    color: var(--pc-dim);
  }

  .pc-list-icon {
    flex: 0 0 auto;
    margin-top: 1px;
    color: var(--pc-accent);
    display: inline-flex;
  }

  .pc-list-item strong {
    color: var(--pc-head);
    font-weight: 600;
  }

  /* ── actions ── */
  .pc-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    width: 100%;
    padding: 15px 26px;
    font-family: inherit;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    background: var(--pc-cta-bg);
    color: var(--pc-cta-text);
    transition: filter 0.2s ease, box-shadow 0.2s ease;
  }

  .pc-cta:hover {
    filter: brightness(0.92);
    box-shadow: 0 10px 26px color-mix(in srgb, var(--pc-cta-bg) 30%, transparent);
  }

  .pc-cta:focus-visible {
    outline: 2px solid var(--pc-accent);
    outline-offset: 3px;
  }

  .pc-cta-icon {
    display: inline-flex;
    transition: transform 0.2s ease;
  }

  .pc-cta:hover .pc-cta-icon {
    transform: translateX(3px);
  }

  .pc-alt {
    display: block;
    margin-top: 11px;
    padding: 11px;
    font-size: 12.5px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: var(--pc-dim);
    border: 1px solid var(--pc-line);
    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
  }

  .pc-alt:hover {
    border-color: var(--pc-line-strong);
    color: var(--pc-head);
    background: var(--pc-surface-alt);
  }

  .pc-fine {
    margin: 14px 0 0;
    font-size: 11.5px;
    line-height: 1.55;
    text-align: center;
    color: var(--pc-faint);
  }

  /* ── footnote ── */
  .pc-foot {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 12px;
    padding: 13px 14px;
    font-size: 11.5px;
    line-height: 1.45;
    color: var(--pc-dim);
    background: var(--pc-surface-alt);
    border: 1px solid var(--pc-line);
  }

  .pc-foot-icon {
    flex: 0 0 auto;
    margin-top: 1px;
    color: var(--pc-accent);
    display: inline-flex;
  }

  @media (max-width: 420px) {
    .pc-bands,
    .pc-bands.pc-bands-3 { grid-template-columns: 1fr; }
    .pc-price { font-size: 44px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .pc-root *,
    .pc-root *::before,
    .pc-root *::after {
      transition-duration: 0.01ms !important;
    }
  }
`;
