import { CSSProperties } from 'react';

const HEADER_BG = "#032447";
const PRICE_YELLOW = "#facc15";
const ADDON_BOX_BG = "#fefce8";
const BANNER_ORANGE = "#ea580c";

export const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1.5rem 1rem",
    fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif",
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
    fontSize: "1rem",
    fontWeight: "600",
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
    fontSize: "0.875rem",
    fontWeight: "500",
    backgroundColor: isActive ? HEADER_BG : "transparent",
    color: isActive ? "#fff" : "#001b41",
    transition: "all 0.2s",
  }),

  savingsText: {
    fontSize: "0.875rem",
    color: "#001b41",
    margin: 0,
    textAlign: "center",
  } as CSSProperties,

  select: {
    padding: "0.6rem 2rem 0.6rem 0.75rem",
    fontSize: "0.875rem",
    fontWeight: "500",
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
    fontSize: "0.75rem",
    fontWeight: "600",
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
    fontSize: "1.35rem",
    fontWeight: "700",
    margin: 0,
    color: "#fff",
    textAlign: "left",
  } as CSSProperties,

  planSubtitle: {
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.9)",
    marginTop: "0.5rem",
    marginBottom: 0,
    fontWeight: "500",
    textAlign: "center",
  } as CSSProperties,

  priceSection: {
    textAlign: "right",
    flexShrink: 0,
  } as CSSProperties,

  priceAmount: {
    fontSize: "1.75rem",
    fontWeight: "700",
    color: PRICE_YELLOW,
    marginBottom: "0.15rem",
    textAlign: "right",
  } as CSSProperties,

  pricePOA: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: PRICE_YELLOW,
    marginBottom: "0.15rem",
    textAlign: "right",
  } as CSSProperties,

  priceSubtext: {
    fontSize: "0.8rem",
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
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#374151",
    textAlign: "left",
    flex: 1,
    minWidth: 0,
  } as CSSProperties,

  planDescription: {
    fontSize: "0.9rem",
    color: "#374151",
    lineHeight: "1.5",
    marginBottom: "1rem",
    fontWeight: "600",
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
    fontSize: "0.875rem",
    color: "#374151",
    textAlign: "left",
  } as CSSProperties,

  checkIcon: {
    color: "#16a34a",
    flexShrink: 0,
    fontSize: "1rem",
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
    fontSize: "0.875rem",
    color: "#374151",
    flex: 1,
    textAlign: "left",
    fontWeight: "600",
  } as CSSProperties,

  addonPrice: {
    fontSize: "0.875rem",
    color: "#374151",
    marginLeft: "0.5rem",
    fontWeight: "600",
  } as CSSProperties,

  addonToolsItems: {
    marginLeft: "2rem",
    marginBottom: "0.75rem",
    fontSize: "0.8rem",
    color: "#6b7280",
    lineHeight: 1.4,
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
    fontSize: "0.95rem",
    fontWeight: "700",
    color: "#374151",
    marginBottom: "0.15rem",
    textAlign: "left",
  } as CSSProperties,

  starIcon: {
    color: "#ea580c",
    fontSize: "1rem",
  } as CSSProperties,

  addonDetailsRecommended: {
    fontSize: "0.8rem",
    color: "#6b7280",
    marginBottom: "0.35rem",
    textAlign: "left",
  } as CSSProperties,

  addonDetailsDescription: {
    fontSize: "0.8rem",
    color: "#6b7280",
    marginBottom: "0.5rem",
    lineHeight: 1.4,
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
    fontSize: "0.8rem",
    color: "#374151",
    textAlign: "left",
  } as CSSProperties,

  addonDetails: {
    marginLeft: "2rem",
    marginBottom: "0.75rem",
    fontSize: "0.875rem",
    color: "#001b41",
    textAlign: "left",
  } as CSSProperties,

  addonDetailsLabel: {
    fontWeight: "600",
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
    width: "100%",
    padding: "0.65rem 0.75rem",
    backgroundColor: HEADER_BG,
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    textDecoration: "none",
    transition: "background-color 0.2s",
  } as CSSProperties,

  ctaButtonSecondary: {
    width: "100%",
    padding: "0.65rem 0.75rem",
    backgroundColor: "#fff",
    color: "#374151",
    border: "2px solid #374151",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    textDecoration: "none",
    transition: "background-color 0.2s, color 0.2s",
  } as CSSProperties,

  guaranteeDisclaimer: {
    marginTop: "1rem",
    paddingTop: "0.75rem",
    borderTop: "1px solid #e5e7eb",
    fontSize: "0.7rem",
    color: "#9ca3af",
    lineHeight: 1.4,
    fontStyle: "italic",
    textAlign: "left",
  } as CSSProperties,
};
