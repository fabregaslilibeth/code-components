export const solutionStepsCss = `
  .ss-root,
  .ss-root *,
  .ss-root *::before,
  .ss-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .ss-root.ss-dark {
    --ss-panel: #0A1325;
    --ss-line: rgba(125, 170, 215, 0.14);
    --ss-line-strong: rgba(16, 200, 229, 0.34);
    --ss-head: #ffffff;
    --ss-dim: rgba(221, 233, 249, 0.56);
    --ss-cyan: #10C8E5;
  }

  /* ── light theme ── */
  .ss-root.ss-light {
    --ss-panel: #f3f4f6;
    --ss-line: rgba(3, 36, 71, 0.12);
    --ss-line-strong: rgba(16, 200, 229, 0.34);
    --ss-head: #001b41;
    --ss-dim: rgba(0, 27, 65, 0.60);
    --ss-cyan: #10C8E5;
  }

  .ss-root {
    width: 100%;
    height: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  .ss-root .ss-step {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--ss-panel);
    border: 1px solid var(--ss-line);
    padding: 26px 24px 28px;
  }

  .ss-root .ss-icon {
    width: 42px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid var(--ss-line-strong);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ss-cyan);
    margin-bottom: 18px;
  }

  .ss-root .ss-title {
    font-size: var(--_typography---font-size--h4, 1.5rem);
    font-weight: 500;
    line-height: 1.3;
    color: var(--ss-head);
    margin: 0 0 10px;
    overflow-wrap: anywhere;
  }

  .ss-root .ss-body {
    font-size: var(--_typography---font-size--text-main, 1.125rem);
    line-height: 1.5;
    color: var(--ss-dim);
    margin: 0;
    overflow-wrap: anywhere;
  }

  /* icon stays top, text sits at the bottom when the card is taller than its content (bento tall tile) */
  .ss-root .ss-icon + * {
    margin-top: auto;
  }
`;
