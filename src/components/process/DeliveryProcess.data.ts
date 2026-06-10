export interface DeliveryProcessStep {
  n: string;
  title: string;
  body: string;
  photo: string;
}

const CDN = 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/';

export const DEFAULT_DELIVERY_STEPS: DeliveryProcessStep[] = [
  {
    n: '01',
    title: 'Understand your data & goals',
    body: 'We align your goals with the right KPIs and a clear analytics roadmap, so every report drives ROI.',
    photo: `${CDN}69679cfa5f08c3f22a3f1766_timeline1.avif`,
  },
  {
    n: '02',
    title: 'Connect & model your data securely',
    body: 'We securely connect, clean and model your data into a single trusted source of truth.',
    photo: `${CDN}69679cfbbf405bbcbe42bb2d_timeline2.avif`,
  },
  {
    n: '03',
    title: 'Design dashboards that answer real questions',
    body: 'We build intuitive dashboards that instantly answer the questions your team needs to act on.',
    photo: `${CDN}69679cfabd6f0daf65c88ac3_timeline3.avif`,
  },
  {
    n: '04',
    title: 'Validate insights & refine visuals',
    body: 'We validate every metric and refine visuals so insights are accurate, clear and decision-ready.',
    photo: `${CDN}69679cfa683bfbdd736e9e2f_timeline4.avif`,
  },
  {
    n: '05',
    title: 'Deploy, train & support your team',
    body: 'We deploy your dashboards, train your team and provide ongoing support to ensure adoption and results.',
    photo: `${CDN}69679cfac08bcf07fbb86516_timeline5.avif`,
  },
];
