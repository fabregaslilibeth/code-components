import { PricingCalculator } from './PricingCalculator';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

export default declareComponent(PricingCalculator, {
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
    },
});
