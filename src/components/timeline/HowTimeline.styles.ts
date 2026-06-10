export const howTimelineCss = `
  .how-timeline-root,
  .how-timeline-root *,
  .how-timeline-root *::before,
  .how-timeline-root *::after {
    box-sizing: border-box;
  }

  .how-timeline-root {
    --ht-ink: #04060D;
    --ht-field: #070C18;
    --ht-line: rgba(125, 170, 215, 0.14);
    --ht-line-strong: rgba(16, 200, 229, 0.34);
    --ht-txt-dim: rgba(221, 233, 249, 0.56);
    --ht-head: #ffffff;
    --ht-cyan: #10C8E5;
    --ht-ease: cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    font-family: inherit;
    background: var(--ht-ink);
    padding: 112px 0;
    border-top: 1px solid var(--ht-line);
  }

  .how-timeline-root .ht-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    min-width: 0;
  }

  .how-timeline-root .ht-tl {
    position: relative;
  }

  .how-timeline-root .ht-tl-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 26px;
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.7s var(--ht-ease),
      transform 0.7s var(--ht-ease);
    transition-delay: calc(var(--ht-index, 0) * 0.08s);
  }

  .how-timeline-root .ht-tl-item.is-visible {
    opacity: 1;
    transform: none;
    cursor: default;
  }

  .how-timeline-root .ht-tl-item.is-visible:hover {
    transform: translateX(2px);
  }

  .how-timeline-root .ht-tl-rail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .how-timeline-root .ht-tl-item--last .ht-tl-line {
    display: none;
  }

  .how-timeline-root .ht-tl-item--last .ht-tl-rail {
    align-self: start;
  }

  .how-timeline-root .ht-tl-num {
    position: relative;
    overflow: hidden;
    width: 54px;
    height: 54px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid var(--ht-line-strong);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 18px;
    color: var(--ht-cyan);
    background: var(--ht-field);
    font-variant-numeric: tabular-nums;
    transition:
      border-color 0.6s var(--ht-ease),
      box-shadow 0.6s var(--ht-ease),
      transform 0.6s var(--ht-ease),
      background 0.6s var(--ht-ease),
      color 0.6s var(--ht-ease);
  }

  .how-timeline-root .ht-tl-num-shine {
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
    transition: transform 0.95s var(--ht-ease);
  }

  .how-timeline-root .ht-tl-item.is-visible .ht-tl-num {
    border-color: var(--ht-cyan);
    box-shadow: 0 0 16px rgba(16, 200, 229, 0.22);
  }

  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-num {
    border-color: rgba(16, 200, 229, 0.85);
    background: rgba(16, 200, 229, 0.1);
    color: #ffffff;
    transform: scale(1.08);
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.45),
      0 0 32px rgba(16, 200, 229, 0.32),
      inset 0 0 22px rgba(16, 200, 229, 0.12);
  }

  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-num-shine {
    transform: translateX(140%) skewX(-14deg);
  }

  .how-timeline-root .ht-tl-line {
    position: relative;
    flex: 1;
    width: 2px;
    min-height: 26px;
    margin: 8px 0;
    overflow: hidden;
  }

  .how-timeline-root .ht-tl-line::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(16, 200, 229, 0.08);
  }

  .how-timeline-root .ht-tl-line-fill {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, var(--ht-cyan), rgba(16, 200, 229, 0.05));
    transform: scaleY(0);
    transform-origin: top;
    transition:
      transform 0.9s var(--ht-ease),
      background 0.6s var(--ht-ease),
      box-shadow 0.6s var(--ht-ease);
  }

  .how-timeline-root .ht-tl-item.is-visible .ht-tl-line-fill {
    transform: scaleY(1);
  }

  .how-timeline-root .ht-tl-body {
    display: grid;
    grid-template-columns: 1fr 220px;
    gap: 26px;
    align-items: center;
    padding-bottom: 38px;
    min-width: 0;
  }

  .how-timeline-root .ht-tl-copy {
    position: relative;
    min-width: 0;
  }

  .how-timeline-root .ht-tl-title {
    font-weight: 800;
    font-size: 21px;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: var(--ht-head);
    margin: 0;
    overflow-wrap: anywhere;
    transition:
      transform 0.65s var(--ht-ease),
      letter-spacing 0.65s var(--ht-ease),
      color 0.65s var(--ht-ease),
      text-shadow 0.65s var(--ht-ease);
  }

  .how-timeline-root .ht-tl-title::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 8px;
    background: linear-gradient(90deg, var(--ht-cyan) 0%, rgba(15, 99, 243, 0.45) 100%);
    transition: width 0.7s var(--ht-ease);
  }

  .how-timeline-root .ht-tl-text {
    font-size: 15px;
    line-height: 1.6;
    color: var(--ht-txt-dim);
    margin: 9px 0 0;
    max-width: 520px;
    overflow-wrap: anywhere;
    transition:
      transform 0.7s var(--ht-ease) 0.05s,
      color 0.7s var(--ht-ease) 0.05s,
      opacity 0.7s var(--ht-ease) 0.05s;
  }

  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-title {
    transform: translateX(8px);
    letter-spacing: 0.01em;
    color: #ffffff;
    text-shadow: 0 0 24px rgba(16, 200, 229, 0.18);
  }

  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-title::after {
    width: 52px;
  }

  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-text {
    transform: translateX(8px);
    color: rgba(234, 241, 251, 0.82);
  }

  .how-timeline-root .ht-tl-thumb {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--ht-line);
    min-height: 130px;
    align-self: stretch;
    cursor: pointer;
    transition:
      border-color 0.6s var(--ht-ease),
      box-shadow 0.6s var(--ht-ease);
  }

  .how-timeline-root .ht-tl-thumb::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: 3;
    border-radius: inherit;
    opacity: 0;
    box-shadow:
      0 0 0 1px rgba(16, 200, 229, 0.45),
      0 0 28px rgba(16, 200, 229, 0.22),
      inset 0 0 24px rgba(16, 200, 229, 0.08);
    transition: opacity 0.6s var(--ht-ease);
    pointer-events: none;
  }

  .how-timeline-root .ht-tl-thumb:hover,
  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-thumb {
    border-color: rgba(16, 200, 229, 0.55);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  }

  .how-timeline-root .ht-tl-thumb:hover::before,
  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-thumb::before {
    opacity: 1;
  }

  .how-timeline-root .ht-tl-thumb img {
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 120%;
    object-fit: cover;
    display: block;
    will-change: transform;
    transform: translateY(var(--ht-parallax-y, 0px)) scale(1);
    transition: transform 0.85s var(--ht-ease);
  }

  .how-timeline-root .ht-tl-thumb:hover img,
  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-thumb img {
    transform: translateY(calc(var(--ht-parallax-y, 0px) - 4px)) scale(1.1);
  }

  .how-timeline-root .ht-tl-thumb-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 17, 43, 0.15), rgba(0, 17, 43, 0.5));
    pointer-events: none;
    transition: opacity 0.6s var(--ht-ease), background 0.6s var(--ht-ease);
  }

  .how-timeline-root .ht-tl-thumb:hover .ht-tl-thumb-overlay,
  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-thumb-overlay {
    background: linear-gradient(
      180deg,
      rgba(0, 17, 43, 0.04) 0%,
      rgba(0, 17, 43, 0.22) 55%,
      rgba(15, 99, 243, 0.18) 100%
    );
  }

  .how-timeline-root .ht-tl-thumb-shine {
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
    transition: transform 1s var(--ht-ease);
  }

  .how-timeline-root .ht-tl-thumb:hover .ht-tl-thumb-shine,
  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-thumb-shine {
    transform: translateX(130%) skewX(-12deg);
  }

  .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-line-fill {
    background: linear-gradient(180deg, var(--ht-cyan), rgba(16, 200, 229, 0.35));
    box-shadow: 0 0 12px rgba(16, 200, 229, 0.35);
  }

  @media (max-width: 860px) {
    .how-timeline-root {
      padding: 72px 0;
    }
  }

  @media (max-width: 620px) {
    .how-timeline-root .ht-tl-body {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .how-timeline-root .ht-tl-thumb {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .how-timeline-root .ht-tl-item {
      opacity: 1;
      transform: none;
      transition: none;
    }

    .how-timeline-root .ht-tl-line-fill {
      transform: scaleY(1);
      transition: none;
    }

    .how-timeline-root .ht-tl-thumb img {
      transform: none !important;
    }

    .how-timeline-root .ht-tl-thumb:hover img {
      transform: none !important;
    }

    .how-timeline-root .ht-tl-item.is-visible:hover {
      transform: none;
    }

    .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-num {
      transform: none;
    }

    .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-title,
    .how-timeline-root .ht-tl-item.is-visible:hover .ht-tl-text {
      transform: none;
    }

    .how-timeline-root .ht-tl-num-shine,
    .how-timeline-root .ht-tl-thumb-shine,
    .how-timeline-root .ht-tl-thumb::before {
      display: none;
    }
  }

  @media print {
    .how-timeline-root .ht-tl-item {
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;
