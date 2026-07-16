export const bulletListCss = `
  .bl-root,
  .bl-root *,
  .bl-root *::before,
  .bl-root *::after {
    box-sizing: border-box;
  }

  /* ── themes ── */
  .bl-root.bl-dark {
    --bl-icon:      #10C8E5;
    --bl-title:     #ffffff;
    --bl-body:      rgba(221, 233, 249, 0.65);
  }

  .bl-root.bl-light {
    --bl-icon:      #0f63f3;
    --bl-title:     #001b41;
    --bl-body:      rgba(0, 27, 65, 0.65);
  }

  .bl-root {
    width: 100%;
    font-family: inherit;
  }

  .bl-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* ── item ── */
  .bl-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .bl-icon {
    flex-shrink: 0;
    color: var(--bl-icon);
    margin-top: 2px;
    display: flex;
    align-items: center;
  }

  .bl-content {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }

  .bl-title {
    font-size: 15px;
    font-weight: 700;
    color: var(--bl-title);
    margin: 0;
    line-height: 1.4;
  }

  .bl-body {
    font-size: 14px;
    font-weight: 400;
    color: var(--bl-body);
    margin: 0;
    line-height: 1.55;
  }

  /* ── alignment: left (default) ── */
  .bl-root.bl-align-left .bl-list {
    align-items: flex-start;
  }

  .bl-root.bl-align-left .bl-item {
    text-align: left;
  }

  /* ── alignment: center (all breakpoints) ── */
  .bl-root.bl-align-center .bl-list {
    align-items: center;
  }

  .bl-root.bl-align-center .bl-item {
    text-align: left;
  }

  /* ── alignment: tablet-center (991px–769px) ── */
  @media (max-width: 991px) and (min-width: 769px) {
    .bl-root.bl-align-tablet-center .bl-list {
      align-items: center;
    }
    .bl-root.bl-align-tablet-center .bl-item {
      text-align: left;
    }
  }

  /* ── alignment: mobile-l-center (768px–480px) ── */
  @media (max-width: 768px) and (min-width: 480px) {
    .bl-root.bl-align-mobile-l-center .bl-list {
      align-items: center;
    }
    .bl-root.bl-align-mobile-l-center .bl-item {
      text-align: left;
    }
  }

  /* ── alignment: mobile-center (479px and below) ── */
  @media (max-width: 479px) {
    .bl-root.bl-align-mobile-center .bl-list {
      align-items: center;
    }
    .bl-root.bl-align-mobile-center .bl-item {
      text-align: left;
    }
  }
`;
