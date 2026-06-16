export const whyBentoCss = `
  .wb-root,
  .wb-root *,
  .wb-root *::before,
  .wb-root *::after {
    box-sizing: border-box;
  }

  .wb-root {
    --wb-ink: #04060D;
    --wb-field: #070C18;
    --wb-panel: #0A1325;
    --wb-line: rgba(125, 170, 215, 0.14);
    --wb-line-strong: rgba(16, 200, 229, 0.34);
    --wb-txt: #EAF1FB;
    --wb-txt-dim: rgba(221, 233, 249, 0.56);
    --wb-head: #ffffff;
    --wb-faint: rgba(234, 241, 251, 0.30);
    --wb-cyan: #10C8E5;
    --wb-gradient-h: linear-gradient(90deg, #0F63F3 0%, #00D4FF 50%, #10C8E5 100%);
    --wb-dur-base: 200ms;
    --wb-dur-smooth: 650ms;
    --wb-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    font-family: inherit;
    color: var(--wb-txt);
  }

  /* ── container ── */
  .wb-root .wb-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    min-width: 0;
  }

  /* ── bento grid ── */
  .wb-root .wb-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(186px, auto);
    gap: 14px;
    width: 100%;
    min-width: 0;
  }

  /* ── tile base ── */
  .wb-root .wb-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--wb-line);
    cursor: default;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.7s var(--wb-ease-out),
      transform 0.7s var(--wb-ease-out),
      background var(--wb-dur-base),
      border-color 0.6s var(--wb-ease-out),
      box-shadow 0.6s var(--wb-ease-out);
    transition-delay: calc(var(--wb-index, 0) * 0.06s);
  }

  .wb-root .wb-tile.is-visible {
    opacity: 1;
    transform: none;
  }

  .wb-root .wb-tile.is-visible:hover {
    border-color: rgba(16, 200, 229, 0.55);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
    transform: translateY(-3px);
  }

  /* ── tile variants ── */
  .wb-root .wb-tile--default {
    padding: 28px;
    background: var(--wb-field);
  }

  .wb-root .wb-tile--default:hover {
    background: var(--wb-panel);
  }

  .wb-root .wb-tile--big {
    padding: 34px 32px;
    background: var(--wb-field);
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .wb-root .wb-tile--big:hover {
    background: var(--wb-panel);
  }

  .wb-root .wb-tile--photo {
    min-height: 186px;
  }

  /* ── corner grid bg (big tile) ── */
  .wb-root .wb-tile-grid-bg {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(16, 200, 229, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(16, 200, 229, 0.07) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 90% 70% at 100% 100%, #000, transparent 72%);
    -webkit-mask-image: radial-gradient(ellipse 90% 70% at 100% 100%, #000, transparent 72%);
    opacity: 0.8;
    pointer-events: none;
  }

  /* ── corner ticks ── */
  .wb-root .wb-ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--wb-dur-base);
  }

  .wb-root .wb-tile--default:hover .wb-ticks,
  .wb-root .wb-tile--big:hover .wb-ticks,
  .wb-root .wb-tile.is-visible:hover .wb-ticks {
    opacity: 1;
  }

  .wb-root .wb-tick {
    position: absolute;
    width: 11px;
    height: 11px;
    pointer-events: none;
  }

  .wb-root .wb-tick--tl { top: -1px; left: -1px; border-top: 1px solid var(--wb-line-strong); border-left: 1px solid var(--wb-line-strong); }
  .wb-root .wb-tick--tr { top: -1px; right: -1px; border-top: 1px solid var(--wb-line-strong); border-right: 1px solid var(--wb-line-strong); }
  .wb-root .wb-tick--bl { bottom: -1px; left: -1px; border-bottom: 1px solid var(--wb-line-strong); border-left: 1px solid var(--wb-line-strong); }
  .wb-root .wb-tick--br { bottom: -1px; right: -1px; border-bottom: 1px solid var(--wb-line-strong); border-right: 1px solid var(--wb-line-strong); }

  /* ── tile top row (icon + number) ── */
  .wb-root .wb-tile-top {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .wb-root .wb-tile--default .wb-tile-top {
    margin-bottom: 24px;
  }

  .wb-root .wb-tile--big .wb-tile-top {
    margin-bottom: auto;
  }

  /* ── icon wrap ── */
  .wb-root .wb-icon-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid var(--wb-line);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wb-cyan);
    flex-shrink: 0;
    transition:
      border-color 0.6s var(--wb-ease-out),
      box-shadow 0.6s var(--wb-ease-out),
      transform 0.6s var(--wb-ease-out),
      background 0.6s var(--wb-ease-out);
  }

  .wb-root .wb-icon-shine,
  .wb-root .wb-num-shine,
  .wb-root .wb-photo-shine {
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
    transition: transform 0.95s var(--wb-ease-out);
  }

  .wb-root .wb-icon-wrap > :not(.wb-icon-shine) {
    position: relative;
    z-index: 1;
  }

  .wb-root .wb-tile--default .wb-icon-wrap { width: 44px; height: 44px; }
  .wb-root .wb-tile--big .wb-icon-wrap { width: 54px; height: 54px; }

  .wb-root .wb-tile.is-visible:hover .wb-icon-wrap {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.1);
    transform: scale(1.08);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.45),
      0 0 28px rgba(16, 200, 229, 0.28),
      inset 0 0 18px rgba(16, 200, 229, 0.1);
  }

  .wb-root .wb-tile.is-visible:hover .wb-icon-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  /* ── number badge ── */
  .wb-root .wb-num-wrap {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 28px;
    padding: 0 8px;
    border-radius: 3px;
    border: 1px solid var(--wb-line-strong);
    background: var(--wb-field);
    transition:
      border-color 0.6s var(--wb-ease-out),
      box-shadow 0.6s var(--wb-ease-out),
      transform 0.6s var(--wb-ease-out),
      background 0.6s var(--wb-ease-out);
  }

  .wb-root .wb-num {
    position: relative;
    z-index: 1;
    font-weight: 800;
    font-size: 11px;
    letter-spacing: 0.14em;
    color: var(--wb-faint);
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
    transition: color 0.6s var(--wb-ease-out);
  }

  .wb-root .wb-tile.is-visible:hover .wb-num-wrap {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.1);
    transform: scale(1.06);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.4),
      0 0 20px rgba(16, 200, 229, 0.24);
  }

  .wb-root .wb-tile.is-visible:hover .wb-num {
    color: var(--wb-cyan);
  }

  .wb-root .wb-tile.is-visible:hover .wb-num-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  /* ── tile body (title + text) ── */
  .wb-root .wb-tile-body {
    position: relative;
    min-width: 0;
  }

  .wb-root .wb-tile--big .wb-tile-body {
    margin-top: 30px;
  }

  .wb-root .wb-tile-title {
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.015em;
    color: var(--wb-head);
    margin: 0 0 10px;
    overflow-wrap: anywhere;
    word-break: break-word;
    transition:
      transform 0.65s var(--wb-ease-out),
      letter-spacing 0.65s var(--wb-ease-out),
      color 0.65s var(--wb-ease-out),
      text-shadow 0.65s var(--wb-ease-out);
  }

  .wb-root .wb-tile-title::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 8px;
    background: linear-gradient(90deg, var(--wb-cyan) 0%, rgba(15, 99, 243, 0.45) 100%);
    transition: width 0.7s var(--wb-ease-out);
  }

  .wb-root .wb-tile--default .wb-tile-title { font-size: 18px; }
  .wb-root .wb-tile--big .wb-tile-title { font-size: 24px; }

  .wb-root .wb-tile-text {
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--wb-txt-dim);
    margin: 0;
    overflow-wrap: anywhere;
    transition:
      transform 0.7s var(--wb-ease-out) 0.05s,
      color 0.7s var(--wb-ease-out) 0.05s;
  }

  .wb-root .wb-tile--big .wb-tile-text {
    font-size: 15.5px;
    max-width: 360px;
  }

  .wb-root .wb-tile.is-visible:hover .wb-tile-title {
    transform: translateX(6px);
    letter-spacing: 0.005em;
    color: #ffffff;
    text-shadow: 0 0 20px rgba(16, 200, 229, 0.16);
  }

  .wb-root .wb-tile.is-visible:hover .wb-tile-title::after {
    width: 40px;
  }

  .wb-root .wb-tile.is-visible:hover .wb-tile-text {
    transform: translateX(6px);
    color: rgba(234, 241, 251, 0.82);
  }

  /* ── photo tile ── */
  .wb-root .wb-photo-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background: var(--wb-panel);
  }

  .wb-root .wb-photo-img {
    position: absolute;
    top: -8%;
    left: 0;
    width: 100%;
    height: 116%;
    object-fit: cover;
    display: block;
    will-change: transform;
    transform: translateY(var(--wb-parallax-y, 0px)) scale(1);
    transition: transform 0.85s var(--wb-ease-out);
  }

  .wb-root .wb-tile--photo.is-visible:hover .wb-photo-img {
    transform: translateY(calc(var(--wb-parallax-y, 0px) - 4px)) scale(1.1);
  }

  .wb-root .wb-photo-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 27, 65, 0.20) 0%, rgba(0, 27, 65, 0.82) 100%);
    mix-blend-mode: multiply;
    transition: background 0.6s var(--wb-ease-out);
  }

  .wb-root .wb-tile--photo.is-visible:hover .wb-photo-overlay {
    background: linear-gradient(
      180deg,
      rgba(0, 17, 43, 0.08) 0%,
      rgba(0, 17, 43, 0.45) 55%,
      rgba(15, 99, 243, 0.22) 100%
    );
  }

  .wb-root .wb-photo-shine { z-index: 2; }

  .wb-root .wb-photo-glow {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    opacity: 0;
    box-shadow:
      inset 0 0 0 1px rgba(16, 200, 229, 0.45),
      inset 0 0 28px rgba(16, 200, 229, 0.12);
    transition: opacity 0.6s var(--wb-ease-out);
  }

  .wb-root .wb-tile--photo.is-visible:hover .wb-photo-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  .wb-root .wb-tile--photo.is-visible:hover .wb-photo-glow {
    opacity: 1;
  }

  .wb-root .wb-photo-ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--wb-dur-base);
    z-index: 1;
  }

  .wb-root .wb-tile--photo:hover .wb-photo-ticks,
  .wb-root .wb-tile--photo.is-visible:hover .wb-photo-ticks {
    opacity: 1;
  }

  .wb-root .wb-photo-ticks .wb-tick {
    border-color: rgba(255, 255, 255, 0.5);
  }

  .wb-root .wb-photo-content {
    position: relative;
    z-index: 2;
    height: 100%;
    min-height: 186px;
    display: flex;
    flex-direction: column;
    padding: 30px 32px;
    min-width: 0;
  }

  .wb-root .wb-tile--photo .wb-icon-wrap {
    width: 46px;
    height: 46px;
    border-color: rgba(255, 255, 255, 0.5);
    color: #fff;
    backdrop-filter: blur(4px);
  }

  .wb-root .wb-tile--photo .wb-num-wrap {
    border-color: rgba(255, 255, 255, 0.35);
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
  }

  .wb-root .wb-tile--photo .wb-num {
    color: rgba(255, 255, 255, 0.75);
  }

  .wb-root .wb-tile--photo.is-visible:hover .wb-num-wrap {
    border-color: rgba(16, 200, 229, 0.75);
    background: rgba(16, 200, 229, 0.15);
  }

  .wb-root .wb-tile--photo.is-visible:hover .wb-num {
    color: #ffffff;
  }

  .wb-root .wb-tile--photo.is-visible:hover .wb-tile-title {
    text-shadow: 0 0 24px rgba(16, 200, 229, 0.22);
  }

  .wb-root .wb-tile--photo.is-visible:hover .wb-tile-text {
    color: rgba(255, 255, 255, 0.92);
  }

  .wb-root .wb-tile--photo .wb-tile-title::after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, var(--wb-cyan) 100%);
  }

  .wb-root .wb-tile--photo .wb-tile-body {
    margin-top: 30px;
  }

  .wb-root .wb-tile--photo .wb-tile-title {
    font-size: 22px;
    color: #fff;
    margin-bottom: 8px;
  }

  .wb-root .wb-tile--photo .wb-tile-text {
    font-size: 14.5px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.82);
    max-width: 440px;
  }

  .wb-root .wb-icon-custom svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* ── responsive ── */
  @media (max-width: 860px) {
    .wb-root .wb-grid {
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
    }

    .wb-root .wb-tile {
      grid-column: auto !important;
      grid-row: auto !important;
    }

    .wb-root .wb-tile--photo {
      min-height: 220px;
    }

    .wb-root .wb-photo-content {
      min-height: 220px;
    }
  }

  @media (max-width: 480px) {
    .wb-root .wb-container {
      padding: 0 16px;
    }

    .wb-root .wb-tile--default,
    .wb-root .wb-tile--big {
      padding: 24px 20px;
    }

    .wb-root .wb-photo-content {
      padding: 24px 20px;
    }

    .wb-root .wb-tile--default .wb-tile-title,
    .wb-root .wb-tile--photo .wb-tile-title {
      font-size: 17px;
    }

    .wb-root .wb-tile--big .wb-tile-title {
      font-size: 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .wb-root .wb-tile {
      opacity: 1;
      transform: none;
      transition: none;
    }

    .wb-root .wb-tile.is-visible:hover {
      transform: none;
    }

    .wb-root .wb-tile.is-visible:hover .wb-icon-wrap,
    .wb-root .wb-tile.is-visible:hover .wb-num-wrap {
      transform: none;
    }

    .wb-root .wb-tile.is-visible:hover .wb-tile-title,
    .wb-root .wb-tile.is-visible:hover .wb-tile-text {
      transform: none;
    }

    .wb-root .wb-photo-img {
      transform: none !important;
    }

    .wb-root .wb-icon-shine,
    .wb-root .wb-num-shine,
    .wb-root .wb-photo-shine,
    .wb-root .wb-photo-glow {
      display: none;
    }
  }
`;
