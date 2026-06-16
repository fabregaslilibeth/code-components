export const pillListCss = `
  .pl-root,
  .pl-root *,
  .pl-root *::before,
  .pl-root *::after {
    box-sizing: border-box;
  }

  /* ── dark theme ── */
  .pl-root.pl-dark {
    --pl-pill-bg:     #0A1325;
    --pl-pill-border: rgba(125, 170, 215, 0.14);
    --pl-pill-hover:  #0f1e38;
    --pl-label:       rgba(221, 233, 249, 0.80);
    --pl-label-hover: #ffffff;
  }

  /* ── light theme ── */
  .pl-root.pl-light {
    --pl-pill-bg:     #ffffff;
    --pl-pill-border: rgba(3, 36, 71, 0.10);
    --pl-pill-hover:  #f0f6ff;
    --pl-label:       rgba(0, 27, 65, 0.75);
    --pl-label-hover: #001b41;
  }

  .pl-root {
    width: 100%;
    font-family: inherit;
  }

  .pl-track {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .pl-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 16px 8px 12px;
    background: var(--pl-pill-bg);
    border: 1px solid var(--pl-pill-border);
    border-radius: 999px;
    cursor: default;
    user-select: none;
    text-decoration: none;
    transition:
      background 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;
  }

  .pl-pill--link {
    cursor: pointer;
  }

  .pl-pill--link:hover {
    background: var(--pl-pill-hover);
    border-color: rgba(16, 200, 229, 0.40);
    box-shadow: 0 0 0 1px rgba(16, 200, 229, 0.12);
  }

  .pl-pill-icon {
    color: #10C8E5;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    transition: transform 0.25s ease;
  }

  .pl-pill--link:hover .pl-pill-icon {
    transform: scale(1.15);
  }

  .pl-pill-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--pl-label);
    transition: color 0.25s ease;
    white-space: nowrap;
  }

  .pl-pill--link:hover .pl-pill-label {
    color: var(--pl-label-hover);
  }
`;
