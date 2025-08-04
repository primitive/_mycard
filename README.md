# MyCard: Primitive Business Card

![version](https://img.shields.io/badge/version-2.0.2-blue)
![vite](https://img.shields.io/badge/tooling-Vite-646cff)
![react](https://img.shields.io/badge/framework-React-61dafb)

Outputs a simple single-page React app for displaying a digital card.

This project uses [Vite](https://vitejs.dev/) for lightning-fast development and build. The output is a single static `index.html` with bundled CSS/JS — ready to deploy anywhere.

---

## 🚀 Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the Vite dev server with hot module reloading.

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

### `npm run build`

Builds the app for production to the `dist/` folder:

```bash
npm run build
```

This generates a static HTML file (`dist/index.html`) with fully optimised assets.

---

### `npm run preview`

Locally preview the production build:

```bash
npm run preview
```

---


## 🧾 Project Structure

```bash
src/
├── main.jsx         # Entry point
├── ComingSoon.js    # Main UI
├── index.css        # Styles
├── settings.js      # Config
index.html           # Static template
vite.config.js       # Build config
```

## 🧾 Config

```bash
src/
├── main.jsx         # Entry point
├── ComingSoon.js    # Main UI
├── index.css        # Styles
├── settings.js      # Config
index.html           # Static template
vite.config.js       # Build config
```

## 📁 Output

After building, you'll get:

- `dist/index.html` — your static page
- `dist/assets/` — CSS/JS files for your card
- No runtime dependencies or backend needed

---



---

## 🌍 Deployment

Just upload the contents of `dist/` folder to any static host.

No server-side code required.

---

## 🧹 Notes

- Emotion handles component styling
- Linting is configured with ESLint

---

## 🧠 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
