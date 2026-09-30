import { PullQuote, PullQuoteTheme } from './PullQuote';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const PullQuoteWebflow = ({
  theme,
  quote,
  name,
  role,
  showMark,
}: {
  theme?: string;
  quote?: string;
  name?: string;
  role?: string;
  showMark?: boolean;
}) => {
  const safeTheme: PullQuoteTheme = theme === 'light' ? 'light' : 'dark';
  return (
    <PullQuote
      theme={safeTheme}
      quote={quote}
      name={name}
      role={role}
      showMark={showMark ?? true}
    />
  );
};

export default declareComponent(PullQuoteWebflow, {
  name: 'Pull Quote',
  description: 'Cyan rule and large decorative quotation mark for a client testimonial, with a bold name and role/company attribution.',
  group: 'Content',
  props: {
    theme: props.Variant({ name: 'Theme', defaultValue: 'dark', options: ['dark', 'light'] }),
    quote: props.Text({
      name: 'Quote',
      defaultValue: "Thinking you've got everything in place isn't the same as having it validated externally.",
      tooltip: "The quote text on its own — no need to add quotation marks, the decorative mark already signals it's a quote.",
    }),
    name: props.Text({ name: 'Name', defaultValue: 'Colin Jones' }),
    role: props.Text({ name: 'Role / company', defaultValue: 'ICT Manager, Linthouse Housing Association' }),
    showMark: props.Boolean({
      name: 'Show quotation mark',
      defaultValue: true,
    }),
  },
});
