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
    font-weight: 700;
    font-size: clamp(0.95rem, calc(0.07143vw + 0.9357rem), 1rem);
    letter-spacing: 0.28em;
    text-transform: uppercase;
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
    font-weight: 800;
    font-size: clamp(30px, 4.4vw, 56px);
    text-transform: uppercase;
    letter-spacing: -0.035em;
    line-height: 1.05;
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
    font-size: 16px;
    line-height: 1.65;
    margin: 20px 0 0;
    max-width: 620px;
    overflow-wrap: anywhere;
    opacity: 0.65;
  }

  @media (max-width: 860px) {
    .hg-root .hg-heading {
      font-size: clamp(26px, 7.5vw, 40px);
    }

    .hg-root .hg-intro {
      font-size: 15px;
      margin-top: 16px;
    }
  }

  @media (max-width: 480px) {
    .hg-root .hg-eyebrow {
      letter-spacing: 0.18em;
      margin-bottom: 18px;
    }

    .hg-root .hg-heading {
      font-size: clamp(22px, 7vw, 30px);
    }

    .hg-root .hg-intro {
      font-size: 14px;
    }
  }
`;
