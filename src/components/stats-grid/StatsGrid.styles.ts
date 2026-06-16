export const statsGridCss = `
  .sg-root,
  .sg-root *,
  .sg-root *::before,
  .sg-root *::after {
    box-sizing: border-box;
  }

  /* ── light theme ── */
  .sg-root.sg-light {
    --sg-bg:          #EBF3FB;
    --sg-card-bg:     #ffffff;
    --sg-border:      rgba(3, 36, 71, 0.10);
    --sg-value:       #0F63F3;
    --sg-unit:        #10C8E5;
    --sg-label:       rgba(0, 27, 65, 0.65);
  }

  /* ── dark theme ── */
  .sg-root.sg-dark {
    --sg-bg:          #070C18;
    --sg-card-bg:     #0A1325;
    --sg-border:      rgba(125, 170, 215, 0.14);
    --sg-value:       #10C8E5;
    --sg-unit:        rgba(16, 200, 229, 0.70);
    --sg-label:       rgba(221, 233, 249, 0.65);
  }

  .sg-root {
    width: 100%;
    font-family: inherit;
  }

  .sg-grid {
    display: grid;
    grid-template-columns: repeat(var(--sg-cols, 2), 1fr);
  }

  .sg-card {
    padding: 2rem 1.75rem;
    border: 1px solid var(--sg-border);
    background: var(--sg-card-bg);
    /* collapse borders between cells */
    margin-top: -1px;
    margin-left: -1px;
  }

  .sg-value-row {
    display: flex;
    align-items: baseline;
    gap: 0.15em;
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .sg-value {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 800;
    color: var(--sg-value);
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .sg-unit {
    font-size: clamp(0.8rem, 2vw, 1.05rem);
    font-weight: 700;
    color: var(--sg-unit);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    align-self: flex-start;
    margin-top: 0.3em;
  }

  .sg-label {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--sg-label);
    line-height: 1.4;
  }

  /* ── responsive ── */
  @media (max-width: 600px) {
    .sg-grid {
      grid-template-columns: repeat(
        min(var(--sg-cols, 2), 2),
        1fr
      ) !important;
    }
  }

  @media (max-width: 380px) {
    .sg-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
