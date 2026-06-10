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

This project contains React components that can be published to Webflow and used in your Webflow sites.

### Step 1: Publish Components to Webflow

1. **Login to Webflow CLI** (first time only):
   ```bash
   npm run webflow:login
   ```
   This will open a browser window for authentication.

2. **Publish your components**:
   ```bash
   npm run webflow:publish
   ```
   This publishes your component library (defined in `webflow.json`) to Webflow. Your components will be available in the Webflow Designer under the "Components" panel.

3. **Development mode** (optional):
   ```bash
   npm run webflow:dev
   ```
   This runs the components in development mode with hot-reloading for testing.

### Step 2: Publish Your Site to Live

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
- **Library Name:** Intouch Tech Components
- **Components:** All files matching `./src/**/*.webflow.@(js|jsx|mjs|ts|tsx)`

Current components:
- `Card.webflow.tsx`
- `Icon.webflow.tsx`
- `PricingCalculator.webflow.tsx`

### Troubleshooting

- If `webflow:publish` fails, make sure you're logged in: `npm run webflow:login`
- Ensure your `webflow.json` configuration is correct
- Check that all component files follow the `.webflow.tsx` naming convention
