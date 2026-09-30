export const statBoxCss = `
  .sb-root,
  .sb-root *,
  .sb-root *::before,
  .sb-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .sb-root.sb-dark {
    --sb-field: #070C18;
    --sb-line: rgba(125, 170, 215, 0.14);
    --sb-line-strong: rgba(16, 200, 229, 0.34);
    --sb-head: #ffffff;
    --sb-dim: rgba(221, 233, 249, 0.56);
    --sb-cyan: #10C8E5;
  }

  /* ── light theme ── */
  .sb-root.sb-light {
    --sb-field: #f3f4f6;
    --sb-line: rgba(3, 36, 71, 0.12);
    --sb-line-strong: rgba(16, 200, 229, 0.34);
    --sb-head: #001b41;
    --sb-dim: rgba(0, 27, 65, 0.60);
    --sb-cyan: #10C8E5;
  }

  .sb-root {
    width: 100%;
    height: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  .sb-root .sb-box {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--sb-field);
    border: 1px solid var(--sb-line);
    padding: 26px 20px 24px;
  }

  .sb-root .sb-tick {
    position: absolute;
    width: 10px;
    height: 10px;
    pointer-events: none;
  }

  .sb-root .sb-tick.tl {
    top: 8px;
    left: 8px;
    border-top: 1px solid var(--sb-line-strong);
    border-left: 1px solid var(--sb-line-strong);
  }

  .sb-root .sb-tick.tr {
    top: 8px;
    right: 8px;
    border-top: 1px solid var(--sb-line-strong);
    border-right: 1px solid var(--sb-line-strong);
  }

  .sb-root .sb-tick.bl {
    bottom: 8px;
    left: 8px;
    border-bottom: 1px solid var(--sb-line-strong);
    border-left: 1px solid var(--sb-line-strong);
  }

  .sb-root .sb-tick.br {
    bottom: 8px;
    right: 8px;
    border-bottom: 1px solid var(--sb-line-strong);
    border-right: 1px solid var(--sb-line-strong);
  }

  .sb-root .sb-value {
    font-size: 34px;
    font-weight: 800;
    color: var(--sb-cyan);
    line-height: 1;
    margin: 0 0 10px;
    letter-spacing: -0.01em;
    overflow-wrap: anywhere;
  }

  .sb-root .sb-label {
    font-size: 13px;
    line-height: 1.4;
    color: var(--sb-dim);
    margin: 0;
    overflow-wrap: anywhere;
  }
`;
