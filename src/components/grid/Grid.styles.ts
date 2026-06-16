export const gridCss = `
  .grid-root,
  .grid-root *,
  .grid-root *::before,
  .grid-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .grid-root.grid-dark {
    --grid-field: #070C18;
    --grid-panel: #0A1325;
    --grid-line: rgba(125, 170, 215, 0.14);
    --grid-line-strong: rgba(16, 200, 229, 0.34);
    --grid-head: #ffffff;
    --grid-txt-dim: rgba(221, 233, 249, 0.56);
    --grid-faint: rgba(234, 241, 251, 0.30);
    --grid-cyan: #10C8E5;
    --grid-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --grid-dur-base: 200ms;
    --grid-dur-smooth: 650ms;
  }

  /* ── light theme ── */
  .grid-root.grid-light {
    --grid-field: #f3f4f6;
    --grid-panel: #e8edf5;
    --grid-line: rgba(3, 36, 71, 0.12);
    --grid-line-strong: rgba(16, 200, 229, 0.34);
    --grid-head: #001b41;
    --grid-txt-dim: rgba(0, 27, 65, 0.60);
    --grid-faint: rgba(0, 27, 65, 0.35);
    --grid-cyan: #10C8E5;
    --grid-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --grid-dur-base: 200ms;
    --grid-dur-smooth: 650ms;
  }

  .grid-root {
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    font-family: inherit;
  }

  /* ── grid ── */
  .grid-root .grid-grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-cols, 3), 1fr);
    gap: 14px;
    width: 100%;
    min-width: 0;
  }

  /* ── card ── */
  .grid-root .grid-card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 26px 24px;
    background: var(--grid-field);
    border: 1px solid var(--grid-line);
    min-width: 0;
    overflow: hidden;
    cursor: default;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.7s var(--grid-ease-out),
      transform 0.7s var(--grid-ease-out),
      background var(--grid-dur-base),
      border-color 0.6s var(--grid-ease-out),
      box-shadow 0.6s var(--grid-ease-out);
    transition-delay: calc(var(--grid-index, 0) * 0.06s);
  }

  .grid-root .grid-card.is-visible {
    opacity: 1;
    transform: none;
  }

  .grid-root .grid-card.is-visible:hover {
    background: var(--grid-panel);
    border-color: rgba(16, 200, 229, 0.55);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.20),
      0 0 32px rgba(16, 200, 229, 0.10);
  }

  /* ── corner ticks ── */
  .grid-root .grid-ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--grid-dur-base);
  }

  .grid-root .grid-card.is-visible:hover .grid-ticks {
    opacity: 1;
  }

  .grid-root .grid-tick {
    position: absolute;
    width: 11px;
    height: 11px;
    pointer-events: none;
  }

  .grid-root .grid-tick--tl { top: -1px; left: -1px; border-top: 1px solid var(--grid-line-strong); border-left: 1px solid var(--grid-line-strong); }
  .grid-root .grid-tick--tr { top: -1px; right: -1px; border-top: 1px solid var(--grid-line-strong); border-right: 1px solid var(--grid-line-strong); }
  .grid-root .grid-tick--bl { bottom: -1px; left: -1px; border-bottom: 1px solid var(--grid-line-strong); border-left: 1px solid var(--grid-line-strong); }
  .grid-root .grid-tick--br { bottom: -1px; right: -1px; border-bottom: 1px solid var(--grid-line-strong); border-right: 1px solid var(--grid-line-strong); }

  /* ── icon wrap ── */
  .grid-root .grid-icon-wrap {
    position: relative;
    overflow: hidden;
    width: 44px;
    height: 44px;
    border-radius: 3px;
    border: 1px solid var(--grid-line);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grid-cyan);
    flex-shrink: 0;
    margin-bottom: 16px;
    transition:
      border-color 0.6s var(--grid-ease-out),
      box-shadow 0.6s var(--grid-ease-out),
      transform 0.6s var(--grid-ease-out),
      background 0.6s var(--grid-ease-out);
  }

  .grid-root .grid-icon-shine {
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
    transition: transform 0.95s var(--grid-ease-out);
  }

  .grid-root .grid-icon-wrap > :not(.grid-icon-shine) {
    position: relative;
    z-index: 1;
  }

  .grid-root .grid-card.is-visible:hover .grid-icon-wrap {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.1);
    transform: scale(1.08);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.45),
      0 0 28px rgba(16, 200, 229, 0.28),
      inset 0 0 18px rgba(16, 200, 229, 0.1);
  }

  .grid-root .grid-card.is-visible:hover .grid-icon-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  /* ── text ── */
  .grid-root .grid-title {
    font-weight: 800;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: -0.015em;
    color: var(--grid-head);
    margin: 0 0 8px;
    overflow-wrap: anywhere;
    word-break: break-word;
    transition:
      transform 0.65s var(--grid-ease-out),
      letter-spacing 0.65s var(--grid-ease-out),
      color 0.65s var(--grid-ease-out),
      text-shadow 0.65s var(--grid-ease-out);
  }

  .grid-root .grid-title::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 8px;
    background: linear-gradient(90deg, var(--grid-cyan) 0%, rgba(15, 99, 243, 0.45) 100%);
    transition: width 0.7s var(--grid-ease-out);
  }

  .grid-root .grid-body {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--grid-txt-dim);
    margin: 0;
    overflow-wrap: anywhere;
    transition:
      transform 0.7s var(--grid-ease-out) 0.05s,
      color 0.7s var(--grid-ease-out) 0.05s;
  }

  .grid-root .grid-card.is-visible:hover .grid-title {
    transform: translateX(6px);
    letter-spacing: 0.005em;
    color: var(--grid-head);
    text-shadow: 0 0 20px rgba(16, 200, 229, 0.16);
  }

  .grid-root .grid-card.is-visible:hover .grid-title::after {
    width: 40px;
  }

  .grid-root .grid-card.is-visible:hover .grid-body {
    transform: translateX(6px);
  }

  /* ── responsive ── */
  @media (max-width: 991px) {
    .grid-root .grid-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 567px) {
    .grid-root .grid-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .grid-root .grid-card {
      opacity: 1;
      transform: none;
      transition: none;
    }

    .grid-root .grid-card.is-visible:hover {
      transform: none;
    }

    .grid-root .grid-card.is-visible:hover .grid-icon-wrap {
      transform: none;
    }

    .grid-root .grid-card.is-visible:hover .grid-title,
    .grid-root .grid-card.is-visible:hover .grid-body {
      transform: none;
    }

    .grid-root .grid-icon-shine,
    .grid-root .grid-ticks {
      display: none;
    }
  }
`;
