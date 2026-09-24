import * as React from 'react';
import { caseStudySpotlightCss } from './CaseStudySpotlight.styles';
import { LucideIcon } from '../LucideIcon';

export type CaseStudySpotlightTheme = 'dark' | 'light';

export interface CaseStudyCase {
  image?: string;
  imageAlt?: string;
  tag?: string;
  client?: string;
  title?: string;
  excerpt?: string;
  statValue?: string;
  statLabel?: string;
  href?: string;
}

export interface CaseStudySpotlightProps {
  theme?: CaseStudySpotlightTheme;
  ctaLabel?: string;
  cases?: CaseStudyCase[];
}

const ArrowLeft = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const ArrowRight = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const DEFAULT_CASES: CaseStudyCase[] = [
  {
    image: 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/69e8a2c24734fc59acb6bf33_case-study3.avif',
    imageAlt: 'Healthcare clinician in a treatment room',
    tag: 'Cloud Telephony',
    client: 'NHS',
    title: 'Five Times More Call Capacity for Frontline Clinical Teams',
    excerpt: '"Intouch provided a cloud phone system with five times more call capacity, real-time queue updates and separate lines for outbound clinical calls."',
    statValue: '5×',
    statLabel: 'More call capacity',
  },
  {
    image: 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/69e8a2c23b6623550b879b52_case-study2.avif',
    imageAlt: 'Two colleagues in a modern office setting',
    tag: 'VoIP Platform',
    client: 'Aristone',
    title: 'Local Luton Numbers and Unlimited Support Under One Licence',
    excerpt: '"Intouch Communications quickly set up Aristone on our scalable Hosted Communicator VoIP platform, providing local Luton numbers, call recording, remote apps and unlimited support under one simple license."',
    statValue: '1',
    statLabel: 'Simple licence, unlimited support',
  },
  {
    image: 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/69e8a18794c57a5699024c62_case-study1.avif',
    imageAlt: 'Exterior of The Regis School building with signage',
    tag: 'Cloud Phone System',
    client: 'The Regis School',
    title: 'Replacing an Outdated On-Site ISDN System With 3CX Cloud',
    excerpt: '"We were struggling with an outdated on-site ISDN phone system that was costly, space-consuming and difficult to maintain. After speaking with Intouch, they upgraded to a 3CX Cloud Phone System."',
  },
  {
    tag: 'Cyber Security',
    client: 'Linthouse Housing Association',
    title: 'Moving From Manual Checks to Always-On Security',
    excerpt: "Intouch Tech helped Linthouse replace largely manual security checks with automated testing and additional email protection, giving its ICT team greater visibility of vulnerabilities, clearer priorities and measurable progress over time.",
    statValue: '197',
    statLabel: 'Malicious emails quarantined in 30 days',
    href: '/case-studies/linthouse-housing-association-cyber-security',
  },
  {
    tag: 'Penetration Testing',
    client: 'Fashion Retailer',
    title: 'Making Penetration Testing Part of an Ongoing Security Strategy',
    excerpt: 'Intouch Tech introduced regular penetration testing, helping the internal IT team identify weaknesses, prioritise remediation and build repeated security testing into its wider cyber security strategy.',
    statValue: '3',
    statLabel: 'Vulnerability types uncovered',
    href: '/case-studies/penetration-testing',
  },
];

export const CaseStudySpotlight = ({
  theme = 'dark',
  ctaLabel = 'View Case Study',
  cases,
}: CaseStudySpotlightProps) => {
  const items = cases && cases.length > 0 ? cases : DEFAULT_CASES;
  const total = items.length;
  const [index, setIndex] = React.useState(0);

  if (total === 0) return null;

  const safeIndex = Math.min(index, total - 1);
  const go = (next: number) => setIndex(((next % total) + total) % total);

  return (
    <section className={`csp-root csp-${theme}`}>
      <style>{caseStudySpotlightCss}</style>

      <div className="csp-stage">
        <div className="csp-track" style={{ transform: `translateX(-${safeIndex * 100}%)` }}>
          {items.map((item, i) => (
            <div className="csp-slide" key={i}>
              <div className="csp-media">
                {item.image && (
                  <img src={item.image} alt={item.imageAlt || item.title || ''} loading="lazy" decoding="async" />
                )}
                {item.tag && <span className="csp-tag">{item.tag}</span>}
              </div>
              <div className="csp-content">
                {item.client && <p className="csp-client">{item.client}</p>}
                {item.title && <h3 className="csp-title">{item.title}</h3>}
                {item.excerpt && <p className="csp-excerpt">{item.excerpt}</p>}
                {(item.statValue || item.statLabel) && (
                  <div className="csp-stats">
                    {item.statValue && <span className="csp-stat-value">{item.statValue}</span>}
                    {item.statLabel && <span className="csp-stat-label">{item.statLabel}</span>}
                  </div>
                )}
                {item.href ? (
                  <a className="csp-cta" href={item.href}>
                    <span>{ctaLabel}</span>
                    <LucideIcon name="arrow-up-right" size={14} strokeWidth={2.4} />
                  </a>
                ) : (
                  <button type="button" className="csp-cta">
                    <span>{ctaLabel}</span>
                    <LucideIcon name="arrow-up-right" size={14} strokeWidth={2.4} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="csp-nav">
        <button type="button" className="csp-arrow" aria-label="Previous case study" onClick={() => go(safeIndex - 1)}>
          <ArrowLeft />
        </button>
        <div className="csp-dots">
          {items.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`csp-dot${i === safeIndex ? ' is-active' : ''}`}
              aria-label={`Go to case ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="csp-arrow" aria-label="Next case study" onClick={() => go(safeIndex + 1)}>
          <ArrowRight />
        </button>
        <span className="csp-counter">
          {String(safeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};
