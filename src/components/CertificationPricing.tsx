import * as React from 'react';
import { certificationPricingStyles as styles } from './CertificationPricing.styles';

export type FeatureItem = string | { label: string; included: false };

export interface CertificationPlan {
  id: string;
  title: string;
  description: string;
  priceLabel: string;
  features: FeatureItem[];
  ctaLabel: string;
  ctaUrl: string;
  detailsUrl: string;
  detailsLabel: string;
  mostPopular?: boolean;
}

export interface CertificationPricingProps {
  /** Tab options: [label for first tab, label for second tab] */
  tabLabels?: [string, string];
  /** First tab label (used when tabLabels not provided, e.g. from Webflow) */
  tabLabel1?: string;
  /** Second tab label (used when tabLabels not provided) */
  tabLabel2?: string;
  /** Plans when first tab is selected */
  plansA?: CertificationPlan[];
  /** Plans when second tab is selected (defaults to plansA if not set) */
  plansB?: CertificationPlan[];
  /** Base URL for CTAs when relative */
  baseUrl?: string;
  /** Override URL for all "Get started" buttons (e.g. from Webflow) */
  getStartedUrl?: string;
  /** Override label for all "Get started" buttons (e.g. from Webflow) */
  getStartedLabel?: string;
}

const DEFAULT_PLANS_CE: CertificationPlan[] = [
  {
    id: 'self',
    title: 'Self-Certification',
    description: 'Self-paced certification with basic support, essential tools, and resources.',
    priceLabel: '£420 + VAT',
    features: [
      'Cyber Essentials certification',
      'Guided self-assessment portal',
      'Technical review before submission',
      'Direct access to a Cyber Essentials assessor',
      '£25,000 cyber insurance on certification',
    ],
    ctaLabel: 'Get started',
    ctaUrl: '#contact',
    detailsUrl: '/cyber-essentials-self-managed',
    detailsLabel: 'View full product details',
    mostPopular: false,
  },
  {
    id: 'little-help',
    title: 'Get a Little Help',
    description: 'Full support through the certification process with expert guidance.',
    priceLabel: '£720 + VAT',
    features: [
      'Cyber Essentials certification',
      'Cyber insurance up to £25,000',
      'Expert-led questionnaire completion',
      'Gap analysis & remediation advice',
      'Up to 2 hours consultancy support',
      'Assessor-led submission & response handling',
    ],
    ctaLabel: 'Get started',
    ctaUrl: '#contact',
    detailsUrl: '/cyber-essentials-assisted',
    detailsLabel: 'View full product details',
    mostPopular: true,
  },
  {
    id: 'lot-help',
    title: 'Get a Lot of Help',
    description: 'Comprehensive certification programme for complex organisations.',
    priceLabel: '£1,420 + VAT',
    features: [
      'Cyber Essentials certification',
      'Cyber insurance up to £25,000',
      'Full technical readiness assessment',
      'Policy, device & security configuration guidance',
      'Up to 1 full day of consultancy support',
      'Priority handling & fast-track submission',
    ],
    ctaLabel: 'Get started',
    ctaUrl: '#contact',
    detailsUrl: '/cyber-essentials-fully-managed',
    detailsLabel: 'View full product details',
    mostPopular: false,
  },
];

const DEFAULT_PLANS_CE_PLUS: CertificationPlan[] = [
  {
    id: 'self',
    title: 'Self-certification',
    description: 'Self-paced certification with basic support, essential tools, and resources.',
    priceLabel: '£2,055 + VAT',
    features: [
      'Cyber Essentials certification',
      'Cyber Essentials Plus certification',
      'Cyber insurance up to £25,000',
      'Pre-engagement consultation',
      'External vulnerability scan',
    ],
    ctaLabel: 'Get started',
    ctaUrl: '#contact',
    detailsUrl: '/cyber-essentials-plus-core',
    detailsLabel: 'View full product details',
    mostPopular: false,
  },
  {
    id: 'little-help',
    title: 'Get a Little Help',
    description: 'Full support through the certification process with expert guidance.',
    priceLabel: '£2,355 + VAT',
    features: [
      'Everything in Self-Managed, plus:',
      'Hands-on remediation support',
      'Clear guidance on failing controls',
      'Assessor-led preparation',
      'Up to 2 hours cybersecurity consultancy included',
    ],
    ctaLabel: 'Get started',
    ctaUrl: '#contact',
    detailsUrl: '/cyber-essentials-plus-assisted',
    detailsLabel: 'View full product details',
    mostPopular: true,
  },
  {
    id: 'lot-help',
    title: 'Get a Lot of Help',
    description: 'Comprehensive support for complex organisations.',
    priceLabel: '£3,055 + VAT',
    features: [
      'Everything in Assisted, plus:',
      'Priority handling throughout the process',
      'Full technical readiness review',
      'Support for complex networks or multiple sites',
      'Coordination with internal or external IT teams',
      'Up to 1 full day of consultancy included',
    ],
    ctaLabel: 'Get started',
    ctaUrl: '#contact',
    detailsUrl: '/cyber-essentials-plus-fully-managed',
    detailsLabel: 'View full product details',
    mostPopular: false,
  },
];

const CheckIcon = ({ cyan = false }: { cyan?: boolean }) => (
  <span style={cyan ? styles.checkIconCyan : styles.checkIcon} aria-hidden>✓</span>
);
const CrossIcon = () => (
  <span style={styles.crossIcon} aria-hidden>✕</span>
);

export const CertificationPricing = ({
  tabLabels: tabLabelsProp,
  tabLabel1 = 'Cyber Essentials',
  tabLabel2 = 'Cyber Essentials Plus',
  plansA = DEFAULT_PLANS_CE,
  plansB,
  baseUrl = '',
  getStartedUrl: getStartedUrlProp,
  getStartedLabel: getStartedLabelProp,
}: CertificationPricingProps) => {
  const tabLabels: [string, string] = tabLabelsProp ?? [tabLabel1, tabLabel2];
  const [activeTab, setActiveTab] = React.useState(0);
  const [inView, setInView] = React.useState(false);
  const [tabKey, setTabKey] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const plans = activeTab === 0 ? plansA : plansB ?? DEFAULT_PLANS_CE_PLUS;
  const useCyanChecks = activeTab === 1;

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);
    setTabKey((k) => k + 1);
  };

  const resolveUrl = (url: string) =>
    url.startsWith('http') ? url : `${baseUrl.replace(/\/$/, '')}${url.startsWith('/') ? '' : '/'}${url}`;

  return (
    <div
      ref={containerRef}
      style={styles.container}
      className={`cert-pricing-root ${inView ? 'in-view' : ''}`}
    >
      <style>{`
        @media (max-width: 900px) {
          .cert-pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .cert-pricing-cta:hover {
          opacity: 0.95;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 24px rgba(34, 211, 238, 0.35);
        }
        .cert-pricing-details-link:hover {
          color: #67e8f9 !important;
        }
        .cert-pricing-card-wrap {
          opacity: 0;
          transform: translateY(32px) scale(0.98);
        }
        .cert-pricing-root.in-view .cert-pricing-card-wrap {
          animation: cert-card-reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .cert-pricing-root.in-view .cert-pricing-card-wrap:nth-child(1) { animation-delay: 0.08s; }
        .cert-pricing-root.in-view .cert-pricing-card-wrap:nth-child(2) { animation-delay: 0.18s; }
        .cert-pricing-root.in-view .cert-pricing-card-wrap:nth-child(3) { animation-delay: 0.28s; }
        @keyframes cert-card-reveal {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .cert-pricing-toggle-wrap {
          opacity: 0;
          transform: translateY(16px);
        }
        .cert-pricing-root.in-view .cert-pricing-toggle-wrap {
          animation: cert-toggle-reveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.05s forwards;
        }
        @keyframes cert-toggle-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .cert-pricing-card-hover {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.35s ease,
                      border-color 0.2s ease;
        }
        .cert-pricing-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(34, 211, 238, 0.3);
        }
        .cert-pricing-tab-enter .cert-pricing-card-wrap {
          opacity: 0;
          transform: translateY(20px) scale(0.99);
        }
        .cert-pricing-tab-enter .cert-pricing-card-wrap:nth-child(1) { animation: cert-card-reveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0s forwards; }
        .cert-pricing-tab-enter .cert-pricing-card-wrap:nth-child(2) { animation: cert-card-reveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.06s forwards; }
        .cert-pricing-tab-enter .cert-pricing-card-wrap:nth-child(3) { animation: cert-card-reveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.12s forwards; }
      `}</style>

      <div
        style={styles.toggleRow}
        className={`cert-pricing-toggle-wrap ${inView ? 'in-view' : ''}`}
      >
        <div style={styles.toggleWrapper}>
          <button
            type="button"
            onClick={() => handleTabChange(0)}
            style={styles.toggleButton(activeTab === 0)}
            aria-pressed={activeTab === 0}
          >
            {tabLabels[0]}
          </button>
          <button
            type="button"
            onClick={() => handleTabChange(1)}
            style={styles.toggleButton(activeTab === 1)}
            aria-pressed={activeTab === 1}
          >
            {tabLabels[1]}
          </button>
        </div>
      </div>

      <div
        className={`cert-pricing-grid ${tabKey > 0 ? 'cert-pricing-tab-enter' : ''}`}
        style={styles.cardsGrid}
      >
        {plans.map((plan) => (
          <div
            key={`${plan.id}-${tabKey}`}
            className="cert-pricing-card-wrap cert-pricing-card-hover"
            style={styles.card(plan.mostPopular ?? false)}
          >
            {plan.mostPopular && (
              <div style={styles.badge}>Most popular</div>
            )}
            <h3 style={styles.cardTitle}>{plan.title}</h3>
            <p style={styles.cardDescription}>{plan.description}</p>
            <div style={styles.priceWrap}>
              <div style={styles.priceFrom}>from</div>
              <div style={styles.priceAmount}>{plan.priceLabel}</div>
            </div>
            <a
              href={"/contact"}
              className="cert-pricing-cta"
              style={styles.ctaButton}
            >
              {getStartedLabelProp?.trim() || plan.ctaLabel} →
            </a>
            <hr style={styles.divider} />
            <ul style={styles.featureList}>
              {plan.features.map((feature, idx) => {
                const isExcluded = typeof feature === 'object' && feature.included === false;
                const label = typeof feature === 'string' ? feature : feature.label;
                return (
                  <li
                    key={idx}
                    style={{
                      ...styles.featureItem,
                      ...(isExcluded ? styles.featureItemExcluded : {}),
                    }}
                  >
                    {isExcluded ? <CrossIcon /> : <CheckIcon cyan={useCyanChecks} />}
                    <span>{label}</span>
                  </li>
                );
              })}
            </ul>
            <a
              href={resolveUrl(plan.detailsUrl)}
              className="cert-pricing-details-link"
              style={styles.detailsLink}
            >
              {plan.detailsLabel} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
