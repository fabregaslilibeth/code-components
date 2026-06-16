export const whyBentoLightCss = `
  .wbl-root,
  .wbl-root *,
  .wbl-root *::before,
  .wbl-root *::after {
    box-sizing: border-box;
  }

  .wbl-root {
    --wbl-bg: #ffffff;
    --wbl-field: #f3f4f6;
    --wbl-panel: #e8edf5;
    --wbl-line: rgba(3, 36, 71, 0.12);
    --wbl-line-strong: rgba(16, 200, 229, 0.34);
    --wbl-txt: #001b41;
    --wbl-txt-dim: rgba(0, 27, 65, 0.60);
    --wbl-head: #001b41;
    --wbl-faint: rgba(0, 27, 65, 0.35);
    --wbl-blue: #0F63F3;
    --wbl-cyan: #10C8E5;
    --wbl-gradient-h: linear-gradient(90deg, #0F63F3 0%, #00D4FF 50%, #10C8E5 100%);
    --wbl-dur-base: 200ms;
    --wbl-dur-smooth: 650ms;
    --wbl-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    font-family: inherit;
    color: var(--wbl-txt);
    background: var(--wbl-bg);
  }

  /* ── container ── */
  .wbl-root .wbl-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    min-width: 0;
  }

  /* ── bento grid ── */
  .wbl-root .wbl-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(186px, auto);
    gap: 14px;
    width: 100%;
    min-width: 0;
  }

  /* ── tile base ── */
  .wbl-root .wbl-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--wbl-line);
    cursor: default;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.7s var(--wbl-ease-out),
      transform 0.7s var(--wbl-ease-out),
      background var(--wbl-dur-base),
      border-color 0.6s var(--wbl-ease-out),
      box-shadow 0.6s var(--wbl-ease-out);
    transition-delay: calc(var(--wbl-index, 0) * 0.06s);
  }

  .wbl-root .wbl-tile.is-visible {
    opacity: 1;
    transform: none;
  }

  .wbl-root .wbl-tile.is-visible:hover {
    border-color: rgba(15, 99, 243, 0.40);
    box-shadow: 0 12px 40px rgba(0, 27, 65, 0.10);
    transform: translateY(-3px);
  }

  /* ── tile variants ── */
  .wbl-root .wbl-tile--default {
    padding: 28px;
    background: var(--wbl-field);
  }

  .wbl-root .wbl-tile--default:hover {
    background: var(--wbl-panel);
  }

  .wbl-root .wbl-tile--big {
    padding: 34px 32px;
    background: var(--wbl-field);
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .wbl-root .wbl-tile--big:hover {
    background: var(--wbl-panel);
  }

  .wbl-root .wbl-tile--photo {
    min-height: 186px;
  }

  /* ── corner grid bg (big tile) ── */
  .wbl-root .wbl-tile-grid-bg {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(15, 99, 243, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15, 99, 243, 0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 90% 70% at 100% 100%, #000, transparent 72%);
    -webkit-mask-image: radial-gradient(ellipse 90% 70% at 100% 100%, #000, transparent 72%);
    opacity: 0.8;
    pointer-events: none;
  }

  /* ── corner ticks ── */
  .wbl-root .wbl-ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--wbl-dur-base);
  }

  .wbl-root .wbl-tile--default:hover .wbl-ticks,
  .wbl-root .wbl-tile--big:hover .wbl-ticks,
  .wbl-root .wbl-tile.is-visible:hover .wbl-ticks {
    opacity: 1;
  }

  .wbl-root .wbl-tick {
    position: absolute;
    width: 11px;
    height: 11px;
    pointer-events: none;
  }

  .wbl-root .wbl-tick--tl { top: -1px; left: -1px; border-top: 1px solid var(--wbl-line-strong); border-left: 1px solid var(--wbl-line-strong); }
  .wbl-root .wbl-tick--tr { top: -1px; right: -1px; border-top: 1px solid var(--wbl-line-strong); border-right: 1px solid var(--wbl-line-strong); }
  .wbl-root .wbl-tick--bl { bottom: -1px; left: -1px; border-bottom: 1px solid var(--wbl-line-strong); border-left: 1px solid var(--wbl-line-strong); }
  .wbl-root .wbl-tick--br { bottom: -1px; right: -1px; border-bottom: 1px solid var(--wbl-line-strong); border-right: 1px solid var(--wbl-line-strong); }

  /* ── tile top row (icon) ── */
  .wbl-root .wbl-tile-top {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .wbl-root .wbl-tile--default .wbl-tile-top {
    margin-bottom: 24px;
  }

  .wbl-root .wbl-tile--big .wbl-tile-top {
    margin-bottom: auto;
  }

  /* ── icon wrap ── */
  .wbl-root .wbl-icon-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid var(--wbl-line);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wbl-cyan);
    flex-shrink: 0;
    background: #ffffff;
    transition:
      border-color 0.6s var(--wbl-ease-out),
      box-shadow 0.6s var(--wbl-ease-out),
      transform 0.6s var(--wbl-ease-out),
      background 0.6s var(--wbl-ease-out);
  }

  .wbl-root .wbl-icon-shine,
  .wbl-root .wbl-num-shine,
  .wbl-root .wbl-photo-shine {
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
    transition: transform 0.95s var(--wbl-ease-out);
  }

  .wbl-root .wbl-icon-wrap > :not(.wbl-icon-shine) {
    position: relative;
    z-index: 1;
  }

  .wbl-root .wbl-tile--default .wbl-icon-wrap { width: 44px; height: 44px; }
  .wbl-root .wbl-tile--big .wbl-icon-wrap { width: 54px; height: 54px; }

  .wbl-root .wbl-tile.is-visible:hover .wbl-icon-wrap {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.1);
    transform: scale(1.08);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.45),
      0 0 28px rgba(16, 200, 229, 0.28),
      inset 0 0 18px rgba(16, 200, 229, 0.1);
  }

  .wbl-root .wbl-tile.is-visible:hover .wbl-icon-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  /* ── number badge ── */
  .wbl-root .wbl-num-wrap {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 28px;
    padding: 0 8px;
    border-radius: 3px;
    border: 1px solid var(--wbl-line-strong);
    background: #ffffff;
    transition:
      border-color 0.6s var(--wbl-ease-out),
      box-shadow 0.6s var(--wbl-ease-out),
      transform 0.6s var(--wbl-ease-out),
      background 0.6s var(--wbl-ease-out);
  }

  .wbl-root .wbl-num {
    position: relative;
    z-index: 1;
    font-weight: 800;
    font-size: 11px;
    letter-spacing: 0.14em;
    color: var(--wbl-faint);
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
    transition: color 0.6s var(--wbl-ease-out);
  }

  .wbl-root .wbl-tile.is-visible:hover .wbl-num-wrap {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.1);
    transform: scale(1.06);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.4),
      0 0 20px rgba(16, 200, 229, 0.24);
  }

  .wbl-root .wbl-tile.is-visible:hover .wbl-num {
    color: var(--wbl-cyan);
  }

  .wbl-root .wbl-tile.is-visible:hover .wbl-num-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  /* ── tile body ── */
  .wbl-root .wbl-tile-body {
    position: relative;
    min-width: 0;
  }

  .wbl-root .wbl-tile--big .wbl-tile-body {
    margin-top: 30px;
  }

  .wbl-root .wbl-tile-title {
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.015em;
    color: var(--wbl-head);
    margin: 0 0 10px;
    overflow-wrap: anywhere;
    word-break: break-word;
    transition:
      transform 0.65s var(--wbl-ease-out),
      letter-spacing 0.65s var(--wbl-ease-out),
      color 0.65s var(--wbl-ease-out),
      text-shadow 0.65s var(--wbl-ease-out);
  }

  .wbl-root .wbl-tile-title::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 8px;
    background: linear-gradient(90deg, var(--wbl-cyan) 0%, rgba(15, 99, 243, 0.45) 100%);
    transition: width 0.7s var(--wbl-ease-out);
  }

  .wbl-root .wbl-tile--default .wbl-tile-title { font-size: 18px; }
  .wbl-root .wbl-tile--big .wbl-tile-title { font-size: 24px; }

  .wbl-root .wbl-tile-text {
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--wbl-txt-dim);
    margin: 0;
    overflow-wrap: anywhere;
    transition:
      transform 0.7s var(--wbl-ease-out) 0.05s,
      color 0.7s var(--wbl-ease-out) 0.05s;
  }

  .wbl-root .wbl-tile--big .wbl-tile-text {
    font-size: 15.5px;
    max-width: 360px;
  }

  .wbl-root .wbl-tile.is-visible:hover .wbl-tile-title {
    transform: translateX(6px);
    letter-spacing: 0.005em;
    color: #032447;
    text-shadow: 0 0 20px rgba(15, 99, 243, 0.10);
  }

  .wbl-root .wbl-tile.is-visible:hover .wbl-tile-title::after {
    width: 40px;
  }

  .wbl-root .wbl-tile.is-visible:hover .wbl-tile-text {
    transform: translateX(6px);
    color: rgba(0, 27, 65, 0.80);
  }

  /* ── photo tile ── */
  .wbl-root .wbl-photo-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background: var(--wbl-panel);
  }

  .wbl-root .wbl-photo-img {
    position: absolute;
    top: -8%;
    left: 0;
    width: 100%;
    height: 116%;
    object-fit: cover;
    display: block;
    will-change: transform;
    transform: translateY(var(--wbl-parallax-y, 0px)) scale(1);
    transition: transform 0.85s var(--wbl-ease-out);
  }

  .wbl-root .wbl-tile--photo.is-visible:hover .wbl-photo-img {
    transform: translateY(calc(var(--wbl-parallax-y, 0px) - 4px)) scale(1.1);
  }

  .wbl-root .wbl-photo-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 27, 65, 0.10) 0%, rgba(0, 27, 65, 0.68) 100%);
    transition: background 0.6s var(--wbl-ease-out);
  }

  .wbl-root .wbl-tile--photo.is-visible:hover .wbl-photo-overlay {
    background: linear-gradient(
      180deg,
      rgba(0, 27, 65, 0.04) 0%,
      rgba(0, 27, 65, 0.40) 55%,
      rgba(15, 99, 243, 0.18) 100%
    );
  }

  .wbl-root .wbl-photo-shine { z-index: 2; }

  .wbl-root .wbl-photo-glow {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    opacity: 0;
    box-shadow:
      inset 0 0 0 1px rgba(15, 99, 243, 0.35),
      inset 0 0 28px rgba(15, 99, 243, 0.10);
    transition: opacity 0.6s var(--wbl-ease-out);
  }

  .wbl-root .wbl-tile--photo.is-visible:hover .wbl-photo-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  .wbl-root .wbl-tile--photo.is-visible:hover .wbl-photo-glow {
    opacity: 1;
  }

  .wbl-root .wbl-photo-ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--wbl-dur-base);
    z-index: 1;
  }

  .wbl-root .wbl-tile--photo:hover .wbl-photo-ticks,
  .wbl-root .wbl-tile--photo.is-visible:hover .wbl-photo-ticks {
    opacity: 1;
  }

  .wbl-root .wbl-photo-ticks .wbl-tick {
    border-color: rgba(255, 255, 255, 0.55);
  }

  .wbl-root .wbl-photo-content {
    position: relative;
    z-index: 2;
    height: 100%;
    min-height: 186px;
    display: flex;
    flex-direction: column;
    padding: 30px 32px;
    min-width: 0;
  }

  .wbl-root .wbl-tile--photo .wbl-icon-wrap {
    width: 46px;
    height: 46px;
    border-color: rgba(255, 255, 255, 0.6);
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(4px);
  }

  .wbl-root .wbl-tile--photo .wbl-num-wrap {
    border-color: rgba(255, 255, 255, 0.40);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(4px);
  }

  .wbl-root .wbl-tile--photo .wbl-num {
    color: rgba(255, 255, 255, 0.80);
  }

  .wbl-root .wbl-tile--photo.is-visible:hover .wbl-num-wrap {
    border-color: rgba(255, 255, 255, 0.85);
    background: rgba(255, 255, 255, 0.25);
  }

  .wbl-root .wbl-tile--photo.is-visible:hover .wbl-num {
    color: #ffffff;
  }

  .wbl-root .wbl-tile--photo.is-visible:hover .wbl-tile-title {
    text-shadow: 0 0 24px rgba(255, 255, 255, 0.30);
  }

  .wbl-root .wbl-tile--photo.is-visible:hover .wbl-tile-text {
    color: rgba(255, 255, 255, 0.95);
  }

  .wbl-root .wbl-tile--photo .wbl-tile-title::after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, var(--wbl-cyan) 100%);
  }

  .wbl-root .wbl-tile--photo .wbl-tile-body {
    margin-top: 30px;
  }

  .wbl-root .wbl-tile--photo .wbl-tile-title {
    font-size: 22px;
    color: #fff;
    margin-bottom: 8px;
  }

  .wbl-root .wbl-tile--photo .wbl-tile-text {
    font-size: 14.5px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.85);
    max-width: 440px;
  }

  .wbl-root .wbl-icon-custom svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* ── responsive ── */
  @media (max-width: 860px) {
    .wbl-root .wbl-grid {
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
    }

    .wbl-root .wbl-tile {
      grid-column: auto !important;
      grid-row: auto !important;
    }

    .wbl-root .wbl-tile--photo {
      min-height: 220px;
    }

    .wbl-root .wbl-photo-content {
      min-height: 220px;
    }
  }

  @media (max-width: 480px) {
    .wbl-root .wbl-container {
      padding: 0 16px;
    }

    .wbl-root .wbl-tile--default,
    .wbl-root .wbl-tile--big {
      padding: 24px 20px;
    }

    .wbl-root .wbl-photo-content {
      padding: 24px 20px;
    }

    .wbl-root .wbl-tile--default .wbl-tile-title,
    .wbl-root .wbl-tile--photo .wbl-tile-title {
      font-size: 17px;
    }

    .wbl-root .wbl-tile--big .wbl-tile-title {
      font-size: 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .wbl-root .wbl-tile {
      opacity: 1;
      transform: none;
      transition: none;
    }

    .wbl-root .wbl-tile.is-visible:hover {
      transform: none;
    }

    .wbl-root .wbl-tile.is-visible:hover .wbl-icon-wrap,
    .wbl-root .wbl-tile.is-visible:hover .wbl-num-wrap {
      transform: none;
    }

    .wbl-root .wbl-tile.is-visible:hover .wbl-tile-title,
    .wbl-root .wbl-tile.is-visible:hover .wbl-tile-text {
      transform: none;
    }

    .wbl-root .wbl-photo-img {
      transform: none !important;
    }

    .wbl-root .wbl-icon-shine,
    .wbl-root .wbl-num-shine,
    .wbl-root .wbl-photo-shine,
    .wbl-root .wbl-photo-glow {
      display: none;
    }
  }
`;
