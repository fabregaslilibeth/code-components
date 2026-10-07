export const caseStudySpotlightCss = `
  .csp-root,
  .csp-root *,
  .csp-root *::before,
  .csp-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .csp-root.csp-dark {
    --csp-field: #070C18;
    --csp-panel: #0A1325;
    --csp-line: rgba(125, 170, 215, 0.14);
    --csp-line-strong: rgba(16, 200, 229, 0.34);
    --csp-head: #ffffff;
    --csp-dim: rgba(221, 233, 249, 0.56);
    --csp-cyan: #10C8E5;
    --csp-media1: #0A1325;
    --csp-media2: #070C18;
  }

  /* ── light theme ── */
  .csp-root.csp-light {
    --csp-field: #f3f4f6;
    --csp-panel: #e8edf5;
    --csp-line: rgba(3, 36, 71, 0.12);
    --csp-line-strong: rgba(16, 200, 229, 0.34);
    --csp-head: #001b41;
    --csp-dim: rgba(0, 27, 65, 0.60);
    --csp-cyan: #10C8E5;
    --csp-media1: #e8edf5;
    --csp-media2: #dde6f2;
  }

  .csp-root {
    width: 100%;
    max-width: 100%;
    font-family: inherit;
  }

  /* ── stage ── */
  .csp-root .csp-stage {
    position: relative;
    border: 1px solid var(--csp-line);
    background: var(--csp-field);
    overflow: hidden;
  }

  .csp-root .csp-track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .csp-root .csp-slide {
    flex: 0 0 100%;
    display: grid;
    grid-template-columns: 44% 1fr;
    min-height: 420px;
    min-width: 0;
  }

  /* ── media ── */
  .csp-root .csp-media {
    position: relative;
    overflow: hidden;
    background:
      repeating-linear-gradient(45deg, rgba(16, 200, 229, 0.05) 0 1px, transparent 1px 14px),
      linear-gradient(160deg, var(--csp-media1), var(--csp-media2));
    border-right: 1px solid var(--csp-line);
    min-height: 280px;
  }

  .csp-root .csp-media img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .csp-root .csp-tag {
    position: absolute;
    bottom: 16px;
    left: 16px;
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    background: var(--csp-cyan);
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #001b41;
  }

  /* ── content ── */
  .csp-root .csp-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 44px;
    min-width: 0;
  }

  .csp-root .csp-client {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--csp-cyan);
    opacity: 0.85;
    margin: 0 0 14px;
  }

  .csp-root .csp-title {
    font-size: clamp(21px, 2.4vw, 28px);
    font-weight: 800;
    line-height: 1.28;
    letter-spacing: -0.01em;
    color: var(--csp-head);
    margin: 0 0 14px;
    overflow-wrap: anywhere;
  }

  .csp-root .csp-excerpt {
    font-size: 14.5px;
    line-height: 1.7;
    color: var(--csp-dim);
    margin: 0 0 24px;
    max-width: 46ch;
    overflow-wrap: anywhere;
  }

  .csp-root .csp-stats {
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding-top: 20px;
    margin-bottom: 24px;
    border-top: 1px solid var(--csp-line);
  }

  .csp-root .csp-stat-value {
    font-size: 32px;
    font-weight: 800;
    color: var(--csp-cyan);
    line-height: 1;
    white-space: nowrap;
  }

  .csp-root .csp-stat-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--csp-dim);
    max-width: 200px;
    line-height: 1.35;
  }

  /* ── CTA ── */
  .csp-root .csp-cta {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    align-self: flex-start;
    padding: 13px 22px;
    background: transparent;
    border: 1px solid var(--csp-line);
    border-radius: 999px;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--csp-head);
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  /* solid colour wipe, left → right */
  .csp-root .csp-cta::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--csp-cyan);
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
    z-index: 0;
  }

  .csp-root .csp-cta:hover::after {
    transform: scaleX(1);
  }

  .csp-root .csp-cta:hover {
    border-color: rgba(16, 200, 229, 0.85);
    box-shadow: 0 0 0 3px rgba(16, 200, 229, 0.14), 0 0 18px rgba(16, 200, 229, 0.14);
  }

  .csp-root .csp-cta-label-mask {
    position: relative;
    z-index: 1;
    display: inline-flex;
  }

  .csp-root .csp-cta-letter-mask {
    overflow: hidden;
    display: inline-block;
    height: 1.2em;
    line-height: 1.2em;
  }

  .csp-root .csp-cta-letter-track {
    display: flex;
    flex-direction: column;
    transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .csp-root .csp-cta-letter {
    display: block;
    height: 1.2em;
    line-height: 1.2em;
    transition: color 0.2s ease;
  }

  .csp-root .csp-cta:hover .csp-cta-letter-track {
    transform: translateY(-1.2em);
  }

  .csp-root .csp-cta:hover .csp-cta-letter {
    color: #001b41;
  }

  .csp-root .csp-cta-icon {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease, color 0.25s ease;
  }

  .csp-root .csp-cta:hover .csp-cta-icon {
    color: #001b41;
    transform: translateX(30%) rotate(-45deg);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) var(--csp-cta-icon-delay, 0ms), color 0.25s ease;
  }

  /* ── active-slide entrance: staggered rise-in + slow image zoom ── */
  @keyframes cspRise {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes cspStatPop {
    0% { opacity: 0; transform: translateY(8px) scale(0.85); }
    65% { opacity: 1; transform: translateY(0) scale(1.06); }
    100% { transform: scale(1); }
  }

  @keyframes cspKenBurns {
    from { transform: scale(1); }
    to { transform: scale(1.07); }
  }

  .csp-root .csp-slide.is-active .csp-client {
    animation: cspRise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
  }

  .csp-root .csp-slide.is-active .csp-title {
    animation: cspRise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
  }

  .csp-root .csp-slide.is-active .csp-excerpt {
    animation: cspRise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.19s both;
  }

  .csp-root .csp-slide.is-active .csp-stats {
    animation: cspRise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.26s both;
  }

  .csp-root .csp-slide.is-active .csp-stat-value {
    animation: cspStatPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.32s both;
  }

  .csp-root .csp-slide.is-active .csp-cta {
    animation: cspRise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both;
  }

  .csp-root .csp-slide.is-active .csp-media img {
    animation: cspKenBurns 9s cubic-bezier(0.25, 0.1, 0.25, 1) both;
  }

  @media (max-width: 768px) {
    .csp-root .csp-track {
      align-items: flex-start;
    }
    .csp-root .csp-slide {
      grid-template-columns: 1fr;
      min-height: 0;
    }
    .csp-root .csp-media {
      border-right: none;
      border-bottom: 1px solid var(--csp-line);
      aspect-ratio: 4 / 3;
      min-height: 0;
    }
    .csp-root .csp-content {
      padding: 28px 22px 32px;
    }
  }

  /* ── tabs row: slide tabs left, prev/next + counter right ──
     the row itself never wraps, so the arrow cluster stays pinned on the right;
     .csp-tabs wraps its own buttons internally instead when space is tight. */
  .csp-root .csp-tabs-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 16px;
    margin-top: 18px;
  }

  .csp-root .csp-nav {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
  }

  .csp-root .csp-arrow {
    flex-shrink: 0;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid var(--csp-line-strong);
    background: transparent;
    color: var(--csp-cyan);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: 0;
    transition:
      background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .csp-root .csp-arrow::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(105deg, transparent 38%, rgba(255, 255, 255, 0.1) 46%, rgba(16, 200, 229, 0.28) 50%, rgba(255, 255, 255, 0.1) 54%, transparent 62%);
    transform: translateX(-140%) skewX(-14deg);
    transition: transform 0.95s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .csp-root .csp-arrow svg {
    position: relative;
  }

  .csp-root .csp-arrow:hover {
    background: rgba(16, 200, 229, 0.12);
    border-color: rgba(16, 200, 229, 0.9);
    box-shadow: 0 0 0 1px rgba(16, 200, 229, 0.45), 0 0 28px rgba(16, 200, 229, 0.28), inset 0 0 18px rgba(16, 200, 229, 0.1);
    transform: scale(1.08);
  }

  .csp-root .csp-arrow:hover::before {
    transform: translateX(140%) skewX(-14deg);
  }

  .csp-root .csp-arrow:active {
    transform: scale(0.95);
  }

  /* ── tab indicators (avatar + client name) ── */
  .csp-root .csp-tabs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    flex: 1 1 auto;
    min-width: 0;
  }

  .csp-root .csp-tab {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 6px 16px 6px 6px;
    background: var(--csp-panel);
    border: 1px solid var(--csp-line);
    border-radius: 999px;
    cursor: pointer;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .csp-root .csp-tab:hover {
    border-color: rgba(16, 200, 229, 0.5);
  }

  .csp-root .csp-tab.is-active {
    border-color: var(--csp-cyan);
    box-shadow: 0 0 0 1px rgba(16, 200, 229, 0.35), 0 0 16px rgba(16, 200, 229, 0.18);
  }

  .csp-root .csp-tab-avatar {
    position: relative;
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    overflow: hidden;
    background: var(--csp-field);
    border: 1px solid var(--csp-line);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .csp-root .csp-tab-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    opacity: 0.65;
    transition: filter 0.3s ease, opacity 0.3s ease;
  }

  .csp-root .csp-tab-avatar span {
    font-size: 11.5px;
    font-weight: 700;
    color: var(--csp-dim);
  }

  .csp-root .csp-tab.is-active .csp-tab-avatar img {
    filter: grayscale(0);
    opacity: 1;
  }

  .csp-root .csp-tab.is-active .csp-tab-avatar {
    border-color: var(--csp-cyan);
  }

  .csp-root .csp-tab-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--csp-dim);
    white-space: nowrap;
    transition: color 0.3s ease;
  }

  .csp-root .csp-tab.is-active .csp-tab-label {
    color: var(--csp-head);
  }

  .csp-root .csp-tab-label--short {
    display: none;
  }

  /* ≤991px: swap the full client name for its short form */
  @media (max-width: 991px) {
    .csp-root .csp-tab-label--full {
      display: none;
    }
    .csp-root .csp-tab-label--short {
      display: inline;
    }
  }

  /* ≤768px: avatar only, no label at all */
  @media (max-width: 768px) {
    .csp-root .csp-tab {
      padding: 0px;
    }
    .csp-root .csp-tab-avatar {
      width: 32px;
      height: 32px;
    }
    .csp-root .csp-tab-label--full,
    .csp-root .csp-tab-label--short {
      display: none;
    }
    /* the avatar already gets its own cyan ring when active — with the label
       gone and the button now just a tight wrap around it, the button's own
       border-color + box-shadow double up on top of that ring, so drop them. */
    .csp-root .csp-tab.is-active {
      border-color: var(--csp-line);
      box-shadow: none;
    }
  }

  /* ≤479px: tabs stay on one (scrollable) line, arrows drop to their own row */
  @media (max-width: 479px) {
    .csp-root .csp-tabs-row {
      flex-direction: column;
      align-items: stretch;
    }
    .csp-root .csp-tabs {
      flex-wrap: nowrap;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding-bottom: 2px;
    }
    .csp-root .csp-tabs::-webkit-scrollbar {
      display: none;
    }
    .csp-root .csp-nav {
      justify-content: flex-end;
    }
  }

  .csp-root .csp-arrow:focus-visible,
  .csp-root .csp-cta:focus-visible,
  .csp-root .csp-tab:focus-visible {
    outline: 2px solid var(--csp-cyan);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .csp-root .csp-track,
    .csp-root .csp-cta,
    .csp-root .csp-cta::after,
    .csp-root .csp-cta-letter-track,
    .csp-root .csp-cta-icon,
    .csp-root .csp-arrow,
    .csp-root .csp-arrow::before,
    .csp-root .csp-tab,
    .csp-root .csp-tab-avatar img,
    .csp-root .csp-tab-label {
      transition: none;
    }

    .csp-root .csp-slide.is-active .csp-client,
    .csp-root .csp-slide.is-active .csp-title,
    .csp-root .csp-slide.is-active .csp-excerpt,
    .csp-root .csp-slide.is-active .csp-stats,
    .csp-root .csp-slide.is-active .csp-stat-value,
    .csp-root .csp-slide.is-active .csp-cta,
    .csp-root .csp-slide.is-active .csp-media img {
      animation: none;
    }
  }
`;
