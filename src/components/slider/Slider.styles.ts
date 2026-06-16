export const sliderCss = `
  .sl-root,
  .sl-root *,
  .sl-root *::before,
  .sl-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .sl-root.sl-dark {
    --sl-field: #070C18;
    --sl-panel: #0A1325;
    --sl-line: rgba(125, 170, 215, 0.14);
    --sl-line-strong: rgba(16, 200, 229, 0.34);
    --sl-head: #ffffff;
    --sl-txt-dim: rgba(221, 233, 249, 0.56);
    --sl-faint: rgba(234, 241, 251, 0.30);
    --sl-cyan: #10C8E5;
    --sl-arrow-bg: transparent;
    --sl-arrow-border: rgba(16, 200, 229, 0.50);
    --sl-arrow-color: #10C8E5;
    --sl-arrow-hover-bg: rgba(16, 200, 229, 0.12);
    --sl-arrow-hover-border: rgba(16, 200, 229, 0.90);
  }

  /* ── light theme ── */
  .sl-root.sl-light {
    --sl-field: #f3f4f6;
    --sl-panel: #e8edf5;
    --sl-line: rgba(3, 36, 71, 0.12);
    --sl-line-strong: rgba(16, 200, 229, 0.34);
    --sl-head: #001b41;
    --sl-txt-dim: rgba(0, 27, 65, 0.60);
    --sl-faint: rgba(0, 27, 65, 0.35);
    --sl-cyan: #10C8E5;
    --sl-arrow-bg: transparent;
    --sl-arrow-border: rgba(0, 27, 65, 0.25);
    --sl-arrow-color: #001b41;
    --sl-arrow-hover-bg: rgba(16, 200, 229, 0.10);
    --sl-arrow-hover-border: rgba(16, 200, 229, 0.80);
  }

  .sl-root {
    width: 100%;
    max-width: 100%;
    font-family: inherit;
    position: relative;
  }

  /* ── track ── */
  .sl-root .sl-track {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 4px 2px 12px;
    flex: 1;
    min-width: 0;
  }

  .sl-root .sl-track::-webkit-scrollbar {
    display: none;
  }

  /* ── slide wrapper ── */
  .sl-root .sl-slide {
    flex: 0 0 var(--sl-basis, clamp(258px, 82%, 340px));
    scroll-snap-align: start;
    display: flex;
  }

  /* ── card ── */
  .sl-root .sl-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 28px 24px 24px;
    background: var(--sl-field);
    border: 1px solid var(--sl-line);
    overflow: hidden;
    cursor: default;
    transition:
      border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
      background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* diagonal shine sweep across full card */
  .sl-root .sl-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      118deg,
      transparent 20%,
      rgba(16, 200, 229, 0.07) 38%,
      rgba(255, 255, 255, 0.10) 48%,
      rgba(16, 200, 229, 0.07) 58%,
      transparent 76%
    );
    transform: translateX(-120%) skewX(-14deg);
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 0;
  }

  /* bottom accent line */
  .sl-root .sl-card::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--sl-cyan), rgba(15, 99, 243, 0.6));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sl-root .sl-card:hover {
    border-color: rgba(16, 200, 229, 0.6);
    background-color: var(--sl-panel);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.15),
      inset 0 1px 0 rgba(16, 200, 229, 0.25),
      0 0 40px rgba(16, 200, 229, 0.08);
  }

  .sl-root .sl-card:hover::before {
    transform: translateX(120%) skewX(-14deg);
  }

  .sl-root .sl-card:hover::after {
    transform: scaleX(1);
  }

  /* ── icon wrap ── */
  .sl-root .sl-icon-wrap {
    position: relative;
    overflow: hidden;
    width: 48px;
    height: 48px;
    border-radius: 4px;
    border: 1px solid var(--sl-line-strong);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sl-cyan);
    flex-shrink: 0;
    margin-bottom: auto;
    transition:
      border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
      background 0.5s cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* icon shine sweep */
  .sl-root .sl-icon-wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      105deg,
      transparent 38%,
      rgba(255, 255, 255, 0.12) 46%,
      rgba(16, 200, 229, 0.32) 50%,
      rgba(255, 255, 255, 0.12) 54%,
      transparent 62%
    );
    transform: translateX(-140%) skewX(-14deg);
    transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sl-root .sl-card:hover .sl-icon-wrap {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.10);
    transform: scale(1.1) rotate(-2deg);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.35),
      0 0 28px rgba(16, 200, 229, 0.28),
      inset 0 0 16px rgba(16, 200, 229, 0.10);
  }

  .sl-root .sl-card:hover .sl-icon-wrap::after {
    transform: translateX(140%) skewX(-14deg);
  }

  /* ── text ── */
  .sl-root .sl-title {
    font-weight: 800;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: -0.015em;
    color: var(--sl-head);
    margin: 28px 0 10px;
    overflow-wrap: anywhere;
    word-break: break-word;
    line-height: 1.2;
    transition:
      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
      text-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sl-root .sl-card:hover .sl-title {
    transform: translateX(4px);
    text-shadow: 0 0 24px rgba(16, 200, 229, 0.18);
  }

  .sl-root .sl-body {
    font-size: 14px;
    line-height: 1.6;
    color: var(--sl-txt-dim);
    margin: 0;
    overflow-wrap: anywhere;
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.04s;
  }

  .sl-root .sl-card:hover .sl-body {
    transform: translateX(4px);
  }

  /* ── arrows — absolutely flanking the track ── */
  .sl-root .sl-track-wrap {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0;
  }

  .sl-root .sl-arrow {
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid var(--sl-arrow-border);
    background: var(--sl-arrow-bg);
    color: var(--sl-arrow-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 12px;
    transition:
      background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 0;
    outline: none;
  }

  /* shine sweep */
  .sl-root .sl-arrow::before {
    content: "";
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
    transition: transform 0.95s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1;
  }

  .sl-root .sl-arrow svg {
    position: relative;
    z-index: 2;
  }

  .sl-root .sl-arrow:hover {
    background: var(--sl-arrow-hover-bg);
    border-color: var(--sl-arrow-hover-border);
    color: var(--sl-cyan);
    transform: scale(1.08);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.45),
      0 0 28px rgba(16, 200, 229, 0.28),
      inset 0 0 18px rgba(16, 200, 229, 0.10);
  }

  .sl-root .sl-arrow:hover::before {
    transform: translateX(140%) skewX(-14deg);
  }

  .sl-root .sl-arrow:active {
    transform: scale(0.95);
  }

  .sl-root .sl-arrow:focus-visible {
    outline: 2px solid var(--sl-cyan);
    outline-offset: 2px;
  }

  /* ── mobile: hide flanking arrows, show bottom-right row ── */
  .sl-root .sl-arrows-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .sl-root .sl-track-wrap {
      flex-direction: column;
      align-items: stretch;
    }

    .sl-root .sl-arrow--flanking {
      display: none;
    }

    .sl-root .sl-arrows-mobile {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      padding-top: 14px;
    }

    .sl-root .sl-arrows-mobile .sl-arrow {
      margin: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sl-root .sl-track {
      scroll-behavior: auto;
    }

    .sl-root .sl-card,
    .sl-root .sl-card::before,
    .sl-root .sl-card::after,
    .sl-root .sl-icon-wrap,
    .sl-root .sl-icon-wrap::after,
    .sl-root .sl-title,
    .sl-root .sl-body,
    .sl-root .sl-arrow {
      transition: none;
    }

    .sl-root .sl-arrow::before {
      display: none;
    }
  }
`;
