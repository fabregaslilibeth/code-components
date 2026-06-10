import * as React from 'react';
import { bannerStyles as styles } from './Banner.styles';

export interface BannerProps {
  /** URL for the hero image that overlaps the bottom (e.g. team photo). Place image in public folder or pass full URL. */
  heroImageSrc?: string;
  /** Video embed URL or placeholder – if not set, shows placeholder only */
  videoSrc?: string;
  /** Primary CTA link */
  primaryCtaUrl?: string;
  /** Right box CTA link */
  rightBoxCtaUrl?: string;
}

const SUPPORTING_POINTS = [
  'Managed IT Support & Helpdesk',
  'Cyber Security Monitoring & Protection',
  'Microsoft 365 Support, Security & Backup',
];

const RIGHT_BOX_BULLETS = [
  'Identify cyber risks across Microsoft 365 & devices',
  'Get a clear, prioritised action plan',
  'No obligation. No pressure.',
];

export const Banner = ({
  heroImageSrc = '/hero-team.png',
  videoSrc,
  primaryCtaUrl = '#assessment',
  rightBoxCtaUrl = '#security-check',
}: BannerProps) => {
  return (
    <section style={styles.root} className="banner-root">
      <style>{styles.mediaQueries}</style>

      <div style={styles.heroWrap} className="banner-hero-wrap">
        <div style={styles.heroInner} className="banner-hero-inner">
          {/* Left column: main content */}
          <div style={styles.contentCol} className="banner-content-col">
            <p style={styles.eyebrow}>Secure IT. Smarter Growth.</p>
            <h1 style={styles.h1}>
              Managed IT & Cyber Security for UK Businesses
            </h1>
            <p style={styles.subheadline}>
              UK-wide Managed IT Support, Cyber Security and Microsoft 365
              expertise. Secure, Reliable and Built to Scale.
            </p>
            <ul style={styles.supportingList}>
              {SUPPORTING_POINTS.map((text) => (
                <li key={text} style={styles.supportingItem}>
                  <span style={styles.checkIcon} aria-hidden>
                    ✓
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <a
              href={primaryCtaUrl}
              style={styles.ctaPrimary}
              className="banner-cta-primary"
            >
              Get a Free IT & Security Assessment
            </a>
            <div style={styles.trustLine}>
              <span>Excellent on Trustpilot</span>
              <span style={styles.trustStars} aria-hidden>
                ★★★★★
              </span>
            </div>
          </div>

          {/* Right column: video placeholder + right box */}
          <div style={styles.rightCol}>
            <div style={styles.videoPlaceholder}>
              {videoSrc ? (
                <video
                  src={videoSrc}
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                  aria-label="Hero video"
                />
              ) : (
                <span>Video placeholder</span>
              )}
            </div>

            {/* Refined right-side box */}
            <div style={styles.rightBox} className="banner-right-box">
              <h2 style={styles.rightBoxTitle}>Is Your Business Secure?</h2>
              <p style={styles.rightBoxBadge}>
                Free Cyber Security Check (UK Businesses)
              </p>
              <ul style={styles.rightBoxList}>
                {RIGHT_BOX_BULLETS.map((text) => (
                  <li key={text} style={styles.rightBoxItem}>
                    <span style={styles.checkIcon} aria-hidden>
                      ✓
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
              <a
                href={rightBoxCtaUrl}
                style={styles.rightBoxCta}
                className="banner-right-cta"
              >
                Run Free Security Check
              </a>
              <p style={styles.rightBoxMicro}>
                Takes ~2 minutes • Results emailed
              </p>
            </div>
          </div>
        </div>

        {/* Image sticking out over the diagonal edge */}
        {heroImageSrc && (
          <div
            style={styles.stickyImageWrap}
            className="banner-sticky-wrap"
            aria-hidden
          >
            <img
              src={heroImageSrc}
              alt=""
              style={styles.stickyImage}
              loading="eager"
            />
          </div>
        )}
      </div>

      {/* Orange strip under diagonal */}
      <div style={styles.diagonalStrip} aria-hidden />
    </section>
  );
};
