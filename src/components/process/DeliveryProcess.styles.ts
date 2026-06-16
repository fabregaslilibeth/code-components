import { CSSProperties } from 'react';

export const deliveryProcessStyles = {
  photoFrame: (visible: boolean): CSSProperties => ({
    position: 'absolute',
    inset: 0,
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.55s var(--dp-ease-out)',
  }),

  progressFill: (filled: boolean): CSSProperties => ({
    height: '100%',
    width: '100%',
    background: 'var(--dp-gradient-brand)',
    transform: filled ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform var(--dp-dur-base) var(--dp-ease-out)',
  }),
};

export const deliveryProcessCss = `
  .delivery-process-root,
  .delivery-process-root *,
  .delivery-process-root *::before,
  .delivery-process-root *::after {
    box-sizing: border-box;
  }

  .delivery-process-root {
    --dp-ink: #04060D;
    --dp-panel: #0A1325;
    --dp-line: rgba(125, 170, 215, 0.14);
    --dp-txt: #EAF1FB;
    --dp-txt-dim: rgba(221, 233, 249, 0.56);
    --dp-head: #ffffff;
    --dp-faint: rgba(234, 241, 251, 0.30);
    --dp-cyan: #10C8E5;
    --dp-gradient-brand: linear-gradient(135deg, #0F63F3 0%, #00D4FF 50%, #10C8E5 100%);
    --dp-gradient-brand-h: linear-gradient(90deg, #0F63F3 0%, #00D4FF 50%, #10C8E5 100%);
    --dp-dur-base: 200ms;
    --dp-dur-smooth: 650ms;
    --dp-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --dp-line-strong: rgba(16, 200, 229, 0.34);
    --dp-field: #070C18;
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    font-family: inherit;
    color: var(--dp-txt);
    background: var(--dp-ink);
    padding: 2rem 0;
  }

  .delivery-process-root .dp-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    min-width: 0;
  }

  .delivery-process-root .dp-header {
    margin-bottom: 40px;
    max-width: 760px;
    min-width: 0;
  }

  .delivery-process-root .dp-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    max-width: 100%;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--dp-cyan);
    margin-bottom: 22px;
  }

  .delivery-process-root .dp-eyebrow-dot {
    width: 6px;
    height: 6px;
    background: var(--dp-cyan);
    box-shadow: 0 0 8px var(--dp-cyan);
    flex-shrink: 0;
  }

  .delivery-process-root .dp-heading {
    font-weight: 800;
    font-size: clamp(30px, 4.4vw, 56px);
    text-transform: uppercase;
    color: var(--dp-head);
    letter-spacing: -0.035em;
    line-height: 1.05;
    margin: 0;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .delivery-process-root .dp-text-gradient {
    background: var(--dp-gradient-brand-h);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .delivery-process-root .dp-desc {
    font-size: 16px;
    line-height: 1.65;
    color: var(--dp-txt-dim);
    margin: 20px 0 0;
    max-width: 620px;
    overflow-wrap: anywhere;
  }

  .delivery-process-root .dp-grid {
    display: grid;
    grid-template-columns: 0.92fr 1.08fr;
    border: 1px solid var(--dp-line);
    width: 100%;
    min-width: 0;
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.7s var(--dp-ease-out),
      transform 0.7s var(--dp-ease-out);
  }

  .delivery-process-root .dp-grid.is-visible {
    opacity: 1;
    transform: none;
  }

  .delivery-process-root .dp-nav {
    border-right: 1px solid var(--dp-line);
    min-width: 0;
  }

  .delivery-process-root .dp-step-btn {
    position: relative;
    width: 100%;
    min-width: 0;
    text-align: left;
    cursor: pointer;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--dp-line);
    padding: 22px 26px;
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: inherit;
    transition:
      background var(--dp-dur-base),
      transform var(--dp-dur-smooth) var(--dp-ease-out);
  }

  .delivery-process-root .dp-step-btn.is-hovered {
    transform: translateX(3px);
  }

  .delivery-process-root .dp-step-btn:last-child {
    border-bottom: none;
  }

  .delivery-process-root .dp-step-btn.is-active {
    background: var(--dp-panel);
  }

  .delivery-process-root .dp-step-btn:hover {
    background: rgba(10, 19, 37, 0.65);
  }

  .delivery-process-root .dp-step-btn.is-active:hover {
    background: var(--dp-panel);
  }

  .delivery-process-root .dp-step-indicator {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--dp-gradient-brand);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform var(--dp-dur-base) var(--dp-ease-out);
  }

  .delivery-process-root .dp-step-btn.is-active .dp-step-indicator {
    transform: scaleY(1);
  }

  .delivery-process-root .dp-step-num-wrap {
    position: relative;
    overflow: hidden;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid var(--dp-line-strong);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--dp-field);
    transition:
      border-color 0.6s var(--dp-ease-out),
      box-shadow 0.6s var(--dp-ease-out),
      transform 0.6s var(--dp-ease-out),
      background 0.6s var(--dp-ease-out);
  }

  .delivery-process-root .dp-step-num-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 38%,
      rgba(255, 255, 255, 0.1) 46%,
      rgba(16, 200, 229, 0.28) 50%,
      rgba(255, 255, 255, 0.1) 54%,
      transparent 62%
    );
    transform: translateX(-140%) skewX(-14deg);
    pointer-events: none;
    transition: transform 0.95s var(--dp-ease-out);
  }

  .delivery-process-root .dp-step-num {
    position: relative;
    z-index: 1;
    font-weight: 800;
    font-size: 18px;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
    color: var(--dp-faint);
    transition:
      color 0.6s var(--dp-ease-out),
      font-size 0.6s var(--dp-ease-out),
      transform 0.6s var(--dp-ease-out);
    width: auto;
  }

  .delivery-process-root .dp-step-btn.is-active .dp-step-num-wrap {
    border-color: var(--dp-cyan);
    box-shadow: 0 0 16px rgba(16, 200, 229, 0.22);
  }

  .delivery-process-root .dp-step-btn.is-active .dp-step-num {
    font-size: 20px;
    color: var(--dp-cyan);
  }

  .delivery-process-root .dp-step-btn.is-hovered .dp-step-num-wrap {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.1);
    transform: scale(1.08);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.45),
      0 0 32px rgba(16, 200, 229, 0.32),
      inset 0 0 22px rgba(16, 200, 229, 0.12);
  }

  .delivery-process-root .dp-step-btn.is-hovered .dp-step-num {
    color: #ffffff;
  }

  .delivery-process-root .dp-step-btn.is-hovered .dp-step-num-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  .delivery-process-root .dp-step-title {
    flex: 1;
    min-width: 0;
    font-weight: 800;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: var(--dp-txt-dim);
    transition:
      transform 0.65s var(--dp-ease-out),
      letter-spacing 0.65s var(--dp-ease-out),
      color 0.65s var(--dp-ease-out),
      text-shadow 0.65s var(--dp-ease-out);
    line-height: 1.1;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .delivery-process-root .dp-step-title::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 7px;
    background: linear-gradient(90deg, var(--dp-cyan) 0%, rgba(15, 99, 243, 0.45) 100%);
    transition: width 0.7s var(--dp-ease-out);
  }

  .delivery-process-root .dp-step-btn.is-active .dp-step-title {
    font-size: 19px;
    color: var(--dp-head);
  }

  .delivery-process-root .dp-step-btn.is-hovered .dp-step-title {
    transform: translateX(6px);
    letter-spacing: 0.01em;
    color: #ffffff;
    text-shadow: 0 0 24px rgba(16, 200, 229, 0.18);
  }

  .delivery-process-root .dp-step-btn.is-hovered .dp-step-title::after {
    width: 44px;
  }

  .delivery-process-root .dp-detail-col {
    position: relative;
    min-height: 420px;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .delivery-process-root .dp-photo-wrap {
    position: relative;
    flex: 1;
    min-height: 220px;
    min-width: 0;
    overflow: hidden;
    background: var(--dp-panel);
    transition: box-shadow 0.6s var(--dp-ease-out);
  }

  .delivery-process-root .dp-photo-glow {
    position: absolute;
    inset: 0;
    z-index: 4;
    pointer-events: none;
    opacity: 0;
    box-shadow:
      inset 0 0 0 1px rgba(16, 200, 229, 0.45),
      inset 0 0 28px rgba(16, 200, 229, 0.12);
    transition: opacity 0.6s var(--dp-ease-out);
  }

  .delivery-process-root .dp-detail-col.is-hovered .dp-photo-glow {
    opacity: 1;
  }

  .delivery-process-root .dp-detail-col.is-hovered .dp-photo-wrap {
    box-shadow: inset 0 -40px 60px rgba(0, 0, 0, 0.25);
  }

  .delivery-process-root .dp-photo-inner {
    position: relative;
    overflow: hidden;
    background: var(--dp-panel);
    width: 100%;
    height: 100%;
  }

  .delivery-process-root .dp-photo-img {
    position: absolute;
    top: -8%;
    left: 0;
    width: 100%;
    height: 116%;
    object-fit: cover;
    display: block;
    will-change: transform;
    transform: translateY(var(--dp-parallax-y, 0px)) scale(1);
    transition: transform 0.85s var(--dp-ease-out);
  }

  .delivery-process-root .dp-detail-col.is-hovered .dp-photo-frame.is-visible .dp-photo-img {
    transform: translateY(calc(var(--dp-parallax-y, 0px) - 4px)) scale(1.08);
  }

  .delivery-process-root .dp-photo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,27,65,0.20) 0%, rgba(0,27,65,0.82) 100%);
    mix-blend-mode: multiply;
    transition: background 0.6s var(--dp-ease-out);
  }

  .delivery-process-root .dp-detail-col.is-hovered .dp-photo-frame.is-visible .dp-photo-overlay {
    background: linear-gradient(
      180deg,
      rgba(0, 17, 43, 0.08) 0%,
      rgba(0, 17, 43, 0.45) 55%,
      rgba(15, 99, 243, 0.22) 100%
    );
  }

  .delivery-process-root .dp-photo-shine {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(
      105deg,
      transparent 38%,
      rgba(255, 255, 255, 0.07) 46%,
      rgba(16, 200, 229, 0.18) 50%,
      rgba(255, 255, 255, 0.07) 54%,
      transparent 62%
    );
    transform: translateX(-130%) skewX(-12deg);
    pointer-events: none;
    transition: transform 1s var(--dp-ease-out);
  }

  .delivery-process-root .dp-detail-col.is-hovered .dp-photo-frame.is-visible .dp-photo-shine {
    transform: translateX(130%) skewX(-12deg);
  }

  .delivery-process-root .dp-photo-counter {
    position: absolute;
    left: 30px;
    bottom: 24px;
    z-index: 2;
    font-weight: 800;
    font-size: 13px;
    letter-spacing: 0.16em;
    color: #fff;
    font-variant-numeric: tabular-nums;
  }

  .delivery-process-root .dp-photo-counter-dim {
    color: rgba(255, 255, 255, 0.5);
  }

  .delivery-process-root .dp-detail-body {
    padding: 28px 30px 30px;
    border-top: 1px solid var(--dp-line);
    min-width: 0;
  }

  .delivery-process-root .dp-detail-title {
    font-weight: 800;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: var(--dp-head);
    margin: 0;
    overflow-wrap: anywhere;
    word-break: break-word;
    transition:
      transform 0.65s var(--dp-ease-out),
      letter-spacing 0.65s var(--dp-ease-out),
      color 0.65s var(--dp-ease-out),
      text-shadow 0.65s var(--dp-ease-out);
  }

  .delivery-process-root .dp-detail-title::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 8px;
    background: linear-gradient(90deg, var(--dp-cyan) 0%, rgba(15, 99, 243, 0.45) 100%);
    transition: width 0.7s var(--dp-ease-out);
  }

  .delivery-process-root .dp-detail-text {
    font-size: 15.5px;
    line-height: 1.6;
    color: var(--dp-txt-dim);
    margin: 10px 0 0;
    min-height: 50px;
    overflow-wrap: anywhere;
    transition:
      transform 0.7s var(--dp-ease-out) 0.05s,
      color 0.7s var(--dp-ease-out) 0.05s;
  }

  .delivery-process-root .dp-detail-col.is-hovered .dp-detail-title {
    transform: translateX(8px);
    letter-spacing: 0.01em;
    color: #ffffff;
    text-shadow: 0 0 24px rgba(16, 200, 229, 0.18);
  }

  .delivery-process-root .dp-detail-col.is-hovered .dp-detail-title::after {
    width: 52px;
  }

  .delivery-process-root .dp-detail-col.is-hovered .dp-detail-text {
    transform: translateX(8px);
    color: rgba(234, 241, 251, 0.82);
  }

  .delivery-process-root .dp-progress-row {
    display: flex;
    gap: 8px;
    margin-top: 18px;
    width: 100%;
    min-width: 0;
  }

  .delivery-process-root .dp-progress-track {
    flex: 1;
    min-width: 0;
    height: 3px;
    background: var(--dp-line);
    overflow: hidden;
  }

  @media (max-width: 860px) {
    .delivery-process-root {
      padding: 72px 0;
    }

    .delivery-process-root .dp-container {
      padding: 0 24px;
    }

    .delivery-process-root .dp-header {
      margin-bottom: 28px;
    }

    .delivery-process-root .dp-heading {
      font-size: clamp(26px, 7.5vw, 40px);
    }

    .delivery-process-root .dp-desc {
      font-size: 15px;
      margin-top: 16px;
    }

    .delivery-process-root .dp-grid {
      grid-template-columns: 1fr;
    }

    .delivery-process-root .dp-nav {
      border-right: none;
      border-bottom: 1px solid var(--dp-line);
    }

    .delivery-process-root .dp-detail-col {
      min-height: 0;
    }

    .delivery-process-root .dp-photo-wrap {
      min-height: 200px;
    }

    .delivery-process-root .dp-photo-counter {
      left: 20px;
      bottom: 18px;
    }

    .delivery-process-root .dp-detail-body {
      padding: 22px 20px 24px;
    }

    .delivery-process-root .dp-detail-title {
      font-size: 18px;
    }

    .delivery-process-root .dp-detail-text {
      font-size: 15px;
      min-height: 0;
    }
  }

  @media (max-width: 480px) {
    .delivery-process-root {
      padding: 56px 0;
    }

    .delivery-process-root .dp-container {
      padding: 0 16px;
    }

    .delivery-process-root .dp-eyebrow {
      font-size: 11px;
      letter-spacing: 0.18em;
      margin-bottom: 18px;
    }

    .delivery-process-root .dp-heading {
      font-size: clamp(22px, 7vw, 30px);
      line-height: 1.08;
      letter-spacing: -0.02em;
    }

    .delivery-process-root .dp-desc {
      font-size: 14px;
      line-height: 1.6;
    }

    .delivery-process-root .dp-step-btn {
      padding: 16px 14px;
      gap: 12px;
    }

    .delivery-process-root .dp-step-num {
      font-size: 16px;
    }

    .delivery-process-root .dp-step-num-wrap {
      width: 40px;
      height: 40px;
    }

    .delivery-process-root .dp-step-btn.is-active .dp-step-num {
      font-size: 17px;
    }

    .delivery-process-root .dp-step-title {
      font-size: 12px;
      line-height: 1.2;
    }

    .delivery-process-root .dp-step-btn.is-active .dp-step-title {
      font-size: 13px;
    }

    .delivery-process-root .dp-photo-wrap {
      min-height: 180px;
    }

    .delivery-process-root .dp-detail-title {
      font-size: 16px;
    }

    .delivery-process-root .dp-detail-text {
      font-size: 14px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .delivery-process-root .dp-grid {
      opacity: 1;
      transform: none;
      transition: none;
    }

    .delivery-process-root .dp-step-btn.is-hovered {
      transform: none;
    }

    .delivery-process-root .dp-step-btn.is-hovered .dp-step-num-wrap {
      transform: none;
    }

    .delivery-process-root .dp-step-btn.is-hovered .dp-step-title,
    .delivery-process-root .dp-detail-col.is-hovered .dp-detail-title,
    .delivery-process-root .dp-detail-col.is-hovered .dp-detail-text {
      transform: none;
    }

    .delivery-process-root .dp-photo-img {
      transform: none !important;
    }

    .delivery-process-root .dp-step-num-shine,
    .delivery-process-root .dp-photo-shine,
    .delivery-process-root .dp-photo-glow {
      display: none;
    }
  }
`;
