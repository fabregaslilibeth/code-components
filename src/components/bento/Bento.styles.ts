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
    --b-dur-smooth: 650ms;
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
    cursor: default;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.7s var(--b-ease-out),
      transform 0.7s var(--b-ease-out),
      background var(--b-dur-base),
      border-color 0.6s var(--b-ease-out),
      box-shadow 0.6s var(--b-ease-out);
    transition-delay: calc(var(--b-index, 0) * 0.06s);
  }

  .bento-root .bento-cell.is-visible {
    opacity: 1;
    transform: none;
  }

  .bento-root .bento-cell.is-visible:hover {
    border-color: rgba(16, 200, 229, 0.55);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
    transform: translateY(-3px);
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
  .bento-root .bento-cell--feature:hover .bento-ticks,
  .bento-root .bento-cell.is-visible:hover .bento-ticks {
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
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid var(--b-line);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--b-cyan);
    flex-shrink: 0;
    transition:
      border-color 0.6s var(--b-ease-out),
      box-shadow 0.6s var(--b-ease-out),
      transform 0.6s var(--b-ease-out),
      background 0.6s var(--b-ease-out);
  }

  .bento-root .bento-icon-shine,
  .bento-root .bento-photo-shine {
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
    transition: transform 0.95s var(--b-ease-out);
  }

  .bento-root .bento-icon-wrap > :not(.bento-icon-shine) {
    position: relative;
    z-index: 1;
  }

  .bento-root .bento-cell--default .bento-icon-wrap {
    width: 44px;
    height: 44px;
  }

  .bento-root .bento-cell--feature .bento-icon-wrap {
    width: 54px;
    height: 54px;
  }

  .bento-root .bento-cell.is-visible:hover .bento-icon-wrap {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.1);
    transform: scale(1.08);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.45),
      0 0 28px rgba(16, 200, 229, 0.28),
      inset 0 0 18px rgba(16, 200, 229, 0.1);
  }

  .bento-root .bento-cell.is-visible:hover .bento-icon-shine {
    transform: translateX(140%) skewX(-14deg);
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
    transition:
      transform 0.65s var(--b-ease-out),
      letter-spacing 0.65s var(--b-ease-out),
      color 0.65s var(--b-ease-out),
      text-shadow 0.65s var(--b-ease-out);
  }

  .bento-root .bento-cell-title::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 8px;
    background: linear-gradient(90deg, var(--b-cyan) 0%, rgba(15, 99, 243, 0.45) 100%);
    transition: width 0.7s var(--b-ease-out);
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
    transition:
      transform 0.7s var(--b-ease-out) 0.05s,
      color 0.7s var(--b-ease-out) 0.05s;
  }

  .bento-root .bento-cell.is-visible:hover .bento-cell-title {
    transform: translateX(6px);
    letter-spacing: 0.005em;
    color: #ffffff;
    text-shadow: 0 0 20px rgba(16, 200, 229, 0.16);
  }

  .bento-root .bento-cell.is-visible:hover .bento-cell-title::after {
    width: 40px;
  }

  .bento-root .bento-cell.is-visible:hover .bento-cell-text {
    transform: translateX(6px);
    color: rgba(234, 241, 251, 0.82);
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
    top: -8%;
    left: 0;
    width: 100%;
    height: 116%;
    object-fit: cover;
    display: block;
    will-change: transform;
    transform: translateY(var(--b-parallax-y, 0px)) scale(1);
    transition: transform 0.85s var(--b-ease-out);
  }

  .bento-root .bento-cell--photo.is-visible:hover .bento-photo-img {
    transform: translateY(calc(var(--b-parallax-y, 0px) - 4px)) scale(1.1);
  }

  .bento-root .bento-photo-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 27, 65, 0.20) 0%, rgba(0, 27, 65, 0.82) 100%);
    mix-blend-mode: multiply;
    transition: background 0.6s var(--b-ease-out);
  }

  .bento-root .bento-cell--photo.is-visible:hover .bento-photo-overlay {
    background: linear-gradient(
      180deg,
      rgba(0, 17, 43, 0.08) 0%,
      rgba(0, 17, 43, 0.45) 55%,
      rgba(15, 99, 243, 0.22) 100%
    );
  }

  .bento-root .bento-photo-shine {
    z-index: 2;
  }

  .bento-root .bento-photo-glow {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    opacity: 0;
    box-shadow:
      inset 0 0 0 1px rgba(16, 200, 229, 0.45),
      inset 0 0 28px rgba(16, 200, 229, 0.12);
    transition: opacity 0.6s var(--b-ease-out);
  }

  .bento-root .bento-cell--photo.is-visible:hover .bento-photo-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  .bento-root .bento-cell--photo.is-visible:hover .bento-photo-glow {
    opacity: 1;
  }

  .bento-root .bento-photo-ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--b-dur-base);
    z-index: 1;
  }

  .bento-root .bento-cell--photo:hover .bento-photo-ticks,
  .bento-root .bento-cell--photo.is-visible:hover .bento-photo-ticks {
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

  .bento-root .bento-cell--photo.is-visible:hover .bento-cell-title {
    text-shadow: 0 0 24px rgba(16, 200, 229, 0.22);
  }

  .bento-root .bento-cell--photo.is-visible:hover .bento-cell-text {
    color: rgba(255, 255, 255, 0.92);
  }

  .bento-root .bento-cell--photo .bento-cell-title::after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, var(--b-cyan) 100%);
  }

  .bento-root .bento-cell--photo .bento-cell-body {
    margin-top: 30px;
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
      padding: 0;
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
      padding: 0;
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

  @media (prefers-reduced-motion: reduce) {
    .bento-root .bento-cell {
      opacity: 1;
      transform: none;
      transition: none;
    }

    .bento-root .bento-cell.is-visible:hover {
      transform: none;
    }

    .bento-root .bento-cell.is-visible:hover .bento-icon-wrap {
      transform: none;
    }

    .bento-root .bento-cell.is-visible:hover .bento-cell-title,
    .bento-root .bento-cell.is-visible:hover .bento-cell-text {
      transform: none;
    }

    .bento-root .bento-photo-img {
      transform: none !important;
    }

    .bento-root .bento-icon-shine,
    .bento-root .bento-photo-shine,
    .bento-root .bento-photo-glow {
      display: none;
    }
  }
`;
