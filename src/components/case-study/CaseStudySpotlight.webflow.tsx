import { CaseStudySpotlight, CaseStudySpotlightTheme, CaseStudyCase } from './CaseStudySpotlight';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DEFAULT_CASES_JSON = `[
  {"image":"https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/69e8a2c24734fc59acb6bf33_case-study3.avif","imageAlt":"Healthcare clinician in a treatment room","tag":"Cloud Telephony","client":"NHS","title":"Five Times More Call Capacity for Frontline Clinical Teams","excerpt":"\\"Intouch provided a cloud phone system with five times more call capacity, real-time queue updates and separate lines for outbound clinical calls.\\"","statValue":"5×","statLabel":"More call capacity","href":""},
  {"image":"https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/69e8a2c23b6623550b879b52_case-study2.avif","imageAlt":"Two colleagues in a modern office setting","tag":"VoIP Platform","client":"Aristone","title":"Local Luton Numbers and Unlimited Support Under One Licence","excerpt":"\\"Intouch Communications quickly set up Aristone on our scalable Hosted Communicator VoIP platform, providing local Luton numbers, call recording, remote apps and unlimited support under one simple license.\\"","statValue":"1","statLabel":"Simple licence, unlimited support","href":""},
  {"image":"https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/69e8a18794c57a5699024c62_case-study1.avif","imageAlt":"Exterior of The Regis School building with signage","tag":"Cloud Phone System","client":"The Regis School","title":"Replacing an Outdated On-Site ISDN System With 3CX Cloud","excerpt":"\\"We were struggling with an outdated on-site ISDN phone system that was costly, space-consuming and difficult to maintain. After speaking with Intouch, they upgraded to a 3CX Cloud Phone System.\\"","statValue":"","statLabel":"","href":""},
  {"image":"","imageAlt":"","tag":"Cyber Security","client":"Linthouse Housing Association","title":"Moving From Manual Checks to Always-On Security","excerpt":"Intouch Tech helped Linthouse replace largely manual security checks with automated testing and additional email protection, giving its ICT team greater visibility of vulnerabilities, clearer priorities and measurable progress over time.","statValue":"197","statLabel":"Malicious emails quarantined in 30 days","href":"/case-studies/linthouse-housing-association-cyber-security"},
  {"image":"","imageAlt":"","tag":"Penetration Testing","client":"Fashion Retailer","title":"Making Penetration Testing Part of an Ongoing Security Strategy","excerpt":"Intouch Tech introduced regular penetration testing, helping the internal IT team identify weaknesses, prioritise remediation and build repeated security testing into its wider cyber security strategy.","statValue":"3","statLabel":"Vulnerability types uncovered","href":"/case-studies/penetration-testing"}
]`;

const parseCases = (raw: string): CaseStudyCase[] => {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const CaseStudySpotlightWebflow = ({
  theme,
  ctaLabel,
  cases,
}: {
  theme?: string;
  ctaLabel?: string;
  cases?: string;
}) => {
  const safeTheme: CaseStudySpotlightTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <CaseStudySpotlight
      theme={safeTheme}
      ctaLabel={ctaLabel}
      cases={parseCases(cases || DEFAULT_CASES_JSON)}
    />
  );
};

export default declareComponent(CaseStudySpotlightWebflow, {
  name: 'Case Study Spotlight',
  description: 'One case study at a time, full-bleed and editorial — paste a JSON array into the Case studies prop. Each item can carry an image URL and a link to the full case study.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    ctaLabel: props.Text({ name: 'Button label', defaultValue: 'View Case Study' }),
    cases: props.Text({
      name: 'Case studies (JSON array)',
      defaultValue: DEFAULT_CASES_JSON,
      tooltip: 'Array of {image, imageAlt, tag, client, title, excerpt, statValue, statLabel, href}. image and href are plain URLs — paste an asset link from the Assets panel, and the target page URL.',
    }),
  },
});
