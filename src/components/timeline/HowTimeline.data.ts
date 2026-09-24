export interface HowTimelineStep {
  n: string;
  title: string;
  body: string;
  photo: string;
}

const CDN = 'https://cdn.prod.website-files.com/6900d0af5ebb1f2065599d70/';

export const DEFAULT_HOW_TIMELINE_STEPS: HowTimelineStep[] = [
  {
    n: '01',
    title: 'Discovery & scoping',
    body: 'We map your process, data and goals, then scope an app that pays back fast.',
    photo: `${CDN}69679cfa5f08c3f22a3f1766_timeline1.avif`,
  },
  {
    n: '02',
    title: 'App design & build',
    body: 'We design the experience and build your canvas or model-driven app with low-code best practice.',
    photo: `${CDN}69679cfbbf405bbcbe42bb2d_timeline2.avif`,
  },
  {
    n: '03',
    title: 'Secure setup & integration',
    body: 'We connect your data, set role-based access and integrate Microsoft 365, Dataverse and SharePoint.',
    photo: `${CDN}69679cfabd6f0daf65c88ac3_timeline3.avif`,
  },
  {
    n: '04',
    title: 'Launch, training & support',
    body: 'We launch, train your team and provide ongoing support and continuous improvements.',
    photo: `${CDN}6a3e2a0cf6659a4f8ec5da38_powerbi-grid-image1.avif`,
  },
];

export const DEFAULT_HOW_TIMELINE_STEP_5: HowTimelineStep = {
  n: '05',
  title: 'Optimise & evolve',
  body: 'We review adoption, tune performance and roll out improvements as your business grows.',
  photo: `${CDN}69679cfac08bcf07fbb86516_timeline5.avif`,
};

export const DEFAULT_HOW_TIMELINE_STEP_6: HowTimelineStep = {
  n: '06',
  title: 'Automate the manual steps',
  body: 'We automate the handoffs around your app and connect the remaining systems your team relies on.',
  photo: `${CDN}69679cfa5f08c3f22a3f1766_timeline1.avif`,
};

export const DEFAULT_HOW_TIMELINE_STEP_7: HowTimelineStep = {
  n: '07',
  title: 'Review & scale',
  body: 'We review results against the original goals and scale what works across other teams and processes.',
  photo: `${CDN}69679cfbbf405bbcbe42bb2d_timeline2.avif`,
};
