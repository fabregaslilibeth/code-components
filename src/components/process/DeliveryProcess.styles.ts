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
    --dp-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
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
    transition: background var(--dp-dur-base);
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

  .delivery-process-root .dp-step-num {
    font-weight: 800;
    font-size: 22px;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
    color: var(--dp-faint);
    transition: all var(--dp-dur-base);
    width: 44px;
    flex-shrink: 0;
  }

  .delivery-process-root .dp-step-btn.is-active .dp-step-num {
    font-size: 30px;
    color: var(--dp-cyan);
  }

  .delivery-process-root .dp-step-title {
    flex: 1;
    min-width: 0;
    font-weight: 800;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: var(--dp-txt-dim);
    transition: all var(--dp-dur-base);
    line-height: 1.1;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .delivery-process-root .dp-step-btn.is-active .dp-step-title {
    font-size: 19px;
    color: var(--dp-head);
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
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .delivery-process-root .dp-photo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,27,65,0.20) 0%, rgba(0,27,65,0.82) 100%);
    mix-blend-mode: multiply;
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
  }

  .delivery-process-root .dp-detail-text {
    font-size: 15.5px;
    line-height: 1.6;
    color: var(--dp-txt-dim);
    margin: 10px 0 0;
    min-height: 50px;
    overflow-wrap: anywhere;
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
      width: 32px;
      font-size: 18px;
    }

    .delivery-process-root .dp-step-btn.is-active .dp-step-num {
      font-size: 22px;
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
`;
