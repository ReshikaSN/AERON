# AERON — Aquatic Ecosystem Restoration

A responsive, static website and interactive dashboard mockup for the AERON student project.

## Included
- Landing page explaining AERON
- How-it-works workflow
- Interactive dashboard preview with sample readings
- Waste collection breakdown, sensor readings, alerts, and system status
- Responsive layout for mobile and desktop
- No solar-powered claims

## Run locally
Open `index.html` in a browser. No build step is required.

## Publish with GitHub Pages
1. Create a new repository on GitHub.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site.

## Important prototype note
This is a front-end demo only. The dashboard values are illustrative and do not come from a real ESP32, sensors, or cloud service. To make it live, connect the ESP32 to a backend or IoT platform and replace the sample values in `script.js` with readings from that service. Do not present demo values as measured field data.

## Prediction note
The 48–72-hour pollution forecast is described as a future/development capability. It should only be claimed as operational after training and validating a forecasting model using sufficient local historical data.
