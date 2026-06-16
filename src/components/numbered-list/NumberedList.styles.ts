export const numberedListCss = `
  .nl-root,
  .nl-root *,
  .nl-root *::before,
  .nl-root *::after {
    box-sizing: border-box;
  }

  /* ── light theme ── */
  .nl-root.nl-light {
    --nl-bg:          #ffffff;
    --nl-border:      rgba(3, 36, 71, 0.10);
    --nl-num:         rgba(3, 36, 71, 0.18);
    --nl-num-active:  #10C8E5;
    --nl-icon-border: rgba(16, 200, 229, 0.40);
    --nl-icon-bg:     rgba(16, 200, 229, 0.06);
    --nl-icon-color:  #10C8E5;
    --nl-title:       #001b41;
    --nl-body:        rgba(0, 27, 65, 0.60);
    --nl-row-hover:   rgba(16, 200, 229, 0.04);
    --nl-cyan:        #10C8E5;
  }

  /* ── dark theme ── */
  .nl-root.nl-dark {
    --nl-bg:          #0A1325;
    --nl-border:      rgba(125, 170, 215, 0.12);
    --nl-num:         rgba(221, 233, 249, 0.18);
    --nl-num-active:  #10C8E5;
    --nl-icon-border: rgba(16, 200, 229, 0.35);
    --nl-icon-bg:     rgba(16, 200, 229, 0.08);
    --nl-icon-color:  #10C8E5;
    --nl-title:       #ffffff;
    --nl-body:        rgba(221, 233, 249, 0.55);
    --nl-row-hover:   rgba(16, 200, 229, 0.05);
    --nl-cyan:        #10C8E5;
  }

  .nl-root {
    width: 100%;
    font-family: inherit;
    background: var(--nl-bg);
    border: 1px solid var(--nl-border);
    border-radius: 4px;
    overflow: hidden;
  }

  /* ── row ── */
  .nl-root .nl-row {
    display: grid;
    grid-template-columns: 52px 52px 1fr;
    align-items: center;
    gap: 0 20px;
    padding: 22px 28px;
    border-bottom: 1px solid var(--nl-border);
    transition: background 0.2s ease;
    cursor: default;
  }

  .nl-root .nl-row:last-child {
    border-bottom: none;
  }

  .nl-root .nl-row:hover {
    background: var(--nl-row-hover);
  }

  .nl-root .nl-row.nl-row--active {
    --nl-num: var(--nl-num-active);
  }

  /* ── number ── */
  .nl-root .nl-num {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--nl-num);
    letter-spacing: -0.03em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    transition: color 0.25s ease;
    user-select: none;
  }

  .nl-root .nl-row--active .nl-num,
  .nl-root .nl-row:hover .nl-num {
    color: var(--nl-num-active);
  }

  /* ── icon ── */
  .nl-root .nl-icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: 6px;
    border: 1px solid var(--nl-icon-border);
    background: var(--nl-icon-bg);
    color: var(--nl-icon-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition:
      border-color 0.25s ease,
      background 0.25s ease,
      box-shadow 0.25s ease;
  }

  .nl-root .nl-row:hover .nl-icon-wrap {
    border-color: rgba(16, 200, 229, 0.70);
    background: rgba(16, 200, 229, 0.12);
    box-shadow: 0 0 16px rgba(16, 200, 229, 0.18);
  }

  /* ── text ── */
  .nl-root .nl-text {
    min-width: 0;
  }

  .nl-root .nl-title {
    font-size: 0.9rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--nl-title);
    margin: 0 0 4px;
    line-height: 1.2;
  }

  .nl-root .nl-body {
    font-size: 0.875rem;
    line-height: 1.55;
    color: var(--nl-body);
    margin: 0;
  }

  /* ── responsive ── */
  @media (max-width: 560px) {
    .nl-root .nl-row {
      grid-template-columns: 36px 40px 1fr;
      gap: 0 12px;
      padding: 18px 16px;
    }

    .nl-root .nl-num {
      font-size: 1.15rem;
    }

    .nl-root .nl-icon-wrap {
      width: 38px;
      height: 38px;
    }

    .nl-root .nl-title {
      font-size: 0.8rem;
    }

    .nl-root .nl-body {
      font-size: 0.8rem;
    }
  }
`;
