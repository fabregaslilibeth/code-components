import { Icon } from './Icon';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

export default declareComponent(Icon, {
    name: 'Icon',
    description: 'An icon component',
    group: 'Content',
    props: {
        icon: props.Text({
            name: "Icon (SVG HTML)",
            defaultValue: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 4L6 12V24C6 33.9411 12.0589 42.8235 24 44C35.9411 42.8235 42 33.9411 42 24V12L24 4Z" fill="#032447"/></svg>',
        })
    },
});
