export const compareCardCss = `
  .cc-root,
  .cc-root *,
  .cc-root *::before,
  .cc-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .cc-root.cc-dark {
    --cc-card: #0A1325;
    --cc-border: rgba(125, 170, 215, 0.14);
    --cc-title: #ffffff;
    --cc-pro-bg: rgba(16, 200, 229, 0.07);
    --cc-con-bg: rgba(255, 255, 255, 0.03);
    --cc-ease: cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* ── light theme ── */
  .cc-root.cc-light {
    --cc-card: #ffffff;
    --cc-border: rgba(3, 36, 71, 0.10);
    --cc-title: #001b41;
    --cc-pro-bg: rgba(16, 200, 229, 0.06);
    --cc-con-bg: rgba(0, 0, 0, 0.02);
    --cc-ease: cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cc-root {
    width: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  /* ── card ── */
  .cc-card {
    position: relative;
    background: var(--cc-card);
    border: 1px solid var(--cc-border);
    padding: 28px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow: hidden;
    transition:
      border-color 0.5s var(--cc-ease),
      box-shadow 0.5s var(--cc-ease);
  }

  /* diagonal shine sweep */
  .cc-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      118deg,
      transparent 20%,
      rgba(16, 200, 229, 0.06) 38%,
      rgba(255, 255, 255, 0.09) 48%,
      rgba(16, 200, 229, 0.06) 58%,
      transparent 76%
    );
    transform: translateX(-130%) skewX(-14deg);
    transition: transform 0.85s var(--cc-ease);
    z-index: 0;
  }

  /* top glow line */
  .cc-card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 15%;
    right: 15%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cc-pro-color, #10C8E5), transparent);
    opacity: 0;
    transition: opacity 0.5s var(--cc-ease);
  }

  .cc-card:hover {
    border-color: color-mix(in srgb, var(--cc-pro-color, #10C8E5) 50%, transparent);
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--cc-pro-color, #10C8E5) 15%, transparent),
      0 0 40px color-mix(in srgb, var(--cc-pro-color, #10C8E5) 8%, transparent);
  }

  .cc-card:hover::before {
    transform: translateX(130%) skewX(-14deg);
  }

  .cc-card:hover::after {
    opacity: 1;
  }

  /* ── title ── */
  .cc-title {
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    color: var(--cc-title);
    margin: 0 0 6px;
    line-height: 1.2;
    position: relative;
    z-index: 1;
  }

  /* ── rows ── */
  .cc-row {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 13px 14px;
    border-left: 3px solid transparent;
    overflow: hidden;
    transition:
      background 0.35s var(--cc-ease),
      border-color 0.35s var(--cc-ease),
      box-shadow 0.35s var(--cc-ease);
  }

  /* row shine */
  .cc-row::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      105deg,
      transparent 30%,
      rgba(255,255,255,0.07) 46%,
      rgba(255,255,255,0.12) 50%,
      rgba(255,255,255,0.07) 54%,
      transparent 70%
    );
    transform: translateX(-120%) skewX(-14deg);
    transition: transform 0.7s var(--cc-ease);
  }

  .cc-row:hover::before {
    transform: translateX(120%) skewX(-14deg);
  }

  .cc-row--pro {
    background: var(--cc-pro-bg);
    border-left-color: color-mix(in srgb, var(--cc-pro-color, #10C8E5) 45%, transparent);
  }

  .cc-row--pro:hover {
    background: color-mix(in srgb, var(--cc-pro-color, #10C8E5) 10%, transparent);
    border-left-color: var(--cc-pro-color, #10C8E5);
    box-shadow: inset 0 0 20px color-mix(in srgb, var(--cc-pro-color, #10C8E5) 6%, transparent);
  }

  .cc-row--con {
    background: var(--cc-con-bg);
    border-left-color: color-mix(in srgb, var(--cc-con-color, #ef4444) 45%, transparent);
  }

  .cc-row--con:hover {
    background: color-mix(in srgb, var(--cc-con-color, #ef4444) 6%, transparent);
    border-left-color: var(--cc-con-color, #ef4444);
    box-shadow: inset 0 0 20px color-mix(in srgb, var(--cc-con-color, #ef4444) 5%, transparent);
  }

  /* ── row icon ── */
  .cc-row-icon {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 3px;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      background 0.35s var(--cc-ease),
      border-color 0.35s var(--cc-ease),
      transform 0.35s var(--cc-ease);
    position: relative;
    z-index: 1;
  }

  .cc-row--pro .cc-row-icon {
    color: var(--cc-pro-color, #10C8E5);
    border-color: color-mix(in srgb, var(--cc-pro-color, #10C8E5) 30%, transparent);
    background: color-mix(in srgb, var(--cc-pro-color, #10C8E5) 8%, transparent);
  }

  .cc-row--pro:hover .cc-row-icon {
    background: color-mix(in srgb, var(--cc-pro-color, #10C8E5) 14%, transparent);
    border-color: color-mix(in srgb, var(--cc-pro-color, #10C8E5) 60%, transparent);
    transform: scale(1.1);
  }

  .cc-row--con .cc-row-icon {
    color: var(--cc-con-color, #ef4444);
    border-color: color-mix(in srgb, var(--cc-con-color, #ef4444) 30%, transparent);
    background: color-mix(in srgb, var(--cc-con-color, #ef4444) 8%, transparent);
  }

  .cc-row--con:hover .cc-row-icon {
    background: color-mix(in srgb, var(--cc-con-color, #ef4444) 14%, transparent);
    border-color: color-mix(in srgb, var(--cc-con-color, #ef4444) 60%, transparent);
    transform: scale(1.1);
  }

  /* ── row text ── */
  .cc-row-text {
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: relative;
    z-index: 1;
  }

  .cc-row-label {
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0;
    line-height: 1.2;
    transition: letter-spacing 0.35s var(--cc-ease);
  }

  .cc-row--pro .cc-row-label {
    color: var(--cc-pro-color, #10C8E5);
  }

  .cc-row--con .cc-row-label {
    color: var(--cc-con-label-color, var(--cc-title));
  }

  .cc-row:hover .cc-row-label {
    letter-spacing: 0.07em;
  }

  .cc-row-desc {
    font-size: 13.5px;
    line-height: 1.5;
    margin: 0;
  }

  .cc-row--pro .cc-row-desc {
    color: var(--cc-pro-desc-color, rgba(0,27,65,0.60));
  }

  .cc-root.cc-dark .cc-row--pro .cc-row-desc {
    color: var(--cc-pro-desc-color, rgba(221,233,249,0.65));
  }

  .cc-row--con .cc-row-desc {
    color: var(--cc-con-desc-color, rgba(0,27,65,0.50));
  }

  .cc-root.cc-dark .cc-row--con .cc-row-desc {
    color: var(--cc-con-desc-color, rgba(221,233,249,0.50));
  }

  @media (prefers-reduced-motion: reduce) {
    .cc-card,
    .cc-card::before,
    .cc-card::after,
    .cc-row,
    .cc-row::before,
    .cc-row-icon {
      transition: none;
    }
  }
`;
