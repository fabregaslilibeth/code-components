import { CSSProperties } from 'react';

const HEADER_BG = "#032447";
const PRICE_YELLOW = "#facc15";
const ADDON_BOX_BG = "#fefce8";
const BANNER_ORANGE = "#ea580c";

// Site type scale (Webflow variables cross the shadow root); fallbacks used outside Webflow.
const FS_SMALL = "var(--_typography---font-size--text-small, 0.9375rem)";
const FS_MAIN = "var(--_typography---font-size--text-main, 1.125rem)";
const FS_H6 = "var(--_typography---font-size--h6, 1.125rem)";
const FS_H4 = "var(--_typography---font-size--h4, 1.5rem)";
const FS_H3 = "var(--_typography---font-size--h3, 2.125rem)";

export const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1.5rem 1rem",
    fontFamily: "inherit",
    backgroundColor: "#fff",
    textAlign: "left",
  } as CSSProperties,

  controlsWrapper: {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    alignItems: "flex-start",
  } as CSSProperties,

  controlSection: {
    textAlign: "center",
  } as CSSProperties,

  controlHeading: {
    fontSize: FS_H6,
    fontWeight: "500",
    lineHeight: 1.5,
    marginBottom: "0.75rem",
    color: "#001b41",
    textAlign: "center",
  } as CSSProperties,

  toggleWrapper: {
    display: "inline-flex",
    gap: "0.5rem",
    backgroundColor: "#f5f5f5",
    padding: "0.25rem",
    borderRadius: "9999px",
    marginBottom: "0.75rem",
  } as CSSProperties,

  toggleButton: (isActive: boolean): CSSProperties => ({
    padding: "0.6rem 1.25rem",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    font: "inherit",
    fontSize: FS_MAIN,
    fontWeight: "400",
    backgroundColor: isActive ? HEADER_BG : "transparent",
    color: isActive ? "#fff" : "#001b41",
    transition: "all 0.2s",
  }),

  savingsText: {
    fontSize: FS_SMALL,
    lineHeight: 1.5,
    color: "#001b41",
    margin: 0,
    textAlign: "center",
  } as CSSProperties,

  select: {
    padding: "0.6rem 2rem 0.6rem 0.75rem",
    font: "inherit",
    fontSize: FS_MAIN,
    fontWeight: "400",
    color: "#001b41",
    backgroundColor: "#f3f4f6",
    border: "2px solid #e5e7eb",
    borderRadius: "8px",
    cursor: "pointer",
    outline: "none",
    minWidth: "160px",
    width: "100%",
    maxWidth: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  } as CSSProperties,

  plansGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.5rem",
    marginTop: "1.5rem",
  } as CSSProperties,

  planCard: (isHighlighted: boolean): CSSProperties => ({
    backgroundColor: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "visible",
  }),

  planBanner: {
    position: "absolute" as const,
    top: "-6px",
    right: "-6px",
    backgroundColor: BANNER_ORANGE,
    color: "#fff",
    fontSize: FS_SMALL,
    fontWeight: "400",
    padding: "0.35rem 0.75rem",
    borderRadius: "0 12px 0 8px",
    zIndex: 2,
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
  } as CSSProperties,

  planHeader: {
    backgroundColor: HEADER_BG,
    color: "#fff",
    padding: "1.25rem 1.5rem 1rem",
    borderRadius: "12px 12px 0 0",
  } as CSSProperties,

  planHeaderTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
    flexWrap: "wrap",
  } as CSSProperties,

  planTitle: {
    fontSize: FS_H3,
    fontWeight: "500",
    lineHeight: 1.3,
    margin: 0,
    color: "#fff",
    textAlign: "left",
  } as CSSProperties,

  planSubtitle: {
    fontSize: FS_MAIN,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.9)",
    marginTop: "0.5rem",
    marginBottom: 0,
    fontWeight: "400",
    textAlign: "center",
  } as CSSProperties,

  priceSection: {
    textAlign: "right",
    flexShrink: 0,
  } as CSSProperties,

  priceAmount: {
    fontSize: FS_H3,
    fontWeight: "500",
    lineHeight: 1.2,
    color: PRICE_YELLOW,
    marginBottom: "0.15rem",
    textAlign: "right",
  } as CSSProperties,

  pricePOA: {
    fontSize: FS_H4,
    fontWeight: "500",
    lineHeight: 1.3,
    color: PRICE_YELLOW,
    marginBottom: "0.15rem",
    textAlign: "right",
  } as CSSProperties,

  priceSubtext: {
    fontSize: FS_SMALL,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.9)",
    textAlign: "right",
  } as CSSProperties,

  planContent: {
    padding: "1.25rem 1.5rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  } as CSSProperties,

  guaranteeBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
    flexWrap: "wrap",
    backgroundColor: ADDON_BOX_BG,
    border: "1px solid #fef08a",
    borderRadius: "8px",
    padding: "0.6rem 0.75rem",
    marginBottom: "1rem",
  } as CSSProperties,

  guaranteeBannerText: {
    fontSize: FS_SMALL,
    fontWeight: "400",
    lineHeight: 1.5,
    color: "#374151",
    textAlign: "left",
    flex: 1,
    minWidth: 0,
  } as CSSProperties,

  planDescription: {
    fontSize: FS_MAIN,
    color: "#374151",
    lineHeight: "1.5",
    marginBottom: "1rem",
    fontWeight: "400",
    textAlign: "left",
  } as CSSProperties,

  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 1rem 0",
  } as CSSProperties,

  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    marginBottom: "0.5rem",
    fontSize: FS_MAIN,
    lineHeight: 1.5,
    color: "#374151",
    textAlign: "left",
  } as CSSProperties,

  checkIcon: {
    color: "#16a34a",
    flexShrink: 0,
    fontSize: "1em",
    lineHeight: 1.2,
  } as CSSProperties,

  addonDivider: {
    borderTop: "1px solid #e5e7eb",
    margin: "1rem 0 0.75rem 0",
    paddingTop: "0.75rem",
  } as CSSProperties,

  checkboxWrapper: {
    marginBottom: "0.5rem",
  } as CSSProperties,

  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
    cursor: "pointer",
    userSelect: "none",
  } as CSSProperties,

  checkbox: {
    width: "20px",
    height: "20px",
    minWidth: "20px",
    minHeight: "20px",
    marginRight: "0.75rem",
    cursor: "pointer",
    accentColor: HEADER_BG,
    flexShrink: 0,
  } as CSSProperties,

  checkboxText: {
    fontSize: FS_MAIN,
    lineHeight: 1.5,
    color: "#374151",
    flex: 1,
    textAlign: "left",
    fontWeight: "400",
  } as CSSProperties,

  addonPrice: {
    fontSize: FS_MAIN,
    lineHeight: 1.5,
    color: "#374151",
    marginLeft: "0.5rem",
    fontWeight: "400",
  } as CSSProperties,

  addonToolsItems: {
    marginLeft: "2rem",
    marginBottom: "0.75rem",
    fontSize: FS_SMALL,
    color: "#6b7280",
    lineHeight: 1.5,
    textAlign: "left",
  } as CSSProperties,

  addonDetailsBox: {
    marginTop: "0.75rem",
    padding: "1rem",
    backgroundColor: ADDON_BOX_BG,
    borderRadius: "8px",
    border: "1px solid #fef08a",
  } as CSSProperties,

  addonDetailsTitle: {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
    fontSize: FS_H6,
    fontWeight: "500",
    lineHeight: 1.5,
    color: "#374151",
    marginBottom: "0.15rem",
    textAlign: "left",
  } as CSSProperties,

  starIcon: {
    color: "#ea580c",
    fontSize: "1em",
  } as CSSProperties,

  addonDetailsRecommended: {
    fontSize: FS_SMALL,
    lineHeight: 1.5,
    color: "#6b7280",
    marginBottom: "0.35rem",
    textAlign: "left",
  } as CSSProperties,

  addonDetailsDescription: {
    fontSize: FS_SMALL,
    color: "#6b7280",
    marginBottom: "0.5rem",
    lineHeight: 1.5,
    textAlign: "left",
  } as CSSProperties,

  addonDetailsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  } as CSSProperties,

  addonDetailsItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    marginBottom: "0.35rem",
    fontSize: FS_SMALL,
    lineHeight: 1.5,
    color: "#374151",
    textAlign: "left",
  } as CSSProperties,

  addonDetails: {
    marginLeft: "2rem",
    marginBottom: "0.75rem",
    fontSize: FS_MAIN,
    lineHeight: 1.5,
    color: "#001b41",
    textAlign: "left",
  } as CSSProperties,

  addonDetailsLabel: {
    fontWeight: "400",
    color: "#001b41",
    marginBottom: "0.25rem",
    textAlign: "left",
  } as CSSProperties,

  ctaWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "auto",
    paddingTop: "1rem",
  } as CSSProperties,

  ctaButtonPrimary: {
    position: "relative",
    width: "100%",
    padding: "0.65rem 0.75rem",
    backgroundColor: HEADER_BG,
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    overflow: "hidden",
    fontSize: FS_MAIN,
    fontWeight: "400",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    textDecoration: "none",
  } as CSSProperties,

  ctaButtonSecondary: {
    position: "relative",
    width: "100%",
    padding: "0.65rem 0.75rem",
    backgroundColor: "#fff",
    color: "#374151",
    border: "2px solid #374151",
    borderRadius: "8px",
    overflow: "hidden",
    fontSize: FS_MAIN,
    fontWeight: "400",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    textDecoration: "none",
    transition: "color 0.2s",
  } as CSSProperties,

  guaranteeDisclaimer: {
    marginTop: "1rem",
    paddingTop: "0.75rem",
    borderTop: "1px solid #e5e7eb",
    fontSize: FS_SMALL,
    color: "#9ca3af",
    lineHeight: 1.5,
    fontStyle: "italic",
    textAlign: "left",
  } as CSSProperties,
};
