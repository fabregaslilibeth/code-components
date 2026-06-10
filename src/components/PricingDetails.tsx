import * as React from 'react';
import { pricingDetailsStyles as styles } from './PricingDetails.styles';

const FEATURES = [
  'Includes Cyber Essentials certification',
  'External vulnerability scanning included',
  'Independent technical assessment and device sampling',
  'Retest included if required (scheme rules apply)',
  'Certificate valid for 12 months',
];

const TAB_KEYS = ['product', 'benefits', 'conditions'] as const;

const RELATED = [
  { title: 'Cyber Essentials Plus – Assisted', desc: 'Extra preparation support to reduce retest risk.', url: '/ce-plus-assisted', label: 'View Assisted CE Plus' },
  { title: 'Cyber Essentials Plus – Fully Managed', desc: 'Best for complex environments and multi-site organisations.', url: '/ce-plus-fully-managed', label: 'View Fully Managed CE Plus' },
  { title: 'Vulnerability Management', desc: 'Ongoing scanning beyond certification.', url: '/vulnerability-scanning', label: 'View Vulnerability Scanning' },
  { title: 'Managed Cyber Security', desc: 'Stay protected long after certification.', url: '/managed-security', label: 'View Managed Security' },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  { q: 'What is Cyber Essentials Plus?', a: 'Cyber Essentials Plus is a higher-level certification that includes independent technical testing to verify your security controls.' },
  { q: 'What does the assessment include?', a: 'Testing typically includes vulnerability scanning, device sampling, MFA validation, patch verification and malware protection checks.' },
  { q: 'Do we need Cyber Essentials first?', a: 'Yes. Cyber Essentials must be completed before CE Plus certification can be issued.' },
  { q: 'How long does Cyber Essentials Plus take?', a: 'Most organisations complete the process within 2–4 weeks depending on readiness and scheduling.' },
  { q: 'What happens if vulnerabilities are found?', a: "You'll be given a remediation window and may require a retest before certification is issued." },
];

const EMPLOYEE_OPTIONS = ['Select', '1-9', '10-49', '50-249', '250+'];

export function PricingDetails() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<(typeof TAB_KEYS)[number]>('product');
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [employees, setEmployees] = React.useState(EMPLOYEE_OPTIONS[0]);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) setInView(true); },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggleFaq = (index: number) => setOpenFaq((prev) => (prev === index ? null : index));

  return (
    <div
      ref={containerRef}
      style={styles.container}
      className={`pricing-details-root ${inView ? 'in-view' : ''}`}
    >
      <style>{`
        @media (max-width: 900px) {
          .pricing-details-layout { grid-template-columns: 1fr !important; }
          .pricing-details-sidebar { position: static !important; }
        }
        .pricing-details-buy-btn:hover {
          opacity: 0.95;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(34, 211, 238, 0.4);
        }
        .pricing-details-related-card:hover {
          border-color: rgba(34, 211, 238, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
        }
        .pricing-details-tab-btn:hover { color: #67e8f9 !important; }
        .pricing-details-block { opacity: 0; transform: translateY(24px); }
        .pricing-details-root.in-view .pricing-details-block { animation: pd-reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .pricing-details-root.in-view .pricing-details-block:nth-child(1) { animation-delay: 0.05s; }
        .pricing-details-root.in-view .pricing-details-block:nth-child(2) { animation-delay: 0.12s; }
        .pricing-details-root.in-view .pricing-details-block:nth-child(3) { animation-delay: 0.2s; }
        .pricing-details-root.in-view .pricing-details-block:nth-child(4) { animation-delay: 0.28s; }
        .pricing-details-root.in-view .pricing-details-block:nth-child(5) { animation-delay: 0.36s; }
        .pricing-details-root.in-view .pricing-details-block:nth-child(6) { animation-delay: 0.44s; }
        .pricing-details-root.in-view .pricing-details-block:nth-child(7) { animation-delay: 0.52s; }
        @keyframes pd-reveal { to { opacity: 1; transform: translateY(0); } }
        .pricing-details-feature-li { opacity: 0; transform: translateX(-12px); }
        .pricing-details-root.in-view .pricing-details-card .pricing-details-feature-li { animation: pd-feature 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .pricing-details-root.in-view .pricing-details-card .pricing-details-feature-li:nth-child(1) { animation-delay: 0.25s; }
        .pricing-details-root.in-view .pricing-details-card .pricing-details-feature-li:nth-child(2) { animation-delay: 0.32s; }
        .pricing-details-root.in-view .pricing-details-card .pricing-details-feature-li:nth-child(3) { animation-delay: 0.39s; }
        .pricing-details-root.in-view .pricing-details-card .pricing-details-feature-li:nth-child(4) { animation-delay: 0.46s; }
        .pricing-details-root.in-view .pricing-details-card .pricing-details-feature-li:nth-child(5) { animation-delay: 0.53s; }
        @keyframes pd-feature { to { opacity: 1; transform: translateX(0); } }
        .pricing-details-tab-panel { opacity: 0; transform: translateY(8px); }
        .pricing-details-tab-panel.active { animation: pd-tab-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @keyframes pd-tab-in { to { opacity: 1; transform: translateY(0); } }
        .pricing-details-related-card { opacity: 0; transform: translateY(16px); }
        .pricing-details-root.in-view .pricing-details-related-card { animation: pd-reveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .pricing-details-root.in-view .pricing-details-related-card:nth-child(1) { animation-delay: 0.55s; }
        .pricing-details-root.in-view .pricing-details-related-card:nth-child(2) { animation-delay: 0.62s; }
        .pricing-details-root.in-view .pricing-details-related-card:nth-child(3) { animation-delay: 0.69s; }
        .pricing-details-root.in-view .pricing-details-related-card:nth-child(4) { animation-delay: 0.76s; }
        .pricing-details-faq-q:hover { color: #67e8f9 !important; }
        .pricing-details-faq-chevron { transition: transform 0.3s ease; }
        .pricing-details-faq-item.open .pricing-details-faq-chevron { transform: rotate(180deg); }
      `}</style>

      <div style={styles.layout} className="pricing-details-layout">
        <div style={styles.main}>
          <div className="pricing-details-block">
            <p style={styles.eyebrow}>Independent Cyber Security Testing</p>
            <h1 style={styles.title}>Cyber Essentials Plus – Core</h1>
            <p style={styles.subtitle}>Cyber Essentials Plus certification with independent technical verification</p>
          </div>

          <div style={styles.card} className="pricing-details-block pricing-details-card">
            <div style={styles.ratingRow}>
              <span style={styles.stars} aria-hidden>★★★★★</span>
              <span style={styles.ratingLabel}>Higher-Assurance Certification</span>
            </div>
            <div style={styles.priceFrom}>From</div>
            <div style={styles.priceAmount}>£2,055.00 + VAT</div>
            <ul style={styles.featureList}>
              {FEATURES.map((text, i) => (
                <li key={i} style={styles.featureItem} className="pricing-details-feature-li">
                  <span style={styles.checkIcon} aria-hidden>✔</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div style={styles.warningBox}>
              <span style={styles.warningIcon} aria-hidden>⚠</span>
              <div>
                <div style={styles.warningTitle}>Important</div>
                <p style={styles.warningText}>
                  Cyber Essentials Plus includes independent technical testing. If issues are identified, remediation will be required before certification can be issued.
                </p>
              </div>
            </div>
          </div>

          <div className="pricing-details-block">
            <h2 style={styles.sectionTitle}>More information</h2>
            <div style={styles.tabRow}>
              {TAB_KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  style={styles.tabButton(activeTab === key)}
                  className="pricing-details-tab-btn"
                  onClick={() => setActiveTab(key)}
                  aria-pressed={activeTab === key}
                >
                  {key === 'product' && 'Product Description'}
                  {key === 'benefits' && 'Benefits'}
                  {key === 'conditions' && 'Conditions'}
                </button>
              ))}
            </div>
            <div style={styles.card}>
              <div
                key={activeTab}
                style={styles.tabPanel}
                className="pricing-details-tab-panel active"
                role="tabpanel"
              >
                {activeTab === 'product' && (
                  <>
                    <p style={styles.tabPanelHeading}>Cyber Essentials Plus – higher assurance, real verification</p>
                    <p>
                      Cyber Essentials Plus is the advanced version of Cyber Essentials. Unlike standard certification, Plus includes independent technical testing to confirm your cybersecurity controls are properly implemented across your organisation.
                    </p>
                    <p style={styles.tabPanelHeading}>Testing typically includes:</p>
                    <ul style={styles.tabPanelList}>
                      <li>External vulnerability scanning</li>
                      <li>Device sampling and configuration checks</li>
                      <li>MFA validation</li>
                      <li>Patch management verification</li>
                      <li>Malware protection checks</li>
                      <li>User access and admin control review</li>
                    </ul>
                    <p>This certification is ideal for organisations working in regulated sectors or supply chains where higher security assurance is expected.</p>
                    <p style={styles.tabPanelHeading}>What’s Included</p>
                    <ul style={styles.tabPanelList}>
                      <li>✔ Cyber Essentials certification support</li>
                      <li>✔ Cyber Essentials Plus technical assessment</li>
                      <li>✔ External vulnerability scan</li>
                      <li>✔ Independent technical testing</li>
                      <li>✔ Retest included if required</li>
                      <li>✔ Certification issued on success</li>
                      <li>✔ Certificate valid for 12 months</li>
                    </ul>
                    <p style={styles.tabPanelHeading}>Who This Is Best For</p>
                    <p>This package is ideal if:</p>
                    <ul style={styles.tabPanelList}>
                      <li>Your customers require CE Plus</li>
                      <li>You work in regulated industries</li>
                      <li>You handle sensitive client data</li>
                      <li>You want independent verification for compliance</li>
                    </ul>
                  </>
                )}
                {activeTab === 'benefits' && (
                  <>
                    <p style={styles.tabPanelHeading}>Why Cyber Essentials Plus matters</p>
                    <div style={{ marginTop: '0.75rem' }}>
                      <div style={styles.benefitItem}>
                        <span style={styles.benefitEmoji}>🔍</span>
                        <div>
                          <div style={styles.benefitTitle}>Independent testing builds credibility</div>
                          <p style={styles.benefitDesc}>This is proof your security works, not just that it’s documented.</p>
                        </div>
                      </div>
                      <div style={styles.benefitItem}>
                        <span style={styles.benefitEmoji}>🏛</span>
                        <div>
                          <div style={styles.benefitTitle}>Required for certain contracts</div>
                          <p style={styles.benefitDesc}>Many high-security procurement frameworks require Plus.</p>
                        </div>
                      </div>
                      <div style={styles.benefitItem}>
                        <span style={styles.benefitEmoji}>📈</span>
                        <div>
                          <div style={styles.benefitTitle}>Stronger competitive positioning</div>
                          <p style={styles.benefitDesc}>CE Plus gives customers confidence and reduces objections.</p>
                        </div>
                      </div>
                      <div style={styles.benefitItem}>
                        <span style={styles.benefitEmoji}>🛡</span>
                        <div>
                          <div style={styles.benefitTitle}>Improved cyber resilience</div>
                          <p style={styles.benefitDesc}>The testing process identifies real weaknesses before attackers do.</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === 'conditions' && (
                  <>
                    <p style={styles.tabPanelHeading}>Important Information Before Purchase</p>
                    <ul style={styles.conditionsList}>
                      <li>Cyber Essentials must be achieved before Plus certification is issued.</li>
                      <li>Independent testing includes device sampling based on scheme requirements.</li>
                      <li>If vulnerabilities are found, remediation must be completed before certification.</li>
                      <li>Retest is included where applicable under scheme rules.</li>
                      <li>Certification is valid for 12 months.</li>
                      <li>Assessment scheduling depends on availability.</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="pricing-details-block">
            <h2 style={styles.relatedTitle}>You may also be interested in</h2>
            <div style={styles.relatedGrid}>
              {RELATED.map((item, i) => (
                <a key={i} href={item.url} style={styles.relatedCard} className="pricing-details-related-card">
                  <div style={styles.relatedCardTitle}>{item.title}</div>
                  <div style={styles.relatedCardDesc}>{item.desc}</div>
                  <span style={styles.relatedCardLink}>👉 {item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pricing-details-block">
            <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} style={styles.faqItem} className={`pricing-details-faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button
                    type="button"
                    style={styles.faqQuestion}
                    className="pricing-details-faq-q"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openFaq === i}
                  >
                    {item.q}
                    <span className="pricing-details-faq-chevron" aria-hidden style={{ fontSize: '0.8rem' }}>▼</span>
                  </button>
                  <div
                    className="pricing-details-faq-answer-wrap"
                    style={{ ...styles.faqAnswerWrap, maxHeight: openFaq === i ? '200px' : '0', opacity: openFaq === i ? 1 : 0 }}
                  >
                    <p style={{ ...styles.faqAnswer, margin: 0 }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside style={styles.sidebar} className="pricing-details-sidebar">
          <div style={styles.sidebarCard} className="pricing-details-block">
            <label style={styles.label} htmlFor="pd-employees"># Of Employees</label>
            <select
              id="pd-employees"
              style={styles.select}
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              aria-label="Number of employees"
            >
              {EMPLOYEE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="pricing-details-block">
            <a href="/contact" style={styles.buyButton} className="pricing-details-buy-btn">Buy now</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
