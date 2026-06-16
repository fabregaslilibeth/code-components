export const serviceListCss = `
  .svl-root,
  .svl-root *,
  .svl-root *::before,
  .svl-root *::after {
    box-sizing: border-box;
  }

  /* ── light theme ── */
  .svl-root.svl-light {
    --svl-bg:           #ffffff;
    --svl-border:       rgba(3, 36, 71, 0.10);
    --svl-row-hover:    rgba(16, 200, 229, 0.04);
    --svl-num:          rgba(3, 36, 71, 0.22);
    --svl-title:        #001b41;
    --svl-body:         rgba(0, 27, 65, 0.55);
    --svl-arrow:        #10C8E5;
    --svl-logo-bg:      #f5f8fc;
    --svl-logo-border:  rgba(3, 36, 71, 0.08);
    --svl-cyan:         #10C8E5;
    --svl-ease:         cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* ── dark theme ── */
  .svl-root.svl-dark {
    --svl-bg:           #0A1325;
    --svl-border:       rgba(125, 170, 215, 0.12);
    --svl-row-hover:    rgba(16, 200, 229, 0.05);
    --svl-num:          rgba(221, 233, 249, 0.20);
    --svl-title:        #ffffff;
    --svl-body:         rgba(221, 233, 249, 0.55);
    --svl-arrow:        #10C8E5;
    --svl-logo-bg:      rgba(255,255,255,0.05);
    --svl-logo-border:  rgba(255,255,255,0.08);
    --svl-cyan:         #10C8E5;
    --svl-ease:         cubic-bezier(0.16, 1, 0.3, 1);
  }

  .svl-root {
    width: 100%;
    font-family: inherit;
    background: var(--svl-bg);
    border: 1px solid var(--svl-border);
    border-radius: 4px;
    overflow: hidden;
  }

  /* ── row ── */
  .svl-root .svl-row {
    display: grid;
    grid-template-columns: 44px 52px 1fr 32px;
    align-items: center;
    gap: 0 20px;
    padding: 22px 28px;
    border-bottom: 1px solid var(--svl-border);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s var(--svl-ease);
    position: relative;
  }

  .svl-root .svl-row:last-child {
    border-bottom: none;
  }

  .svl-root .svl-row:hover {
    background: var(--svl-row-hover);
  }

  /* left accent line on hover */
  .svl-root .svl-row::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--svl-cyan);
    transform: scaleY(0);
    transition: transform 0.3s var(--svl-ease);
    transform-origin: center;
  }

  .svl-root .svl-row:hover::before {
    transform: scaleY(1);
  }

  /* ── number ── */
  .svl-root .svl-num {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--svl-num);
    letter-spacing: 0.04em;
    font-variant-numeric: tabular-nums;
    user-select: none;
    transition: color 0.2s;
  }

  .svl-root .svl-row:hover .svl-num {
    color: var(--svl-cyan);
  }

  /* ── logo ── */
  .svl-root .svl-logo {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    border: 1px solid var(--svl-logo-border);
    background: var(--svl-logo-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition:
      border-color 0.25s var(--svl-ease),
      box-shadow 0.25s var(--svl-ease),
      transform 0.25s var(--svl-ease);
    overflow: hidden;
  }

  .svl-root .svl-row:hover .svl-logo {
    border-color: rgba(16, 200, 229, 0.40);
    box-shadow: 0 0 14px rgba(16, 200, 229, 0.14);
    transform: scale(1.06);
  }

  /* logo image (URL-based) */
  .svl-root .svl-logo img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  /* ── text ── */
  .svl-root .svl-text {
    min-width: 0;
  }

  .svl-root .svl-title {
    font-size: 0.9rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--svl-title);
    margin: 0 0 3px;
    line-height: 1.2;
    transition: color 0.2s;
  }

  .svl-root .svl-row:hover .svl-title {
    color: var(--svl-cyan);
  }

  .svl-root .svl-body {
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--svl-body);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ── arrow ── */
  .svl-root .svl-arrow {
    color: var(--svl-arrow);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
    opacity: 0.5;
    transition: opacity 0.2s, transform 0.25s var(--svl-ease);
  }

  .svl-root .svl-row:hover .svl-arrow {
    opacity: 1;
    transform: translate(2px, -2px);
  }

  /* ── responsive ── */
  @media (max-width: 560px) {
    .svl-root .svl-row {
      grid-template-columns: 32px 40px 1fr 24px;
      gap: 0 12px;
      padding: 16px 16px;
    }

    .svl-root .svl-num {
      font-size: 0.78rem;
    }

    .svl-root .svl-logo {
      width: 38px;
      height: 38px;
    }

    .svl-root .svl-title {
      font-size: 0.78rem;
    }

    .svl-root .svl-body {
      font-size: 0.75rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .svl-root .svl-row,
    .svl-root .svl-row::before,
    .svl-root .svl-logo,
    .svl-root .svl-arrow {
      transition: none;
    }
  }
`;
