export const whyBentoArrayLightOverride = `
  .wb-root.wb-light {
    --wb-ink:         #ffffff;
    --wb-field:       #ffffff;
    --wb-panel:       #f0f6ff;
    --wb-line:        rgba(3, 36, 71, 0.10);
    --wb-line-strong: rgba(15, 99, 243, 0.40);
    --wb-txt:         rgba(0, 27, 65, 0.75);
    --wb-txt-dim:     rgba(0, 27, 65, 0.60);
    --wb-head:        #001b41;
    --wb-faint:       rgba(0, 27, 65, 0.30);
    --wb-cyan:        #0f63f3;
  }

  .wb-root.wb-light .wb-tile--default {
    border-color: rgba(3, 36, 71, 0.10);
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }

  .wb-root.wb-light .wb-tile--big {
    border-color: rgba(3, 36, 71, 0.10);
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }

  .wb-root.wb-light .wb-tile.is-visible:hover {
    border-color: rgba(15, 99, 243, 0.40);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.10);
  }

  .wb-root.wb-light .wb-tile-grid-bg {
    background-image:
      linear-gradient(rgba(15, 99, 243, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15, 99, 243, 0.06) 1px, transparent 1px);
  }

  .wb-root.wb-light .wb-tile.is-visible:hover .wb-icon-wrap {
    border-color: rgba(15, 99, 243, 0.70);
    background: rgba(15, 99, 243, 0.08);
    box-shadow:
      0 0 0 1px rgba(15, 99, 243, 0.35),
      0 0 20px rgba(15, 99, 243, 0.14);
  }

  .wb-root.wb-light .wb-tile.is-visible:hover .wb-tile-title {
    color: #001b41;
    text-shadow: none;
  }

  .wb-root.wb-light .wb-tile-title::after {
    background: linear-gradient(90deg, #0f63f3 0%, rgba(16, 200, 229, 0.45) 100%);
  }

  .wb-root.wb-light .wb-tile.is-visible:hover .wb-tile-text {
    color: rgba(0, 27, 65, 0.85);
  }
`;
