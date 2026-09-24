import { HowTimeline } from './HowTimeline';
import {
  DEFAULT_HOW_TIMELINE_STEPS,
  DEFAULT_HOW_TIMELINE_STEP_5,
  DEFAULT_HOW_TIMELINE_STEP_6,
  DEFAULT_HOW_TIMELINE_STEP_7,
  HowTimelineStep,
} from './HowTimeline.data';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const HowTimelineWebflow = ({
  showStep5,
  showStep6,
  showStep7,
  step1Number,
  step1Title,
  step1Body,
  step1Photo,
  step2Number,
  step2Title,
  step2Body,
  step2Photo,
  step3Number,
  step3Title,
  step3Body,
  step3Photo,
  step4Number,
  step4Title,
  step4Body,
  step4Photo,
  step5Number,
  step5Title,
  step5Body,
  step5Photo,
  step6Number,
  step6Title,
  step6Body,
  step6Photo,
  step7Number,
  step7Title,
  step7Body,
  step7Photo,
}: {
  showStep5?: boolean;
  showStep6?: boolean;
  showStep7?: boolean;
  step1Number?: string;
  step1Title?: string;
  step1Body?: string;
  step1Photo?: string;
  step2Number?: string;
  step2Title?: string;
  step2Body?: string;
  step2Photo?: string;
  step3Number?: string;
  step3Title?: string;
  step3Body?: string;
  step3Photo?: string;
  step4Number?: string;
  step4Title?: string;
  step4Body?: string;
  step4Photo?: string;
  step5Number?: string;
  step5Title?: string;
  step5Body?: string;
  step5Photo?: string;
  step6Number?: string;
  step6Title?: string;
  step6Body?: string;
  step6Photo?: string;
  step7Number?: string;
  step7Title?: string;
  step7Body?: string;
  step7Photo?: string;
}) => {
  const defaults = DEFAULT_HOW_TIMELINE_STEPS;
  const steps: HowTimelineStep[] = [
    {
      n: step1Number?.trim() || defaults[0].n,
      title: step1Title?.trim() || defaults[0].title,
      body: step1Body?.trim() || defaults[0].body,
      photo: step1Photo?.trim() || defaults[0].photo,
    },
    {
      n: step2Number?.trim() || defaults[1].n,
      title: step2Title?.trim() || defaults[1].title,
      body: step2Body?.trim() || defaults[1].body,
      photo: step2Photo?.trim() || defaults[1].photo,
    },
    {
      n: step3Number?.trim() || defaults[2].n,
      title: step3Title?.trim() || defaults[2].title,
      body: step3Body?.trim() || defaults[2].body,
      photo: step3Photo?.trim() || defaults[2].photo,
    },
    {
      n: step4Number?.trim() || defaults[3].n,
      title: step4Title?.trim() || defaults[3].title,
      body: step4Body?.trim() || defaults[3].body,
      photo: step4Photo?.trim() || defaults[3].photo,
    },
  ];

  if (showStep5 === true) {
    steps.push({
      n: step5Number?.trim() || DEFAULT_HOW_TIMELINE_STEP_5.n,
      title: step5Title?.trim() || DEFAULT_HOW_TIMELINE_STEP_5.title,
      body: step5Body?.trim() || DEFAULT_HOW_TIMELINE_STEP_5.body,
      photo: step5Photo?.trim() || DEFAULT_HOW_TIMELINE_STEP_5.photo,
    });
  }

  if (showStep6 === true) {
    steps.push({
      n: step6Number?.trim() || DEFAULT_HOW_TIMELINE_STEP_6.n,
      title: step6Title?.trim() || DEFAULT_HOW_TIMELINE_STEP_6.title,
      body: step6Body?.trim() || DEFAULT_HOW_TIMELINE_STEP_6.body,
      photo: step6Photo?.trim() || DEFAULT_HOW_TIMELINE_STEP_6.photo,
    });
  }

  if (showStep7 === true) {
    steps.push({
      n: step7Number?.trim() || DEFAULT_HOW_TIMELINE_STEP_7.n,
      title: step7Title?.trim() || DEFAULT_HOW_TIMELINE_STEP_7.title,
      body: step7Body?.trim() || DEFAULT_HOW_TIMELINE_STEP_7.body,
      photo: step7Photo?.trim() || DEFAULT_HOW_TIMELINE_STEP_7.photo,
    });
  }

  return <HowTimeline steps={steps} />;
};

export default declareComponent(HowTimelineWebflow, {
  name: 'How Timeline',
  description:
    'Vertical process timeline (4–7 steps) with scroll reveal, animated connector lines and photo parallax',
  group: 'Content',
  props: {
    step1Number: props.Text({ name: 'Step 1 number', defaultValue: '01' }),
    step1Title: props.Text({
      name: 'Step 1 title',
      defaultValue: 'Discovery & scoping',
    }),
    step1Body: props.Text({
      name: 'Step 1 body',
      defaultValue:
        'We map your process, data and goals, then scope an app that pays back fast.',
    }),
    step1Photo: props.Text({
      name: 'Step 1 photo URL',
      defaultValue: DEFAULT_HOW_TIMELINE_STEPS[0].photo,
    }),
    step2Number: props.Text({ name: 'Step 2 number', defaultValue: '02' }),
    step2Title: props.Text({
      name: 'Step 2 title',
      defaultValue: 'App design & build',
    }),
    step2Body: props.Text({
      name: 'Step 2 body',
      defaultValue:
        'We design the experience and build your canvas or model-driven app with low-code best practice.',
    }),
    step2Photo: props.Text({
      name: 'Step 2 photo URL',
      defaultValue: DEFAULT_HOW_TIMELINE_STEPS[1].photo,
    }),
    step3Number: props.Text({ name: 'Step 3 number', defaultValue: '03' }),
    step3Title: props.Text({
      name: 'Step 3 title',
      defaultValue: 'Secure setup & integration',
    }),
    step3Body: props.Text({
      name: 'Step 3 body',
      defaultValue:
        'We connect your data, set role-based access and integrate Microsoft 365, Dataverse and SharePoint.',
    }),
    step3Photo: props.Text({
      name: 'Step 3 photo URL',
      defaultValue: DEFAULT_HOW_TIMELINE_STEPS[2].photo,
    }),
    step4Number: props.Text({ name: 'Step 4 number', defaultValue: '04' }),
    step4Title: props.Text({
      name: 'Step 4 title',
      defaultValue: 'Launch, training & support',
    }),
    step4Body: props.Text({
      name: 'Step 4 body',
      defaultValue:
        'We launch, train your team and provide ongoing support and continuous improvements.',
    }),
    step4Photo: props.Text({
      name: 'Step 4 photo URL',
      defaultValue: DEFAULT_HOW_TIMELINE_STEPS[3].photo,
    }),
    showStep5: props.Visibility({
      name: 'Show step 5',
      group: 'Step 5',
      defaultValue: false,
    }),
    step5Number: props.Text({
      name: 'Step 5 number',
      group: 'Step 5',
      defaultValue: '05',
    }),
    step5Title: props.Text({
      name: 'Step 5 title',
      group: 'Step 5',
      defaultValue: 'Optimise & evolve',
    }),
    step5Body: props.Text({
      name: 'Step 5 body',
      group: 'Step 5',
      defaultValue:
        'We review adoption, tune performance and roll out improvements as your business grows.',
    }),
    step5Photo: props.Text({
      name: 'Step 5 photo URL',
      group: 'Step 5',
      defaultValue: DEFAULT_HOW_TIMELINE_STEP_5.photo,
    }),
    showStep6: props.Visibility({
      name: 'Show step 6',
      group: 'Step 6',
      defaultValue: false,
    }),
    step6Number: props.Text({
      name: 'Step 6 number',
      group: 'Step 6',
      defaultValue: '06',
    }),
    step6Title: props.Text({
      name: 'Step 6 title',
      group: 'Step 6',
      defaultValue: DEFAULT_HOW_TIMELINE_STEP_6.title,
    }),
    step6Body: props.Text({
      name: 'Step 6 body',
      group: 'Step 6',
      defaultValue: DEFAULT_HOW_TIMELINE_STEP_6.body,
    }),
    step6Photo: props.Text({
      name: 'Step 6 photo URL',
      group: 'Step 6',
      defaultValue: DEFAULT_HOW_TIMELINE_STEP_6.photo,
    }),
    showStep7: props.Visibility({
      name: 'Show step 7',
      group: 'Step 7',
      defaultValue: false,
    }),
    step7Number: props.Text({
      name: 'Step 7 number',
      group: 'Step 7',
      defaultValue: '07',
    }),
    step7Title: props.Text({
      name: 'Step 7 title',
      group: 'Step 7',
      defaultValue: DEFAULT_HOW_TIMELINE_STEP_7.title,
    }),
    step7Body: props.Text({
      name: 'Step 7 body',
      group: 'Step 7',
      defaultValue: DEFAULT_HOW_TIMELINE_STEP_7.body,
    }),
    step7Photo: props.Text({
      name: 'Step 7 photo URL',
      group: 'Step 7',
      defaultValue: DEFAULT_HOW_TIMELINE_STEP_7.photo,
    }),
  },
});
