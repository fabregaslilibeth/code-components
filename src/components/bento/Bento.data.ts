export interface BentoCell {
  n: string;
  icon: string;
  iconSvg?: string;
  title: string;
  body: string;
  photo?: string;
  feature?: boolean;
  area: { col: string; row: string };
}

const CDN = 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/';

export const DEFAULT_BENTO_CELLS: BentoCell[] = [
  {
    n: '01',
    icon: 'users',
    title: 'In-house Power BI specialists',
    body: 'Not a faceless agency — senior UK consultants with deep technical expertise who own the outcome, security-led from day one.',
    area: { col: '1', row: '1 / span 2' },
    feature: true,
  },
  {
    n: '02',
    icon: 'layout-dashboard',
    title: 'Built around real questions',
    body: 'Dashboards designed around the KPIs that matter to Finance, Sales, Operations and Leadership.',
    area: { col: '2 / span 2', row: '1' },
    photo: `${CDN}6995ebaf4e1b7481926b35d5_webinar-bg.avif`,
  },
  {
    n: '03',
    icon: 'shield-check',
    title: 'Security-first data access',
    body: 'Role-based access, encryption and Microsoft security controls.',
    area: { col: '2', row: '2' },
  },
  {
    n: '04',
    icon: 'message-square',
    title: 'Plain-English insights',
    body: 'Clear reporting your board can act on — not jargon.',
    area: { col: '3', row: '2' },
  },
  {
    n: '05',
    icon: 'layers',
    title: 'One partner for BI, IT & cyber',
    body: 'Power BI, the wider Power Platform, managed IT and cyber security under one accountable roof.',
    area: { col: '1 / span 2', row: '3' },
    photo: `${CDN}6984b2318f637602ab949ed0_001-cyber-security-package.avif`,
  },
  {
    n: '06',
    icon: 'trending-up',
    title: 'Scalable & future-ready',
    body: 'A well-structured Power BI environment that grows with you.',
    area: { col: '3', row: '3' },
  },
];
