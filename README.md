# Random Advice Generator

A minimal JavaScript project practicing **fetch**, **async/await**,
**DOM manipulation**, and **third-party APIs**. The app displays a
random advice quote using the [Advice Slip
API](https://api.adviceslip.com/) and automatically refreshes every 20
seconds. Users can also fetch a new one manually.

------------------------------------------------------------------------

## 🚀 Live Demo
https://aayusht200.github.io/random-advice/

------------------------------------------------------------------------

## 📌 Features

-   Fetches random advice from a public API
-   Auto-refresh every 20 seconds
-   Manual refresh button
-   Typed text animation using Typed.js
-   Minimal, responsive UI
-   Error placeholder on initial load

------------------------------------------------------------------------

## 🧰 Tech Stack

-   HTML
-   CSS
-   JavaScript (ES Modules)
-   Webpack
-   Typed.js
-   Advice Slip API

------------------------------------------------------------------------

## 📦 Installation

``` bash
git clone git@github.com:aayusht200/random-advice.git
cd <project-folder>
npm install
npm run start
```

------------------------------------------------------------------------

## 🧠 How It Works

1.  `fetch()` retrieves advice JSON from the Advice Slip API\
2.  `async/await` handles asynchronous API calls cleanly\
3.  DOM updates inject new advice text
4.  Typed.js animates the displayed advice
5.  `setInterval()` refreshes advice automatically

------------------------------------------------------------------------

## 📁 File Structure

    src/
     ├── index.js
     ├── style.css
     └── index.html

------------------------------------------------------------------------

## ✅ API Used

**Advice Slip API**\
`https://api.adviceslip.com/advice`

No authentication or API key required.

------------------------------------------------------------------------

## 🔒 Notes

-   The API occasionally caches aggressively---refresh manually if
    needed
-   No user data stored, collected, or tracked

------------------------------------------------------------------------

## 📜 License

MIT --- free to use, modify, and learn from.

------------------------------------------------------------------------

## 🙌 Acknowledgments

-   [Advice Slip API](https://api.adviceslip.com/)
-   [Typed.js](https://github.com/mattboldt/typed.js/)
