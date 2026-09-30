export const atAGlanceCss = `
  .aag-root,
  .aag-root *,
  .aag-root *::before,
  .aag-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .aag-root.aag-dark {
    --aag-field: #070C18;
    --aag-panel: #0A1325;
    --aag-line: rgba(125, 170, 215, 0.14);
    --aag-line-strong: rgba(16, 200, 229, 0.34);
    --aag-head: #ffffff;
    --aag-dim: rgba(221, 233, 249, 0.56);
    --aag-cyan: #10C8E5;
  }

  /* ── light theme ── */
  .aag-root.aag-light {
    --aag-field: #f3f4f6;
    --aag-panel: #ffffff;
    --aag-line: rgba(3, 36, 71, 0.12);
    --aag-line-strong: rgba(16, 200, 229, 0.34);
    --aag-head: #001b41;
    --aag-dim: rgba(0, 27, 65, 0.60);
    --aag-cyan: #10C8E5;
  }

  .aag-root {
    width: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  .aag-root .aag-grid {
    display: grid;
  }

  .aag-root .aag-item {
    position: relative;
    background: var(--aag-panel);
    border: 1px solid var(--aag-line);
    padding: 22px 22px 24px;
    min-width: 0;
  }

  .aag-root .aag-tick {
    position: absolute;
    width: 10px;
    height: 10px;
    pointer-events: none;
  }

  .aag-root .aag-tick.tl {
    top: 8px;
    left: 8px;
    border-top: 1px solid var(--aag-line-strong);
    border-left: 1px solid var(--aag-line-strong);
  }

  .aag-root .aag-tick.tr {
    top: 8px;
    right: 8px;
    border-top: 1px solid var(--aag-line-strong);
    border-right: 1px solid var(--aag-line-strong);
  }

  .aag-root .aag-label {
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--aag-cyan);
    margin: 0 0 8px;
  }

  .aag-root .aag-value {
    font-size: 14.5px;
    line-height: 1.55;
    color: var(--aag-head);
    margin: 0;
    font-weight: 500;
    overflow-wrap: anywhere;
  }
`;
