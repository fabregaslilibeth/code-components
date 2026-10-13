export const tickBoxCss = `
  .tb-root,
  .tb-root *,
  .tb-root *::before,
  .tb-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .tb-root.tb-dark {
    --tb-panel: #0A1325;
    --tb-line: rgba(125, 170, 215, 0.14);
    --tb-line-strong: rgba(16, 200, 229, 0.34);
    --tb-head: #ffffff;
    --tb-dim: rgba(221, 233, 249, 0.56);
    --tb-cyan: #10C8E5;
  }

  /* ── light theme ── */
  .tb-root.tb-light {
    --tb-panel: #ffffff;
    --tb-line: rgba(3, 36, 71, 0.12);
    --tb-line-strong: rgba(16, 200, 229, 0.34);
    --tb-head: #001b41;
    --tb-dim: rgba(0, 27, 65, 0.60);
    --tb-cyan: #10C8E5;
  }

  .tb-root {
    width: 100%;
    height: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  .tb-root .tb-box {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--tb-panel);
    border: 1px solid var(--tb-line);
    padding: 22px 22px 24px;
  }

  .tb-root .tb-tick {
    position: absolute;
    width: 10px;
    height: 10px;
    pointer-events: none;
  }

  .tb-root .tb-tick.tl {
    top: 8px;
    left: 8px;
    border-top: 1px solid var(--tb-line-strong);
    border-left: 1px solid var(--tb-line-strong);
  }

  .tb-root .tb-tick.tr {
    top: 8px;
    right: 8px;
    border-top: 1px solid var(--tb-line-strong);
    border-right: 1px solid var(--tb-line-strong);
  }

  .tb-root .tb-label {
    font-size: var(--_typography---font-size--text-small, 0.9375rem);
    font-weight: 400;
    line-height: 1.5;
    color: var(--tb-cyan);
    margin: 0 0 8px;
  }

  .tb-root .tb-value {
    font-size: var(--_typography---font-size--text-main, 1.125rem);
    line-height: 1.5;
    color: var(--tb-head);
    margin: 0;
    font-weight: 400;
    overflow-wrap: anywhere;
  }
`;
