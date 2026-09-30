export const pullQuoteCss = `
  .pq-root,
  .pq-root *,
  .pq-root *::before,
  .pq-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .pq-root.pq-dark {
    --pq-head: #ffffff;
    --pq-dim: rgba(221, 233, 249, 0.56);
    --pq-dim2: rgba(221, 233, 249, 0.72);
    --pq-cyan: #10C8E5;
  }

  /* ── light theme ── */
  .pq-root.pq-light {
    --pq-head: #001b41;
    --pq-dim: rgba(0, 27, 65, 0.60);
    --pq-dim2: rgba(0, 27, 65, 0.75);
    --pq-cyan: #10C8E5;
  }

  .pq-root {
    width: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  .pq-root .pq-quote {
    position: relative;
    margin: 0;
    padding: 64px 0 8px 0;
    max-width: 640px;
  }

  .pq-root .pq-mark {
    font-family: Georgia, serif;
    font-size: 56px;
    line-height: 1;
    color: var(--pq-cyan);
    opacity: 0.55;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .pq-root .pq-text {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 600;
    color: var(--pq-head);
    margin: 0 0 14px;
    overflow-wrap: anywhere;
  }

  .pq-root .pq-text:last-child {
    margin-bottom: 0;
  }

  .pq-root .pq-cite {
    display: block;
    font-style: normal;
    font-size: 13.5px;
    line-height: 1.5;
    color: var(--pq-dim);
    font-weight: 500;
  }

  .pq-root .pq-name {
    color: var(--pq-dim2);
    font-weight: 700;
  }
`;
