export const featureItemCss = `
  .fi-root,
  .fi-root *,
  .fi-root *::before,
  .fi-root *::after {
    box-sizing: border-box;
  }

  .fi-root {
    --fi-check: #00FF00;
    --fi-cross: #EF4444;
    --fi-text-on: #000000;
    --fi-text-off: #99A1AF;
    --fi-tip-bg: #0A1325;
    --fi-icon-hover: #001b41;
    --fi-tip-text: #EAF1FB;
    --fi-tip-border: rgba(125, 170, 215, 0.18);
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    padding: 1rem 1.5rem;
    font-family: inherit;
  }

  .fi-root .fi-icon {
    display: flex;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .fi-root.fi-check .fi-icon {
    color: var(--fi-check);
  }

  .fi-root.fi-cross .fi-icon {
    color: var(--fi-cross);
  }

  .fi-root .fi-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 15px;
    line-height: 1.45;
    font-weight: 500;
    overflow-wrap: anywhere;
  }

  .fi-root.fi-check .fi-label {
    color: var(--fi-text-on);
  }

  .fi-root.fi-cross .fi-label {
    color: var(--fi-text-off);
  }

  /* ── tooltip ── */
  .fi-root .fi-tip-wrap {
    position: relative;
    flex-shrink: 0;
    display: flex;
    margin-top: 1px;
  }

  .fi-root .fi-tip-btn {
    appearance: none;
    -webkit-appearance: none;
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    color: var(--fi-text-off);
    cursor: help;
    font: inherit;
    transition: color 0.2s ease;
  }

  .fi-root .fi-tip-btn:hover,
  .fi-root .fi-tip-btn:focus-visible {
    color: var(--fi-icon-hover);
  }

  .fi-root .fi-sr {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .fi-root .fi-tip {
    position: absolute;
    z-index: 20;
    width: max-content;
    max-width: 240px;
    padding: 9px 12px;
    background: var(--fi-tip-bg);
    color: var(--fi-tip-text);
    border: 1px solid var(--fi-tip-border);
    border-radius: 6px;
    font-size: 13px;
    line-height: 1.45;
    font-weight: 500;
    text-align: left;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.18s ease, visibility 0.18s ease;
  }

  .fi-root .fi-tip::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--fi-tip-bg);
    border: 1px solid var(--fi-tip-border);
    transform: rotate(45deg);
  }

  .fi-root .fi-tip-wrap:hover .fi-tip,
  .fi-root .fi-tip-wrap:focus-within .fi-tip {
    opacity: 1;
    visibility: visible;
  }

  /* top — above the info icon */
  .fi-root.fi-tip-top .fi-tip {
    bottom: calc(100% + 9px);
    left: 50%;
    transform: translateX(-50%);
  }

  .fi-root.fi-tip-top .fi-tip::after {
    bottom: -5px;
    left: 50%;
    margin-left: -4px;
    border-top: 0;
    border-left: 0;
  }

  .fi-root.fi-tip-left .fi-tip {
    right: calc(100% + 9px);
    top: 50%;
    transform: translateY(-50%);
  }

  .fi-root.fi-tip-left .fi-tip::after {
    right: -5px;
    top: 50%;
    margin-top: -4px;
    border-bottom: 0;
    border-left: 0;
  }

  .fi-root.fi-tip-right .fi-tip {
    left: calc(100% + 9px);
    top: 50%;
    transform: translateY(-50%);
  }

  .fi-root.fi-tip-right .fi-tip::after {
    left: -5px;
    top: 50%;
    margin-top: -4px;
    border-top: 0;
    border-right: 0;
  }

  /* 991px and below: icon only, centred */
  @media (max-width: 991px) {
    .fi-root {
      justify-content: center;
    }

    .fi-root .fi-label,
    .fi-root .fi-tip-wrap {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .fi-root .fi-tip,
    .fi-root .fi-tip-btn {
      transition: none;
    }
  }
`;
