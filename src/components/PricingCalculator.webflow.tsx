import type { ComponentProps } from 'react';
import { PricingCalculator } from './PricingCalculator';
import { HEADING_TAGS, toHeadingTag } from './headingTag';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

type PricingCalculatorWebflowProps = Omit<ComponentProps<typeof PricingCalculator>, 'headingTag'> & {
    headingTag?: string;
};

const PricingCalculatorWebflow = ({ headingTag, ...rest }: PricingCalculatorWebflowProps) => (
    <PricingCalculator {...rest} headingTag={toHeadingTag(headingTag, 'h2')} />
);

export default declareComponent(PricingCalculatorWebflow, {
    name: 'Pricing Calculator',
    description: 'Dynamic pricing calculator with payment frequency, employee slider, and multiple plan cards',
    group: 'Commerce',
    props: {
        currency: props.Text({
            name: "Currency Symbol",
            defaultValue: "£",
        }),
        savingsPercent: props.Number({
            name: "Annual Savings Percent",
            defaultValue: 20,
            min: 0,
            max: 100,
        }),
        minEmployees: props.Number({
            name: "Min Employees",
            defaultValue: 1,
            min: 1,
        }),
        maxEmployees: props.Number({
            name: "Max Employees",
            defaultValue: 100,
            min: 1,
        }),
        headingTag: props.Variant({
            name: 'Heading level',
            defaultValue: 'h2',
            options: HEADING_TAGS,
        }),
    },
});
