import { DeliveryProcess } from './DeliveryProcess';
import { DEFAULT_DELIVERY_STEPS, DeliveryProcessStep } from './DeliveryProcess.data';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const DeliveryProcessWebflow = ({
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
}: {
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
}) => {
  const defaults = DEFAULT_DELIVERY_STEPS;
  const steps: DeliveryProcessStep[] = [
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
    {
      n: step5Number?.trim() || defaults[4].n,
      title: step5Title?.trim() || defaults[4].title,
      body: step5Body?.trim() || defaults[4].body,
      photo: step5Photo?.trim() || defaults[4].photo,
    },
  ];

  return (
    <DeliveryProcess
      steps={steps}
    />
  );
};

export default declareComponent(DeliveryProcessWebflow, {
  name: 'Delivery Process',
  description: 'Interactive five-step Power BI delivery process with step navigation, photos and progress bar',
  group: 'Content',
  props: {
    step1Number: props.Text({ name: 'Step 1 number', defaultValue: '01' }),
    step1Title: props.Text({
      name: 'Step 1 title',
      defaultValue: 'Understand your data & goals',
    }),
    step1Body: props.Text({
      name: 'Step 1 body',
      defaultValue:
        'We align your goals with the right KPIs and a clear analytics roadmap, so every report drives ROI.',
    }),
    step1Photo: props.Text({
      name: 'Step 1 photo URL',
      defaultValue: DEFAULT_DELIVERY_STEPS[0].photo,
    }),
    step2Number: props.Text({ name: 'Step 2 number', defaultValue: '02' }),
    step2Title: props.Text({
      name: 'Step 2 title',
      defaultValue: 'Connect & model your data securely',
    }),
    step2Body: props.Text({
      name: 'Step 2 body',
      defaultValue:
        'We securely connect, clean and model your data into a single trusted source of truth.',
    }),
    step2Photo: props.Text({
      name: 'Step 2 photo URL',
      defaultValue: DEFAULT_DELIVERY_STEPS[1].photo,
    }),
    step3Number: props.Text({ name: 'Step 3 number', defaultValue: '03' }),
    step3Title: props.Text({
      name: 'Step 3 title',
      defaultValue: 'Design dashboards that answer real questions',
    }),
    step3Body: props.Text({
      name: 'Step 3 body',
      defaultValue:
        'We build intuitive dashboards that instantly answer the questions your team needs to act on.',
    }),
    step3Photo: props.Text({
      name: 'Step 3 photo URL',
      defaultValue: DEFAULT_DELIVERY_STEPS[2].photo,
    }),
    step4Number: props.Text({ name: 'Step 4 number', defaultValue: '04' }),
    step4Title: props.Text({
      name: 'Step 4 title',
      defaultValue: 'Validate insights & refine visuals',
    }),
    step4Body: props.Text({
      name: 'Step 4 body',
      defaultValue:
        'We validate every metric and refine visuals so insights are accurate, clear and decision-ready.',
    }),
    step4Photo: props.Text({
      name: 'Step 4 photo URL',
      defaultValue: DEFAULT_DELIVERY_STEPS[3].photo,
    }),
    step5Number: props.Text({ name: 'Step 5 number', defaultValue: '05' }),
    step5Title: props.Text({
      name: 'Step 5 title',
      defaultValue: 'Deploy, train & support your team',
    }),
    step5Body: props.Text({
      name: 'Step 5 body',
      defaultValue:
        'We deploy your dashboards, train your team and provide ongoing support to ensure adoption and results.',
    }),
    step5Photo: props.Text({
      name: 'Step 5 photo URL',
      defaultValue: DEFAULT_DELIVERY_STEPS[4].photo,
    }),
  },
});
