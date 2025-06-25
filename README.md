# 🌸 Tamil Random Quote Generator

A simple web app that displays a random Tamil quote each time the page is loaded. Quotes are fetched from a JSON-based API hosted on GitHub Pages.

---

## 🌐 Live Demo

[🔗 Click to View](https://mithu-vulcan.github.io/randomQuoteTamil/)

---

## 📋 Features

- ✨ Displays a random Tamil quote with author on page load
- 📦 Powered by a simple JSON API hosted on GitHub
- 💡 Clean and minimal UI
- ⚡ No frameworks — just HTML, CSS, and JavaScript

---

## 🛠️ Technologies Used

- **HTML** — Structure
- **CSS** — Styling
- **JavaScript (Vanilla)** — Logic and API handling
- **GitHub Pages** — Hosting

---

## 🧠 How It Works

1. On page load, the script fetches the total number of available quotes from `index.json`.
2. It randomly picks a quote ID.
3. Then, it fetches the corresponding quote file from the `quotes/` folder.
4. Finally, it updates the DOM with the quote and author.

```js
window.onload = function () {
  getRandomQuote();
};
```

---

## 🖼️ UI Screenshot

_(Add a screenshot here if available)_

---

## 🧾 Example Quote Format

Each quote is stored like this:

```json
{
  "quote": "அன்பை தருபவர்களை விட அனுபவத்தை தருபவர்கள் தான் வாழ்க்கையில் அதிகம்..",
  "author": "அனானி"
}
```

---

## 📂 File Structure

```
.
├── index.html
├── script.js
├── style.css
└── /quotes (fetched via API)
```

---

## 🚀 Deployment

Just open `index.html` in a browser or host it using GitHub Pages — no server or build process needed.

---

## ✨ Credits

Built with ❤️ by [Mithu](https://github.com/mithu-vulcan)
