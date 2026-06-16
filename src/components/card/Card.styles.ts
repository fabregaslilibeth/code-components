export const cardCss = `
  .card-root,
  .card-root *,
  .card-root *::before,
  .card-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .card-root.card-dark {
    --card-field:       #070C18;
    --card-panel:       #0A1325;
    --card-line:        rgba(125, 170, 215, 0.14);
    --card-line-strong: rgba(16, 200, 229, 0.34);
    --card-head:        #ffffff;
    --card-txt-dim:     rgba(221, 233, 249, 0.56);
    --card-cyan:        #10C8E5;
    --card-ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
    --card-dur-base:    200ms;
    --card-dur-smooth:  650ms;
  }

  /* ── light theme ── */
  .card-root.card-light {
    --card-field:       #f3f4f6;
    --card-panel:       #e8edf5;
    --card-line:        rgba(3, 36, 71, 0.12);
    --card-line-strong: rgba(16, 200, 229, 0.34);
    --card-head:        #001b41;
    --card-txt-dim:     rgba(0, 27, 65, 0.60);
    --card-cyan:        #10C8E5;
    --card-ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
    --card-dur-base:    200ms;
    --card-dur-smooth:  650ms;
  }

  .card-root {
    width: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  /* ── card ── */
  .card-root .card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 26px 24px;
    background: var(--card-field);
    border: 1px solid var(--card-line);
    min-width: 0;
    overflow: hidden;
    cursor: default;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.7s var(--card-ease-out),
      transform 0.7s var(--card-ease-out),
      background var(--card-dur-base),
      border-color 0.6s var(--card-ease-out),
      box-shadow 0.6s var(--card-ease-out);
  }

  .card-root .card.is-visible {
    opacity: 1;
    transform: none;
  }

  .card-root .card.is-visible:hover {
    background: var(--card-panel);
    border-color: rgba(16, 200, 229, 0.55);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.20),
      0 0 32px rgba(16, 200, 229, 0.10);
  }

  /* ── corner ticks ── */
  .card-root .card-ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--card-dur-base);
  }

  .card-root .card.is-visible:hover .card-ticks {
    opacity: 1;
  }

  .card-root .card-tick {
    position: absolute;
    width: 11px;
    height: 11px;
    pointer-events: none;
  }

  .card-root .card-tick--tl { top: -1px; left: -1px; border-top: 1px solid var(--card-line-strong); border-left: 1px solid var(--card-line-strong); }
  .card-root .card-tick--tr { top: -1px; right: -1px; border-top: 1px solid var(--card-line-strong); border-right: 1px solid var(--card-line-strong); }
  .card-root .card-tick--bl { bottom: -1px; left: -1px; border-bottom: 1px solid var(--card-line-strong); border-left: 1px solid var(--card-line-strong); }
  .card-root .card-tick--br { bottom: -1px; right: -1px; border-bottom: 1px solid var(--card-line-strong); border-right: 1px solid var(--card-line-strong); }

  /* ── icon wrap ── */
  .card-root .card-icon-wrap {
    position: relative;
    overflow: hidden;
    width: 44px;
    height: 44px;
    border-radius: 3px;
    border: 1px solid var(--card-line);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--card-cyan);
    flex-shrink: 0;
    margin-bottom: 16px;
    transition:
      border-color 0.6s var(--card-ease-out),
      box-shadow 0.6s var(--card-ease-out),
      transform 0.6s var(--card-ease-out),
      background 0.6s var(--card-ease-out);
  }

  .card-root .card-icon-shine {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      105deg,
      transparent 38%,
      rgba(255, 255, 255, 0.1) 46%,
      rgba(16, 200, 229, 0.28) 50%,
      rgba(255, 255, 255, 0.1) 54%,
      transparent 62%
    );
    transform: translateX(-140%) skewX(-14deg);
    transition: transform 0.95s var(--card-ease-out);
  }

  .card-root .card-icon-wrap > :not(.card-icon-shine) {
    position: relative;
    z-index: 1;
  }

  .card-root .card.is-visible:hover .card-icon-wrap {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.1);
    transform: scale(1.08);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.45),
      0 0 28px rgba(16, 200, 229, 0.28),
      inset 0 0 18px rgba(16, 200, 229, 0.1);
  }

  .card-root .card.is-visible:hover .card-icon-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  /* ── text ── */
  .card-root .card-title {
    font-weight: 800;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: -0.015em;
    color: var(--card-head);
    margin: 0 0 8px;
    overflow-wrap: anywhere;
    word-break: break-word;
    transition:
      transform 0.65s var(--card-ease-out),
      letter-spacing 0.65s var(--card-ease-out),
      color 0.65s var(--card-ease-out),
      text-shadow 0.65s var(--card-ease-out);
  }

  .card-root .card-title::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 8px;
    background: linear-gradient(90deg, var(--card-cyan) 0%, rgba(15, 99, 243, 0.45) 100%);
    transition: width 0.7s var(--card-ease-out);
  }

  .card-root .card-body {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--card-txt-dim);
    margin: 0;
    overflow-wrap: anywhere;
    transition:
      transform 0.7s var(--card-ease-out) 0.05s,
      color 0.7s var(--card-ease-out) 0.05s;
  }

  .card-root .card.is-visible:hover .card-title {
    transform: translateX(6px);
    letter-spacing: 0.005em;
    color: var(--card-head);
    text-shadow: 0 0 20px rgba(16, 200, 229, 0.16);
  }

  .card-root .card.is-visible:hover .card-title::after {
    width: 40px;
  }

  .card-root .card.is-visible:hover .card-body {
    transform: translateX(6px);
  }

  @media (prefers-reduced-motion: reduce) {
    .card-root .card {
      opacity: 1;
      transform: none;
      transition: none;
    }

    .card-root .card.is-visible:hover {
      transform: none;
    }

    .card-root .card.is-visible:hover .card-icon-wrap {
      transform: none;
    }

    .card-root .card.is-visible:hover .card-title,
    .card-root .card.is-visible:hover .card-body {
      transform: none;
    }

    .card-root .card-icon-shine,
    .card-root .card-ticks {
      display: none;
    }
  }
`;
