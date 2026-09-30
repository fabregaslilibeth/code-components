# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Webflow Deployment

This project contains React components that can be published to Webflow and used in your Webflow sites, via the Webflow CLI (`@webflow/webflow-cli`, installed as a dev dependency).

### Step 1: Authenticate with Webflow

```bash
npm run webflow:login
```

Runs `webflow auth login` — opens a browser window to authenticate and saves credentials to a local `.env` file.

**Never commit `.env`** — it holds your Webflow credentials. It's already listed in `.gitignore`. If you ever need to re-authenticate (e.g. expired session), run `npx webflow auth login --force`.

### Step 2: Share your library to Webflow

```bash
npm run webflow:share
```

Runs `webflow library share` — bundles every component matched by `webflow.json` and shares the library to your Webflow Workspace, using the credentials saved in Step 1. Once it finishes, the library shows up in the Webflow Designer's "Components" panel on any site in that Workspace.

To share from a script or CI without an interactive login, set `WEBFLOW_WORKSPACE_API_TOKEN` (or pass `--api-token <token>`) instead of running Step 1.

### Local bundle only (optional)

```bash
npm run webflow:bundle
```

Runs `webflow library bundle` — bundles the library to `./dist` for inspection without sharing it to Webflow. Useful for a quick sanity check before sharing.

### Step 3: Publish Your Site to Live

After your components are published and added to your Webflow site:

1. **In Webflow Designer:**
   - Open your site in the Webflow Designer
   - Make sure all your custom components are added and configured
   - Review your site to ensure everything looks correct

2. **Publish to Live:**
   - Click the **"Publish"** button in the top-right corner of the Designer
   - Select **"Publish to Webflow"** (or your custom domain if configured)
   - Click **"Publish"** to deploy your site live

3. **Custom Domain (optional):**
   - Go to **Project Settings** → **Hosting**
   - Add your custom domain
   - Update DNS records as instructed
   - Publish to your custom domain

### Component Library

Your component library is configured in `webflow.json`:
- **Library name:** Intouch Tech Components
- **Components matched:** any file under `./src/` ending in `.webflow.@(js|jsx|mjs|ts|tsx)`

Current components (31):

| Component | Source | Description |
|---|---|---|
| Button | `src/components/button/` | Pill CTA button — label, icon, link, dark/light theme |
| CTA Button | `src/components/cta-button/` | Link button — colour, icon, size, corner shape and per-breakpoint centring as props |
| CTA Banner | `src/components/cta-banner/` | Full-width blue gradient CTA banner with heading, contacts and two action buttons |
| Expert CTA | `src/components/expert-cta/` | Dark section with expert photo anchored to the bottom, a chat popup, and a WhatsApp CTA |
| Marquee | `src/components/marquee/` | Infinite scrolling pill strip — icon + label items |
| Points | `src/components/points/` | Feature card with title, body and a grid of icon points |
| Compare Card | `src/components/compare-card/` | Pro vs con comparison card with icons and custom colours |
| Icon Card | `src/components/card/` | Single icon card with title and body — dark or light theme |
| Grid | `src/components/grid/` | Uniform icon-card grid, fixed 8 item slots — dark or light theme |
| Grid Array | `src/components/grid-array/` | Uniform icon-card grid — accepts items as a JSON array |
| Slider | `src/components/slider/Slider.webflow.tsx` | Scroll-snap card slider — paste a JSON array into the Slides prop |
| Slider Item | `src/components/slider/SliderItem.webflow.tsx` | Standalone slide component. ⚠️ `Slider` does not declare a child slot for it, so composing it inside `Slider` on the canvas is unverified — the proven pattern is `Slider`'s own `slides` JSON prop |
| Header Group | `src/components/header-group/` | Section heading with optional eyebrow, gradient highlight, and intro paragraph |
| Why Bento | `src/components/why-bento/WhyBento.webflow.tsx` | Bento-style "why us" section with a feature tile and icon cards |
| Why Bento (Light) | `src/components/why-bento/WhyBentoLight.webflow.tsx` | Light-mode bento "why us" section with white/grey tiles and navy text |
| Why Bento Array | `src/components/why-bento-array/` | Bento-style "why us" grid — items as a JSON array, dark and light themes |
| Bento Grid | `src/components/bento/` | Why Intouch bento grid with icons, feature cells and photo cards |
| How Timeline | `src/components/timeline/` | Vertical process timeline (4–7 steps) with scroll reveal, animated connector lines and photo parallax |
| Delivery Process | `src/components/process/` | Interactive five-step Power BI delivery process with step navigation, photos and progress bar |
| Pricing Card | `src/components/pricing-card/` | Sticky pricing panel — selectable price bands, checklist, CTA. All text and colours are props |
| Pricing Calculator | `src/components/PricingCalculator.webflow.tsx` | Dynamic pricing calculator with payment frequency, employee slider, and multiple plan cards |
| Certification Pricing | `src/components/CertificationPricing.webflow.tsx` | Pricing comparison with Cyber Essentials / Cyber Essentials Plus toggle and three plan cards |
| Case Study Spotlight | `src/components/case-study/` | One case study at a time, full-bleed and editorial — paste a JSON array into the Case studies prop |
| Bullet List | `src/components/bullet-list/` | Icon-bulleted list with optional body text — dark/light, responsive alignment |
| Numbered List | `src/components/numbered-list/` | Numbered rows with icon, title and body — light or dark theme |
| Pill List | `src/components/pill-list/` | Flex-wrap pill list — icon + label, alignment per breakpoint, optional per-item link |
| Service List | `src/components/service-list/` | Numbered clickable service rows with logo, title, body and arrow |
| Text With Image | `src/components/text-with-image/` | Image beside a text block (eyebrow, title, body); stacks on mobile |
| Feature Item | `src/components/feature-item/` | One comparison-table row: check/cross icon, label, optional tooltip |
| Stats Grid | `src/components/stats-grid/` | Grid of stat cards — value, optional unit superscript, and label |
| Icon | `src/components/Icon.webflow.tsx` | Renders an arbitrary icon from a raw SVG HTML string prop |

Run `npm start` to preview components locally — it renders `src/App.js`, a dev harness that mounts most of the library side by side.

### Troubleshooting

- If `webflow:login` or `webflow:share` fails with an auth error, re-run `npm run webflow:login` (add `--force` to force re-authentication)
- If `webflow:share` doesn't pick up a component, check `webflow.json`'s `library.components` glob and confirm the file ends in `.webflow.tsx` (or `.js`/`.jsx`/`.mjs`/`.ts`) — `Card.webflow.legacy.tsx` is intentionally excluded this way
- Never commit `.env` — it holds your Webflow credentials
