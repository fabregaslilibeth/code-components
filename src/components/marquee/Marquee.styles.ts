export const marqueeCss = `
  .mq-root,
  .mq-root *,
  .mq-root *::before,
  .mq-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .mq-root.mq-dark {
    --mq-bg:           #070C18;
    --mq-pill-bg:      #0A1325;
    --mq-pill-border:  rgba(125, 170, 215, 0.14);
    --mq-pill-hover:   #0f1e38;
    --mq-label:        rgba(221, 233, 249, 0.80);
    --mq-label-hover:  #ffffff;
    --mq-icon:         #10C8E5;
    --mq-fade:         #070C18;
  }

  /* ── light theme ── */
  .mq-root.mq-light {
    --mq-bg:           #EBF3FB;
    --mq-pill-bg:      #ffffff;
    --mq-pill-border:  rgba(3, 36, 71, 0.10);
    --mq-pill-hover:   #f0f6ff;
    --mq-label:        rgba(0, 27, 65, 0.75);
    --mq-label-hover:  #001b41;
    --mq-icon:         #10C8E5;
    --mq-fade:         #EBF3FB;
  }

  .mq-root {
    width: 100%;
    overflow: hidden;
    font-family: inherit;
    position: relative;
  }

  /* fade edges */
  .mq-root::before,
  .mq-root::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }

  .mq-root::before {
    left: 0;
    background: linear-gradient(to right, var(--mq-fade), transparent);
  }

  .mq-root::after {
    right: 0;
    background: linear-gradient(to left, var(--mq-fade), transparent);
  }

  /* ── track ── */
  .mq-track {
    display: flex;
    width: max-content;
    padding: 10px 0;
    will-change: transform;
  }

  .mq-track--left {
    animation: mq-scroll-left var(--mq-duration, 30s) linear infinite;
  }

  .mq-track--right {
    animation: mq-scroll-right var(--mq-duration, 30s) linear infinite;
  }

  .mq-root:hover .mq-track {
    animation-play-state: paused;
  }

  @keyframes mq-scroll-left {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  @keyframes mq-scroll-right {
    from { transform: translateX(-50%); }
    to   { transform: translateX(0); }
  }

  /* ── pill ── */
  .mq-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px 8px 12px;
    margin-right: 10px;
    background: var(--mq-pill-bg);
    border: 1px solid var(--mq-pill-border);
    border-radius: 999px;
    white-space: nowrap;
    cursor: default;
    user-select: none;
    transition:
      background 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;
  }

  .mq-pill:hover {
    background: var(--mq-pill-hover);
    border-color: rgba(16, 200, 229, 0.40);
    box-shadow: 0 0 0 1px rgba(16, 200, 229, 0.12);
  }

  .mq-pill-icon {
    color: var(--mq-icon);
    display: flex;
    align-items: center;
    flex-shrink: 0;
    transition: transform 0.25s ease;
  }

  .mq-pill:hover .mq-pill-icon {
    transform: scale(1.15);
  }

  .mq-pill-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--mq-label);
    transition: color 0.25s ease;
  }

  .mq-pill:hover .mq-pill-label {
    color: var(--mq-label-hover);
  }

  @media (prefers-reduced-motion: reduce) {
    .mq-track {
      animation: none !important;
    }

    .mq-root {
      overflow-x: auto;
      scrollbar-width: none;
    }
  }
`;
