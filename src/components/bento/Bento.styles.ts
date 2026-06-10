export const bentoCss = `
  .bento-root,
  .bento-root *,
  .bento-root *::before,
  .bento-root *::after {
    box-sizing: border-box;
  }

  .bento-root {
    --b-ink: #04060D;
    --b-field: #070C18;
    --b-panel: #0A1325;
    --b-line: rgba(125, 170, 215, 0.14);
    --b-line-strong: rgba(16, 200, 229, 0.34);
    --b-txt: #EAF1FB;
    --b-txt-dim: rgba(221, 233, 249, 0.56);
    --b-head: #ffffff;
    --b-faint: rgba(234, 241, 251, 0.30);
    --b-cyan: #10C8E5;
    --b-gradient-brand-h: linear-gradient(90deg, #0F63F3 0%, #00D4FF 50%, #10C8E5 100%);
    --b-dur-base: 200ms;
    --b-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    font-family: inherit;
    color: var(--b-txt);
  }

  .bento-root .bento-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    min-width: 0;
  }

  .bento-root .bento-header {
    margin-bottom: 44px;
    max-width: 760px;
    min-width: 0;
  }

  .bento-root .bento-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    max-width: 100%;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--b-cyan);
    margin-bottom: 22px;
  }

  .bento-root .bento-eyebrow-dot {
    width: 6px;
    height: 6px;
    background: var(--b-cyan);
    box-shadow: 0 0 8px var(--b-cyan);
    flex-shrink: 0;
  }

  .bento-root .bento-heading {
    font-weight: 800;
    font-size: clamp(30px, 4.4vw, 56px);
    text-transform: uppercase;
    color: var(--b-head);
    letter-spacing: -0.035em;
    line-height: 1.05;
    margin: 0;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .bento-root .bento-text-gradient {
    background: var(--b-gradient-brand-h);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .bento-root .bento-desc {
    font-size: 16px;
    line-height: 1.65;
    color: var(--b-txt-dim);
    margin: 20px 0 0;
    max-width: 620px;
    overflow-wrap: anywhere;
  }

  .bento-root .bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(186px, auto);
    gap: 14px;
    width: 100%;
    min-width: 0;
  }

  .bento-root .bento-cell {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--b-line);
    transition: background var(--b-dur-base), border-color var(--b-dur-base);
  }

  .bento-root .bento-cell:hover {
    border-color: var(--b-line-strong);
  }

  .bento-root .bento-cell--default {
    padding: 28px;
    background: var(--b-field);
  }

  .bento-root .bento-cell--default:hover {
    background: var(--b-panel);
  }

  .bento-root .bento-cell--feature {
    padding: 34px 32px;
    background: var(--b-field);
  }

  .bento-root .bento-cell--feature:hover {
    background: var(--b-panel);
  }

  .bento-root .bento-cell--photo {
    min-height: 186px;
  }

  .bento-root .bento-cell-grid-bg {
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

  .bento-root .bento-ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--b-dur-base);
  }

  .bento-root .bento-cell--default:hover .bento-ticks,
  .bento-root .bento-cell--feature:hover .bento-ticks {
    opacity: 1;
  }

  .bento-root .bento-tick {
    position: absolute;
    width: 11px;
    height: 11px;
    pointer-events: none;
  }

  .bento-root .bento-tick--tl {
    top: -1px;
    left: -1px;
    border-top: 1px solid var(--b-line-strong);
    border-left: 1px solid var(--b-line-strong);
  }

  .bento-root .bento-tick--tr {
    top: -1px;
    right: -1px;
    border-top: 1px solid var(--b-line-strong);
    border-right: 1px solid var(--b-line-strong);
  }

  .bento-root .bento-tick--bl {
    bottom: -1px;
    left: -1px;
    border-bottom: 1px solid var(--b-line-strong);
    border-left: 1px solid var(--b-line-strong);
  }

  .bento-root .bento-tick--br {
    bottom: -1px;
    right: -1px;
    border-bottom: 1px solid var(--b-line-strong);
    border-right: 1px solid var(--b-line-strong);
  }

  .bento-root .bento-cell-top {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bento-root .bento-cell--default .bento-cell-top {
    margin-bottom: 24px;
  }

  .bento-root .bento-cell--feature .bento-cell-top {
    margin-bottom: auto;
  }

  .bento-root .bento-icon-wrap {
    border-radius: 3px;
    border: 1px solid var(--b-line);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--b-cyan);
    transition: border-color var(--b-dur-base);
    flex-shrink: 0;
  }

  .bento-root .bento-cell--default .bento-icon-wrap {
    width: 44px;
    height: 44px;
  }

  .bento-root .bento-cell--feature .bento-icon-wrap {
    width: 54px;
    height: 54px;
  }

  .bento-root .bento-cell:hover .bento-icon-wrap {
    border-color: var(--b-cyan);
  }

  .bento-root .bento-cell-num {
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.16em;
    color: var(--b-faint);
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
  }

  .bento-root .bento-cell-body {
    position: relative;
    min-width: 0;
  }

  .bento-root .bento-cell--feature .bento-cell-body {
    margin-top: 30px;
  }

  .bento-root .bento-cell-title {
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.015em;
    color: var(--b-head);
    margin: 0 0 10px;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .bento-root .bento-cell--default .bento-cell-title {
    font-size: 18px;
  }

  .bento-root .bento-cell--feature .bento-cell-title {
    font-size: 24px;
  }

  .bento-root .bento-cell-text {
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--b-txt-dim);
    margin: 0;
    overflow-wrap: anywhere;
  }

  .bento-root .bento-cell--feature .bento-cell-text {
    font-size: 15.5px;
    max-width: 360px;
  }

  .bento-root .bento-photo-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background: var(--b-panel);
  }

  .bento-root .bento-photo-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1);
    transition: transform 0.9s var(--b-ease-out);
  }

  .bento-root .bento-cell--photo:hover .bento-photo-img {
    transform: scale(1.05);
  }

  .bento-root .bento-photo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 27, 65, 0.20) 0%, rgba(0, 27, 65, 0.82) 100%);
    mix-blend-mode: multiply;
  }

  .bento-root .bento-photo-ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--b-dur-base);
    z-index: 1;
  }

  .bento-root .bento-cell--photo:hover .bento-photo-ticks {
    opacity: 1;
  }

  .bento-root .bento-photo-ticks .bento-tick {
    border-color: rgba(255, 255, 255, 0.5);
  }

  .bento-root .bento-photo-content {
    position: relative;
    z-index: 2;
    height: 100%;
    min-height: 186px;
    display: flex;
    flex-direction: column;
    padding: 30px 32px;
    min-width: 0;
  }

  .bento-root .bento-cell--photo .bento-icon-wrap {
    width: 46px;
    height: 46px;
    border-color: rgba(255, 255, 255, 0.5);
    color: #fff;
    backdrop-filter: blur(4px);
  }

  .bento-root .bento-cell--photo .bento-cell-num {
    color: rgba(255, 255, 255, 0.6);
  }

  .bento-root .bento-cell--photo .bento-cell-body {
    margin-top: auto;
  }

  .bento-root .bento-cell--photo .bento-cell-title {
    font-size: 22px;
    color: #fff;
    margin-bottom: 8px;
  }

  .bento-root .bento-cell--photo .bento-cell-text {
    font-size: 14.5px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.82);
    max-width: 440px;
  }

  .bento-root .bento-icon-custom svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (max-width: 860px) {
    .bento-root {
      padding: 72px 0;
    }

    .bento-root .bento-header {
      margin-bottom: 32px;
    }

    .bento-root .bento-heading {
      font-size: clamp(26px, 7.5vw, 40px);
    }

    .bento-root .bento-desc {
      font-size: 15px;
      margin-top: 16px;
    }

    .bento-root .bento-grid {
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
    }

    .bento-root .bento-cell {
      grid-column: auto !important;
      grid-row: auto !important;
    }

    .bento-root .bento-cell--photo {
      min-height: 220px;
    }

    .bento-root .bento-photo-content {
      min-height: 220px;
    }
  }

  @media (max-width: 480px) {
    .bento-root {
      padding: 56px 0;
    }

    .bento-root .bento-container {
      padding: 0 16px;
    }

    .bento-root .bento-eyebrow {
      font-size: 11px;
      letter-spacing: 0.18em;
      margin-bottom: 18px;
    }

    .bento-root .bento-heading {
      font-size: clamp(22px, 7vw, 30px);
    }

    .bento-root .bento-desc {
      font-size: 14px;
    }

    .bento-root .bento-cell--default,
    .bento-root .bento-cell--feature {
      padding: 24px 20px;
    }

    .bento-root .bento-photo-content {
      padding: 24px 20px;
    }

    .bento-root .bento-cell--default .bento-cell-title,
    .bento-root .bento-cell--photo .bento-cell-title {
      font-size: 17px;
    }

    .bento-root .bento-cell--feature .bento-cell-title {
      font-size: 20px;
    }
  }
`;
