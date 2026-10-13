/** Heading level a code component renders its title as, so each page can keep a clean outline. */
export type HeadingTag = 'h2' | 'h3' | 'h4' | 'p';

/** Options for the `Heading level` Variant prop in *.webflow.tsx files. */
export const HEADING_TAGS: HeadingTag[] = ['h2', 'h3', 'h4', 'p'];

/** Webflow hands props over as strings; anything unknown falls back to the component's current tag. */
export const toHeadingTag = (value: string | undefined, fallback: HeadingTag): HeadingTag =>
  HEADING_TAGS.find((t) => t === value) || fallback;

/** One level below `tag`, for a heading nested under the component's main heading. */
export const subHeadingTag = (tag: HeadingTag): 'h3' | 'h4' | 'h5' | 'p' =>
  tag === 'h2' ? 'h3' : tag === 'h3' ? 'h4' : tag === 'h4' ? 'h5' : 'p';
