# Kannada for Everyone

An interactive beginner-friendly Kannada learning website created for the **Kannada Digital Innovation Hackathon 2026**.

## Problem statement
**Kannada for Everyone** — an interactive platform that helps non-Kannada speakers learn practical Kannada through everyday conversations, situations, vocabulary, and guided practice.

## Features
- Beginner vocabulary cards with Kannada script, transliteration, and English meanings
- Search and category filters
- Browser text-to-speech playback when supported; if no Kannada voice is installed, the button reads the Latin pronunciation guide where possible
- Everyday conversations for shopping, greetings, and directions
- Situation-based phrase discovery
- Interactive five-question vocabulary quiz
- Local learning progress and best score saved in the browser
- Responsive layout for mobile and desktop
- No Python or paid API required

## Technology stack
- HTML5
- CSS3
- Vanilla JavaScript
- Browser Speech Synthesis API (optional, device/browser support varies)
- Browser localStorage for local progress

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Internet access is needed only to load the optional Google Fonts. The site itself uses local HTML, CSS, and JavaScript.

You can also use Visual Studio Code with the Live Server extension, then open the local URL it provides.

## Deploy
This is a static website. You can publish the repository with GitHub Pages:
1. Push all project files to a public GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for deployment and test the published URL on a phone and computer.

## Important limitations
- Text-to-speech availability and Kannada voice quality depend on the user's browser and installed voices. When a Kannada voice is unavailable, buttons try to read the Latin pronunciation guide using an available English voice; this is a fallback, not native Kannada audio.
- The project does not claim to understand live speech, automatically assess pronunciation, or provide AI-generated translations.
- Progress is stored only in the current browser/device and is not synced to an account.
- Kannada transliterations and sample dialogue are beginner learning aids; review language accuracy with a fluent Kannada speaker before final submission.

## Project structure
```
Kannada_for_Everyone/
├── index.html
├── style.css
├── script.js
└── README.md
```

