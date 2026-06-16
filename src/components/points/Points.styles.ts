export const pointsCss = `
  .pt-root,
  .pt-root *,
  .pt-root *::before,
  .pt-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .pt-root.pt-dark {
    --pt-field:      #070C18;
    --pt-panel:      #0A1325;
    --pt-line:       rgba(125, 170, 215, 0.14);
    --pt-line-strong: rgba(16, 200, 229, 0.34);
    --pt-head:       #ffffff;
    --pt-txt-dim:    rgba(221, 233, 249, 0.56);
    --pt-cyan:       #10C8E5;
    --pt-ease:       cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* ── light theme ── */
  .pt-root.pt-light {
    --pt-field:      #f3f4f6;
    --pt-panel:      #e8edf5;
    --pt-line:       rgba(3, 36, 71, 0.10);
    --pt-line-strong: rgba(16, 200, 229, 0.40);
    --pt-head:       #001b41;
    --pt-txt-dim:    rgba(0, 27, 65, 0.58);
    --pt-cyan:       #10C8E5;
    --pt-ease:       cubic-bezier(0.16, 1, 0.3, 1);
  }

  .pt-root {
    width: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  /* ── card ── */
  .pt-card {
    position: relative;
    background: var(--pt-field);
    border: 1px solid var(--pt-line);
    overflow: hidden;
    transition:
      border-color 0.5s var(--pt-ease),
      box-shadow   0.5s var(--pt-ease);
  }

  /* diagonal shine sweep */
  .pt-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background: linear-gradient(
      118deg,
      transparent 15%,
      rgba(16, 200, 229, 0.05) 36%,
      rgba(255, 255, 255, 0.09) 48%,
      rgba(16, 200, 229, 0.05) 60%,
      transparent 80%
    );
    transform: translateX(-130%) skewX(-14deg);
    transition: transform 0.9s var(--pt-ease);
  }

  /* top glow line */
  .pt-card::after {
    content: "";
    position: absolute;
    top: 0; left: 10%; right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--pt-cyan), transparent);
    opacity: 0;
    transition: opacity 0.5s var(--pt-ease);
  }

  .pt-card:hover {
    border-color: rgba(16, 200, 229, 0.45);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.12),
      0 0 48px rgba(16, 200, 229, 0.07);
  }

  .pt-card:hover::before { transform: translateX(130%) skewX(-14deg); }
  .pt-card:hover::after  { opacity: 1; }


  /* ── header block ── */
  .pt-header {
    position: relative;
    z-index: 1;
    padding: 32px 32px 20px;
  }

  .pt-title {
    font-weight: 800;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: var(--pt-head);
    margin: 0 0 10px;
    line-height: 1.15;
  }

  .pt-body {
    font-size: 15px;
    line-height: 1.62;
    color: var(--pt-txt-dim);
    margin: 0;
    max-width: 640px;
  }

  /* ── points grid ── */
  .pt-grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  /* last card fills the row when alone */
  /* 3-col layout: alone at positions 1, 4, 7, 10… */
  @media (min-width: 661px) {
    .pt-point:last-child:nth-child(3n + 1) {
      grid-column: 1 / -1;
    }
  }

  /* 2-col layout: alone at positions 1, 3, 5, 7… */
  @media (min-width: 441px) and (max-width: 660px) {
    .pt-point:last-child:nth-child(2n + 1) {
      grid-column: 1 / -1;
    }
  }

  /* ── single point ── */
  .pt-point {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 22px 32px;
    border-top: 1px solid var(--pt-line);
    position: relative;
    overflow: hidden;
    transition:
      background 0.35s var(--pt-ease);
  }

  /* point shine on hover */
  .pt-point::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      105deg,
      transparent 30%,
      rgba(16, 200, 229, 0.06) 46%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(16, 200, 229, 0.06) 54%,
      transparent 70%
    );
    transform: translateX(-120%) skewX(-14deg);
    transition: transform 0.65s var(--pt-ease);
  }

  .pt-point:hover {
    background: rgba(16, 200, 229, 0.04);
  }

  .pt-point:hover::before {
    transform: translateX(120%) skewX(-14deg);
  }

  /* ── point icon ── */
  .pt-icon-wrap {
    flex-shrink: 0;
    margin-top: 2px;
    color: var(--pt-cyan);
    position: relative;
    z-index: 1;
    transition: transform 0.35s var(--pt-ease);
  }

  .pt-point:hover .pt-icon-wrap {
    transform: scale(1.15);
  }

  /* ── point text ── */
  .pt-point-text {
    position: relative;
    z-index: 1;
  }

  .pt-point-title {
    font-weight: 800;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: var(--pt-head);
    margin: 0 0 5px;
    transition: color 0.3s var(--pt-ease);
  }

  .pt-point:hover .pt-point-title {
    color: var(--pt-cyan);
  }

  .pt-point-desc {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--pt-txt-dim);
    margin: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .pt-card,
    .pt-card::before,
    .pt-card::after,
    .pt-point,
    .pt-point::before,
    .pt-icon-wrap,
    .pt-point-title {
      transition: none;
    }
  }
`;
