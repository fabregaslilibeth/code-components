export const textWithImageCss = `
  .twi-root,
  .twi-root *,
  .twi-root *::before,
  .twi-root *::after {
    box-sizing: border-box;
  }

  .twi-root {
    --twi-eyebrow: #10C8E5;
    --twi-title: #001b41;
    --twi-body: rgba(0, 27, 65, 0.78);
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: 48px;
    width: 100%;
    max-width: 100%;
  }

  /* ── desktop placement ── */
  .twi-root.twi-img-left {
    flex-direction: row;
  }

  .twi-root.twi-img-right {
    flex-direction: row-reverse;
  }

  .twi-root .twi-media {
    flex: 1 1 0;
    min-width: 0;
  }

  .twi-root .twi-media img {
    display: block;
    width: 100%;
    height: auto;
  }

  .twi-root .twi-copy {
    flex: 1 1 0;
    min-width: 0;
  }

  /* copy sitting on its own shouldn't stretch the full container */
  .twi-root.twi-solo .twi-copy {
    max-width: 760px;
  }

  .twi-root .twi-eyebrow {
    display: inline-flex;
    align-items: center;
    font-weight: 700;
    font-size: clamp(0.95rem, calc(0.07143vw + 0.9357rem), 1rem);
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--twi-eyebrow);
    margin: 0 0 20px;
  }

  .twi-root .twi-title {
    font-weight: 800;
    font-size: clamp(28px, 3.4vw, 44px);
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: var(--twi-title);
    margin: 0;
    overflow-wrap: normal;
    word-break: normal;
    hyphens: none;
  }

  .twi-root .twi-body {
    font-size: 17px;
    line-height: 1.65;
    color: var(--twi-body);
    margin: 22px 0 0;
    overflow-wrap: anywhere;
  }

  .twi-root .twi-title + .twi-body {
    margin-top: 22px;
  }

  @media (max-width: 991px) {
    .twi-root {
      gap: 32px;
    }

    .twi-root .twi-body {
      font-size: 16px;
      margin-top: 18px;
    }
  }

  /* ── mobile landscape and below: stack ── */
  @media (max-width: 767px) {
    .twi-root.twi-mob-top {
      flex-direction: column;
    }

    .twi-root.twi-mob-bottom {
      flex-direction: column-reverse;
    }

    .twi-root {
      align-items: stretch;
      gap: 28px;
    }

    .twi-root.twi-solo .twi-copy {
      max-width: none;
    }

    .twi-root.twi-mob-text-center .twi-copy {
      text-align: center;
    }
  }

  @media (max-width: 479px) {
    .twi-root {
      gap: 22px;
    }

    .twi-root .twi-eyebrow {
      letter-spacing: 0.18em;
      margin-bottom: 16px;
    }

    .twi-root .twi-title {
      font-size: clamp(22px, 7vw, 30px);
    }

    .twi-root .twi-body {
      font-size: 15px;
      margin-top: 16px;
    }
  }
`;
