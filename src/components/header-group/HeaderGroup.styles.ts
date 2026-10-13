export const headerGroupCss = `
  .hg-root,
  .hg-root *,
  .hg-root *::before,
  .hg-root *::after {
    box-sizing: border-box;
  }

  .hg-root {
    --hg-gradient: linear-gradient(90deg, #0F63F3 0%, #00D4FF 50%, #10C8E5 100%);
    --hg-cyan: #10C8E5;
    --hg-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    font-family: inherit;
    width: 100%;
    max-width: 100%;
  }

  .hg-root .hg-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: var(--_typography---font-size--h6, 1.125rem);
    font-weight: 500;
    line-height: 1.5;
    color: var(--hg-cyan);
    margin: 0 0 22px;
  }

  .hg-root .hg-eyebrow-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 8px currentColor;
    flex-shrink: 0;
  }

  .hg-root .hg-heading {
    font-weight: 700;
    font-size: var(--_typography---font-size--h2, 3rem);
    line-height: 1.2;
    margin: 0;
    overflow-wrap: normal;
    word-break: normal;
    hyphens: none;
  }

  .hg-root .hg-grad {
    background: var(--hg-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .hg-root .hg-intro {
    font-size: var(--_typography---font-size--text-main, 1.125rem);
    line-height: 1.5;
    margin: 20px 0 0;
    max-width: 620px;
    overflow-wrap: anywhere;
    white-space: pre-line;
    opacity: 0.65;
  }

  @media (max-width: 860px) {
    .hg-root .hg-intro {
      margin-top: 16px;
    }
  }

  @media (max-width: 480px) {
    .hg-root .hg-eyebrow {
      margin-bottom: 18px;
    }
  }
`;
