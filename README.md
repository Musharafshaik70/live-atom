# LiveAtom ⚛️

LiveAtom is a lightweight runtime CSS library inspired by Tailwind.

LiveAtom dynamically parses utility classes and injects optimized stylesheets directly into the CSSOM on the fly.

No setup required. Just drop a script tag and start styling.

---

## 🚀 Quicl Links

- 📚 Docs & Landing Page: https://live-atom-website.netlify.app/
- 💻 GitHub Repository: https://github.com/MusharafShaik70/live-atom
- 📦 NPM Package: https://www.npmjs.com/package/live-atom

---

## ✨Features:

- **Zero-Build Runtime** : Just drop the script into your HTML and start styling immediately in the browser.
- **Direct CSSOM Injection** : Bypasses heavy DOM style blocks by writing parsed rules directly into the browser's CSS Object Model for maximum performance.
- **Live DOM Watching** : Powered by native MutationObservers. If you inject HTML components via JavaScript later, LiveAtom computes and applies styles instantly.
- **Smart Style Caching** : caches unique classes preventing redundant CSS rule generation.
- **Static & Dynamic Utilities** : Access hundreds of pre-mapped utilities or use Just-In-Time arbitrary values like atom-w-[250px] on the fly.
- **Baseline Style Reset** : Includes a modern, automated CSS reset injected by default, ensuring absolute cross-browser consistency without an extra stylesheet.
- **Extensible Custom API** : Need a specialized class? Register custom CSS blocks instantly directly in your JavaScript using the liveAtom.addClass() method.
- **Framework Agnostic** : Seamlessly integrates anywhere. Use it with plain HTML/Vanilla JS, modern frameworks like React and Vue, or backend templates like PHP.

---

## 📦Usage

### 📥 Install via npm

```
  npm install live-atom
```

```
  <script type="importmap">{
  "imports": { "live-atom": "./node_modules/live-atom/main.js" }
  } </script>
```

```
import liveAtom from "live-atom";
```

### 🌐 Include via CDN

```
 <script src="https://unpkg.com/live-atom"></script>`

```

It is that easy. Now you can start using live-atom css.

## 📚 Documentation

👉 check out the documentation and utilities here : https://live-atom-website.netlify.app/
