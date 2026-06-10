import * as React from "react";
import { DEFAULT_PLANS, EMPLOYEE_TIERS, ADDON_DESCRIPTIONS } from "./PricingCalculator.data";
import { getEmployeeTier, getBasePrice, getAddonPrice, formatPrice } from "./PricingCalculator.utils";
import { styles } from "./PricingCalculator.styles";

interface PricingPlan {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  basePriceAnnual: number;
  basePriceMonthly: number;
  pricePerEmployeeAnnual: number;
  pricePerEmployeeMonthly: number;
  includedFeatures: string[];
  addonFeatures: string[];
  addonPricesAnnual?: { [key: string]: number | undefined };
  addonPricesMonthly?: { [key: string]: number | undefined };
  highlighted?: boolean;
  bannerLabel?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  secondaryButtonIcon?: "phone" | "email";
  buttonLink?: string;
}

interface PricingCalculatorProps {
  currency?: string;
  savingsPercent?: number;
  cyberEssentialsLink?: string;
  cyberEssentialsPlusLink?: string;
}

const CheckIcon = () => (
  <span style={styles.checkIcon} aria-hidden>✓</span>
);
const StarIcon = () => (
  <span style={styles.starIcon} aria-hidden>★</span>
);
const PhoneIcon = () => (
  <span style={{ fontSize: "1rem" }} aria-hidden>📞</span>
);
const EmailIcon = () => (
  <span style={{ fontSize: "1rem" }} aria-hidden>✉</span>
);

export const PricingCalculator = ({
  currency = "£",
  savingsPercent = 20,
  cyberEssentialsLink = "/contact",
  cyberEssentialsPlusLink = "/contact",
}: PricingCalculatorProps) => {
  const buttonLinks: Record<string, string> = {
    "cyber-essentials": cyberEssentialsLink,
    "cyber-essentials-plus": cyberEssentialsPlusLink,
  };
  const [paymentFrequency, setPaymentFrequency] = React.useState("annual");
  const [employeeCount, setEmployeeCount] = React.useState(5);
  const [checkedFeatures, setCheckedFeatures] = React.useState<Record<string, Record<string, boolean>>>({});

  const plansList = DEFAULT_PLANS;

  React.useEffect(() => {
    const initialChecked: Record<string, Record<string, boolean>> = {};
    plansList.forEach((plan) => {
      initialChecked[plan.id] = {};
      plan.addonFeatures?.forEach((feature) => {
        initialChecked[plan.id][feature] = false;
      });
    });
    setCheckedFeatures(initialChecked);
  }, [plansList]);

  const calculatePlanPrice = (plan: PricingPlan): number | string => {
    const tier = getEmployeeTier(employeeCount);
    const isAnnual = paymentFrequency === "annual";

    if (tier === "tier4") {
      return "POA";
    }

    const planChecked = checkedFeatures[plan.id] || {};
    let basePrice = getBasePrice(plan.id, tier, isAnnual);

    if (basePrice === null) {
      return "POA";
    }

    plan.addonFeatures?.forEach((feature) => {
      if (planChecked[feature]) {
        const addonPrice = getAddonPrice(feature, plan.id, tier, isAnnual);
        if (addonPrice !== null) {
          basePrice! += addonPrice;
        }
      }
    });

    return basePrice;
  };

  const handleCheckboxChange = (planId: string, feature: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const currentValue = checkedFeatures[planId]?.[feature] ?? false;
    setCheckedFeatures((prev) => ({
      ...prev,
      [planId]: {
        ...prev[planId],
        [feature]: !currentValue,
      },
    }));
  };

  const getDisplayAddonPrice = (feature: string, planId: string): number | null => {
    const tier = getEmployeeTier(employeeCount);
    const isAnnual = paymentFrequency === "annual";
    return getAddonPrice(feature, planId, tier, isAnnual);
  };

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 1024px) {
          .pricing-plans-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .pricing-header-top-row {
            justify-content: center !important;
          }
          .pricing-plan-title {
            width: 100%;
            text-align: center !important;
          }
          .pricing-price-section {
            width: 100%;
            text-align: center !important;
          }
          .pricing-price-section .pricing-price-amount,
          .pricing-price-section .pricing-price-poa,
          .pricing-price-section .pricing-price-subtext {
            text-align: center !important;
          }
          .pricing-cta-wrapper {
            width: 100%;
            max-width: 100%;
          }
          .pricing-cta-primary,
          .pricing-cta-secondary {
            min-height: 48px;
            padding: 0.75rem 1rem !important;
            width: 100% !important;
            max-width: 100%;
            -webkit-tap-highlight-color: transparent;
            box-sizing: border-box;
          }
        }
      `}</style>
      <div style={styles.controlsWrapper}>
        <div style={styles.controlSection}>
          <h2 style={styles.controlHeading}>How would you like to pay?</h2>
          <div style={styles.toggleWrapper}>
            <button
              onClick={() => setPaymentFrequency("annual")}
              style={styles.toggleButton(paymentFrequency === "annual")}
            >
              Annually
            </button>
            <button
              onClick={() => setPaymentFrequency("monthly")}
              style={styles.toggleButton(paymentFrequency === "monthly")}
            >
              Monthly
            </button>
          </div>
          <p style={styles.savingsText}>
            Save <strong style={{ color: "#032447" }}>{savingsPercent}%</strong> on annual plans
          </p>
        </div>
        <div style={styles.controlSection}>
          <h2 style={styles.controlHeading}>How many employees do you have?</h2>
          <select
            value={employeeCount}
            onChange={(e) => setEmployeeCount(Number(e.target.value))}
            style={styles.select}
          >
            {EMPLOYEE_TIERS.map((tier) => (
              <option key={tier.value} value={tier.value}>
                {tier.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="pricing-plans-grid" style={styles.plansGrid}>
        {plansList.map((plan) => {
          const price = calculatePlanPrice(plan);
          const isHighlighted = plan.highlighted ?? false;
          const addonDescriptions = ADDON_DESCRIPTIONS as Record<string, { label?: string; items?: string[]; itemsByPlan?: Record<string, unknown> }>;

          return (
            <div key={plan.id} style={styles.planCard(isHighlighted)}>
              {plan.bannerLabel && (
                <div style={styles.planBanner}>{plan.bannerLabel}</div>
              )}
              <div style={styles.planHeader}>
                <div className="pricing-header-top-row" style={styles.planHeaderTopRow}>
                  <h3 className="pricing-plan-title" style={styles.planTitle}>{plan.title}</h3>
                  <div className="pricing-price-section" style={styles.priceSection}>
                    {price === "POA" ? (
                      <div className="pricing-price-poa" style={styles.pricePOA}>POA</div>
                    ) : (
                      <>
                        <div className="pricing-price-amount" style={styles.priceAmount}>
                          {formatPrice(price as number, currency)}
                        </div>
                        <div className="pricing-price-subtext" style={styles.priceSubtext}>
                          + VAT / {paymentFrequency === "annual" ? "year" : "month"}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {plan.subtitle && (
                  <p style={styles.planSubtitle}>{plan.subtitle}</p>
                )}
              </div>

              <div style={styles.planContent}>
                {/* Yellow guarantee banner */}
                <div style={styles.guaranteeBanner}>
                  <span style={styles.guaranteeBannerText}>
                    100% done-for-you service – Money-back guarantee
                  </span>
                </div>

                <p style={styles.planDescription}>{plan.description}</p>

                <ul style={styles.featureList}>
                  {plan.includedFeatures.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div style={styles.addonDivider} />
                <div style={styles.checkboxWrapper}>
                  {plan.addonFeatures.map((feature, idx) => {
                    const isChecked = checkedFeatures[plan.id]?.[feature] ?? false;
                    const featurePrice = getDisplayAddonPrice(feature, plan.id);
                    const tier = getEmployeeTier(employeeCount);
                    const showPOA = tier === "tier4";
                    const addonDesc = addonDescriptions[feature];
                    const displayLabel = addonDesc?.label ?? feature;
                    const premiumBoxContent = feature === "Premium"
                      ? (addonDescriptions.Premium?.itemsByPlan as Record<string, { title?: string; recommended?: boolean; description?: string; items?: string[] }>)?.[plan.id]
                      : null;
                    const certToolsItems = feature === "Certification Tools" && addonDesc && "items" in addonDesc
                      ? (addonDesc as { items: string[] }).items
                      : null;
                    return (
                      <React.Fragment key={`addon-${idx}`}>
                        <label
                          htmlFor={`checkbox-${plan.id}-${feature}-addon-${idx}`}
                          style={{
                            ...styles.checkboxLabel,
                            ...(feature === "Certification Tools" ? { marginTop: "1rem" } : {}),
                          }}
                        >
                          <input
                            id={`checkbox-${plan.id}-${feature}-addon-${idx}`}
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => handleCheckboxChange(plan.id, feature, e)}
                            style={styles.checkbox}
                          />
                          <span style={styles.checkboxText}>{displayLabel}</span>
                          {showPOA ? (
                            <span style={styles.addonPrice}>POA</span>
                          ) : (
                            featurePrice !== null &&
                            featurePrice > 0 && (
                              <span style={styles.addonPrice}>
                                +{formatPrice(featurePrice, currency)}
                              </span>
                            )
                          )}
                        </label>
                        {feature === "Certification Tools" && certToolsItems && (
                          <div style={styles.addonToolsItems}>
                            {certToolsItems.join(", ")}
                          </div>
                        )}
                        {feature === "Premium" && premiumBoxContent && (
                          <div style={styles.addonDetailsBox}>
                            <div style={styles.addonDetailsTitle}>
                              <StarIcon />
                              {premiumBoxContent.title}
                            </div>
                            {premiumBoxContent.recommended && (
                              <div style={styles.addonDetailsRecommended}>
                                (Recommended)
                              </div>
                            )}
                            {premiumBoxContent.description && (
                              <p style={styles.addonDetailsDescription}>
                                {premiumBoxContent.description}
                              </p>
                            )}
                            <ul style={styles.addonDetailsList}>
                              {premiumBoxContent.items?.map((item: string, i: number) => (
                                <li key={i} style={styles.addonDetailsItem}>
                                  <CheckIcon />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                <div className="pricing-cta-wrapper" style={styles.ctaWrapper}>
                  <a
                    className="pricing-cta-primary"
                    href={buttonLinks[plan.id] || plan.buttonLink || "/contact"}
                    style={styles.ctaButtonPrimary}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0a325a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#032447";
                    }}
                  >
                    <CheckIcon />
                    {plan.primaryButtonLabel ?? "Get Certified Fast"}
                  </a>
                  <a
                    className="pricing-cta-secondary"
                    href={`${buttonLinks[plan.id] || plan.buttonLink || "/contact"}?inquiry=true`}
                    style={styles.ctaButtonSecondary}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f3f4f6";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#fff";
                    }}
                  >
                    {plan.secondaryButtonIcon === "email" ? (
                      <EmailIcon />
                    ) : (
                      <PhoneIcon />
                    )}
                    {plan.secondaryButtonLabel ?? "Speak to an Expert"}
                  </a>
                </div>

                <p style={styles.guaranteeDisclaimer}>
                  *Money-back guarantee applies only if you follow all our guidance and recommendations, including but not limited to implementing suggested security measures, configuring your systems correctly, and completing any required actions for certification readiness. Terms and conditions apply.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
