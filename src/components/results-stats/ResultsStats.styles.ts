export const resultsStatsCss = `
  .rs-root,
  .rs-root *,
  .rs-root *::before,
  .rs-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .rs-root.rs-dark {
    --rs-field: #070C18;
    --rs-line: rgba(125, 170, 215, 0.14);
    --rs-line-strong: rgba(16, 200, 229, 0.34);
    --rs-head: #ffffff;
    --rs-dim: rgba(221, 233, 249, 0.56);
    --rs-cyan: #10C8E5;
  }

  /* ── light theme ── */
  .rs-root.rs-light {
    --rs-field: #f3f4f6;
    --rs-line: rgba(3, 36, 71, 0.12);
    --rs-line-strong: rgba(16, 200, 229, 0.34);
    --rs-head: #001b41;
    --rs-dim: rgba(0, 27, 65, 0.60);
    --rs-cyan: #10C8E5;
  }

  .rs-root {
    width: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  .rs-root .rs-grid {
    display: grid;
  }

  .rs-root .rs-stat {
    position: relative;
    background: var(--rs-field);
    border: 1px solid var(--rs-line);
    padding: 26px 20px 24px;
    min-width: 0;
  }

  .rs-root .rs-tick {
    position: absolute;
    width: 10px;
    height: 10px;
    pointer-events: none;
  }

  .rs-root .rs-tick.tl {
    top: 8px;
    left: 8px;
    border-top: 1px solid var(--rs-line-strong);
    border-left: 1px solid var(--rs-line-strong);
  }

  .rs-root .rs-tick.tr {
    top: 8px;
    right: 8px;
    border-top: 1px solid var(--rs-line-strong);
    border-right: 1px solid var(--rs-line-strong);
  }

  .rs-root .rs-value {
    font-size: 34px;
    font-weight: 800;
    color: var(--rs-cyan);
    line-height: 1;
    margin: 0 0 10px;
    letter-spacing: -0.01em;
    overflow-wrap: anywhere;
  }

  .rs-root .rs-label {
    font-size: 13px;
    line-height: 1.4;
    color: var(--rs-dim);
    margin: 0;
    overflow-wrap: anywhere;
  }
`;
