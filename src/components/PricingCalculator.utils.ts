import { BASE_PRICING, ADDON_PRICING } from './PricingCalculator.data';

export type TierKey = 'tier1' | 'tier2' | 'tier3' | 'tier4';

// Get employee tier from count
export const getEmployeeTier = (employeeCount: number): TierKey => {
  if (employeeCount >= 1 && employeeCount <= 9) return 'tier1';
  if (employeeCount >= 10 && employeeCount <= 20) return 'tier2';
  if (employeeCount >= 21 && employeeCount <= 49) return 'tier3';
  return 'tier4'; // 50+
};

// Get base price for a plan
export const getBasePrice = (
  planId: string,
  tier: TierKey,
  isAnnual: boolean
): number | null => {
  const planPricing = BASE_PRICING[planId as keyof typeof BASE_PRICING];
  if (!planPricing) return null;
  
  const tierPricing = planPricing[tier];
  if (!tierPricing) return null; // POA
  
  return isAnnual ? tierPricing.annual : tierPricing.monthly;
};

// Get addon price
export const getAddonPrice = (
  feature: string,
  planId: string,
  tier: TierKey,
  isAnnual: boolean
): number | null => {
  const addonPricing = ADDON_PRICING[feature as keyof typeof ADDON_PRICING];
  if (!addonPricing) return 0;
  
  // Premium has plan-specific pricing
  if (feature === "Premium") {
    const planPricing = (addonPricing as any)[planId];
    if (!planPricing) return 0;
    
    const tierPricing = planPricing[tier];
    if (!tierPricing) return null; // POA
    
    return isAnnual ? tierPricing.annual : tierPricing.monthly;
  }
  
  // Other addons have shared pricing
  const tierPricing = (addonPricing as any)[tier];
  if (!tierPricing) return null; // POA
  
  return isAnnual ? tierPricing.annual : tierPricing.monthly;
};

// Format price for display
export const formatPrice = (
  price: number,
  currency: string = "£"
): string => {
  const formatted = price.toLocaleString(undefined, {
    minimumFractionDigits: price % 1 !== 0 ? 1 : 0,
    maximumFractionDigits: 1,
  });
  return `${currency}${formatted}`;
};
