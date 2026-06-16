import * as React from 'react';
import { S } from './ExpertCta.styles';

export interface ExpertCtaProps {
  eyebrow?: string;
  headline?: string;
  expertName?: string;
  tagline?: string;
  body?: string;
  badgeImageSrc?: string;
  badgeImageAlt?: string;
  badgeText?: string;
  ctaLabel?: string;
  /** Full-body expert photo (PNG with transparent background works best) */
  expertPhotoSrc?: string;
  expertPhotoAlt?: string;
  /** Expert avatar used in the popup header and message bubble */
  expertAvatarSrc?: string;
  expertRole?: string;
  /** WhatsApp phone number in international format without + or spaces, e.g. "447700900000" */
  whatsappNumber?: string;
  /** Pre-filled WhatsApp message */
  whatsappMessage?: string;
  /** Time shown in the popup chat (e.g. "09:30") — leave blank to hide */
  popupTime?: string;
  /** Message shown in the popup bubble */
  popupMessage?: string;
  /** Label above the WhatsApp CTA inside the popup */
  popupCtaLabel?: string;
  /** WhatsApp button label */
  whatsappBtnLabel?: string;
}

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
);

export const ExpertCta = ({
  eyebrow = 'Reports taking too long? Dashboards messy?',
  headline = 'Ask our inhouse Power BI expert,',
  expertName = 'GEORGE',
  tagline = 'Make every decision data-driven.',
  body = 'Custom dashboards, KPI tracking, automated reporting, and board-ready insights. Ask our inhouse Power BI expert about our comprehensive BI consultancy services and level up how you run your business.',
  badgeImageSrc = 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/6936c5d41fc73d5cc0188ec3_Microsoft-Solutions-Partner-Logo.avif',
  badgeImageAlt = 'Microsoft Solutions Partner',
  badgeText = 'George works within a <strong>Microsoft Solutions Partner</strong> & <strong>Microsoft Certified Expert</strong> team.',
  ctaLabel = 'Chat With George',
  expertPhotoSrc = 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/695fbf29a3a902ef8880f3de_Untitled-2.avif',
  expertPhotoAlt = 'George Brown – In-House Power BI Expert',
  expertAvatarSrc = 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/695fbf29a3a902ef8880f3de_Untitled-2.avif',
  expertRole = 'In-House PowerBi Expert',
  whatsappNumber = '447967889889',
  whatsappMessage = 'Hi George, I have a question about Power BI.',
  popupTime = '30',
  popupMessage = "Do you have any questions about our Microsoft PowerBI?\n\nDrop me a line and I'll gladly help you 😍",
  popupCtaLabel = 'Start Chat with:',
  whatsappBtnLabel = 'WhatsApp',
}: ExpertCtaProps) => {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [popupPos, setPopupPos] = React.useState<{ top: number; left: number } | null>(null);

  const POPUP_WIDTH = 320;

  const openPopup = () => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      let left = r.left;
      // clamp so popup doesn't overflow the right edge
      if (left + POPUP_WIDTH > window.innerWidth - 8) {
        left = window.innerWidth - POPUP_WIDTH - 8;
      }
      setPopupPos({ top: r.top - 8, left });
    }
    setPopupOpen(v => !v);
  };

  const whatsappHref = React.useMemo(() => {
    if (!whatsappNumber) return '#';
    const encoded = encodeURIComponent(whatsappMessage);
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
  }, [whatsappNumber, whatsappMessage]);

  const avatarSrc = expertAvatarSrc || expertPhotoSrc;

  const now = React.useMemo(() => {
    if (popupTime) return popupTime;
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }, [popupTime]);

  return (
    <section style={S.root} className="expert-cta-root">
      <style>{S.mediaQueries}</style>

      <div style={S.inner} className="expert-cta-inner">
        {/* Left: content */}
        <div style={S.contentCol} className="expert-cta-content">
          <p style={S.eyebrow}>{eyebrow}</p>
          <h2 style={S.headline}>{headline}</h2>
          <h1 style={S.name}>{expertName}</h1>
          <p style={S.tagline}>{tagline}</p>
          <p style={S.body}>{body}</p>

          {(badgeImageSrc || badgeText) && (
            <div style={S.badgeRow} className="expert-cta-badge-row">
              {badgeImageSrc && (
                <img src={badgeImageSrc} alt={badgeImageAlt} style={S.badgeImg} />
              )}
              {badgeText && (
                <p
                  style={S.badgeText}
                  dangerouslySetInnerHTML={{ __html: badgeText }}
                />
              )}
            </div>
          )}

          {/* Button + popup anchored together */}
          <div style={S.btnWrap}>
            <button
              ref={btnRef}
              style={S.ctaBtn}
              className="expert-cta-cta-btn"
              onClick={openPopup}
              type="button"
              aria-expanded={popupOpen}
              aria-haspopup="dialog"
            >
              <ChatIcon />
              {ctaLabel}
              <span style={S.ctaDot} aria-hidden />
            </button>

            {popupOpen && (
              <>
                <div
                  style={S.popupOverlay}
                  onClick={() => setPopupOpen(false)}
                  aria-hidden
                />
                <div
                  style={{
                    ...S.popup,
                    ...(popupPos
                      ? { top: popupPos.top, left: popupPos.left, transform: 'translateY(-100%)' }
                      : {}),
                  }}
                  role="dialog"
                  aria-label={`Chat with ${expertName}`}
                >
            {/* Header */}
            <div style={S.popupHeader}>
              <div style={S.popupHeaderLeft}>
                {avatarSrc && (
                  <img src={avatarSrc} alt={expertName} style={S.popupAvatar} />
                )}
                <div>
                  <p style={S.popupName}>{expertName.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}</p>
                  <p style={S.popupRole}>
                    <span style={S.popupRoleDot} aria-hidden />
                    {expertRole}
                  </p>
                </div>
              </div>
              <button
                style={S.popupClose}
                onClick={() => setPopupOpen(false)}
                type="button"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            {/* Chat body */}
            <div style={S.popupBody}>
              {now && <p style={S.popupTimestamp}>{now}</p>}

              <div style={S.popupBubbleRow}>
                {avatarSrc && (
                  <img src={avatarSrc} alt="" style={S.popupBubbleAvatar} aria-hidden />
                )}
                <div style={S.popupBubble}>
                  {popupMessage.split('\n').map((line, i) =>
                    line ? <span key={i}>{line}</span> : <br key={i} />
                  )}
                </div>
              </div>

              <div style={S.popupCta}>
                <span style={S.popupCtaLabel}>{popupCtaLabel}</span>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={S.whatsappBtn}
                  className="expert-cta-whatsapp-btn"
                >
                  <WhatsAppIcon />
                  {whatsappBtnLabel}
                </a>
              </div>
            </div>
          </div>
              </>
            )}
          </div>
        </div>

        {/* Right: photo anchored to the bottom */}
        <div style={S.photoCol} className="expert-cta-photo-col">
          {expertPhotoSrc && (
            <img
              src={expertPhotoSrc}
              alt={expertPhotoAlt}
              style={S.photo}
            />
          )}
        </div>
      </div>
    </section>
  );
};
