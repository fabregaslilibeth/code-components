// Plans data
export const DEFAULT_PLANS = [
  {
    id: "cyber-essentials",
    title: "Cyber Essentials",
    subtitle: "Essential protection. Fast certification.",
    description: "Ideal for SMEs needing compliance and contract readiness",
    basePriceAnnual: 0,
    basePriceMonthly: 0,
    pricePerEmployeeAnnual: 0,
    pricePerEmployeeMonthly: 0,
    includedFeatures: [
      "Get Cyber Essentials certified quickly",
      "Prove your business meets UK security standards",
      "Reduce risk of common cyber attacks",
      "Meet supplier and tender requirements",
    ],
    addonFeatures: ["Premium", "Certification Tools"],
    highlighted: false,
    bannerLabel: undefined as string | undefined,
    primaryButtonLabel: "Get certified fast",
    secondaryButtonLabel: "Speak to an expert",
    secondaryButtonIcon: "phone" as const,
    buttonLink: "#",
  },
  {
    id: "cyber-essentials-plus",
    title: "Cyber Essentials Plus",
    subtitle: "Independent audit. Maximum trust.",
    description: "Best for larger contracts, regulated industries, and stronger assurance",
    basePriceAnnual: 0,
    basePriceMonthly: 0,
    pricePerEmployeeAnnual: 0,
    pricePerEmployeeMonthly: 0,
    includedFeatures: [
      "Includes everything in Cyber Essentials",
      "Adds independent technical verification",
      "Stronger credibility with enterprise buyers",
      "Higher success rate in public sector tenders",
    ],
    addonFeatures: ["Premium", "Certification Tools"],
    highlighted: true,
    bannerLabel: "Most popular for contracts",
    primaryButtonLabel: "Book a Plus readiness call",
    secondaryButtonLabel: "Get pricing & timescales",
    secondaryButtonIcon: "email" as const,
    buttonLink: "#",
  },
];

// Employee tier options for dropdown
export const EMPLOYEE_TIERS = [
  { label: "1-9 employees", value: 5 },
  { label: "10-20 employees", value: 15 },
  { label: "21-49 employees", value: 35 },
  { label: "50+ employees", value: 50 },
];

// Addon descriptions (What's Included box content + Certification Tools)
export const ADDON_DESCRIPTIONS = {
  "Certification Tools": {
    label: "Certification tools",
    items: ["Training", "Vulnerability scanning", "Phishing simulator", "Threat dashboard", "Asset tracker"],
  },
  Premium: {
    label: "What's included:",
    itemsByPlan: {
      "cyber-essentials": {
        title: "Done-for-you certification support",
        recommended: true,
        description: "For busy directors who want it handled properly.",
        items: [
          "Full cyber readiness review.",
          "Fix guidance before submission",
          "Priority expert support",
          "Peace of mind you'll pass first time",
        ],
      },
      "cyber-essentials-plus": {
        title: "Audit-ready done-for-you package",
        recommended: false,
        description: "Pre-test if your audit will confirm compliance before submission.",
        items: [
          "Pre-audit vulnerability review",
          "Device and patch compliance checks",
          "Priority remediation support",
          "Expert-led preparation throughout",
        ],
      },
    },
  },
};

// Base pricing by tier
export const BASE_PRICING = {
  "cyber-essentials": {
    tier1: { annual: 500, monthly: 50 },
    tier2: { annual: 575, monthly: 57.5 },
    tier3: { annual: 575, monthly: 57.5 },
    tier4: null, // POA
  },
  "cyber-essentials-plus": {
    tier1: { annual: 1750, monthly: 175 },
    tier2: { annual: 2000, monthly: 200 },
    tier3: { annual: 2000, monthly: 200 },
    tier4: null, // POA
  },
};

// Addon pricing by tier and plan
export const ADDON_PRICING = {
  "Certification Tools": {
    tier1: { annual: 125, monthly: 12.5 },
    tier2: { annual: 595, monthly: 59.5 },
    tier3: { annual: 995, monthly: 99.5 },
    tier4: null,
  },
  Premium: {
    "cyber-essentials": {
      tier1: { annual: 300, monthly: 30 },
      tier2: { annual: 300, monthly: 30 },
      tier3: { annual: 300, monthly: 30 },
      tier4: null,
    },
    "cyber-essentials-plus": {
      tier1: { annual: 300, monthly: 30 },
      tier2: { annual: 400, monthly: 40 },
      tier3: { annual: 400, monthly: 40 },
      tier4: null,
    },
  },
};
