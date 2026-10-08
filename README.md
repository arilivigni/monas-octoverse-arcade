# Mona’s Octoverse Arcade

**GitHub Day of Learning — 2 Hour Workshop Game Challenge · Canvas Extension Edition**

This repository holds the attendee guide for the workshop. It has two parts:

- **This README**: the full workshop instructions, agenda, judging rubric, and award rules, so you can read everything right here on GitHub.
- **An [Astro](https://astro.build) website** that presents the same guide as a responsive, accessible dark-theme page for attendees.

The site is only an attendee guide. It is not the game. Participants build the game themselves during the workshop.

> **Note:** This is an independent workshop resource. It is **not** an official GitHub Universe or GitHub event website and is not endorsed by GitHub. GitHub, GitHub Copilot, and the Octocat are trademarks of GitHub, Inc. The character artwork in this repository is an original, Octocat-inspired illustration made for this workshop. It does not use or modify any official GitHub logo.

---

## 🏆 The challenge

Participants build a browser game starring **Mona** the Octocat as the hero and **Copilot** as the sidekick. There is one key requirement: **the game must ship as a Copilot App canvas extension** that can be installed and launched inside the Copilot App itself. At the end, we **judge every submission and crown a winner**.

### Core game

- Mona collects **green commit squares** while dodging **red bugs**.
- The game **tracks the score**.
- The game **increases speed over time**.
- A **game-over screen** appears, with a **restart** button.
- Copilot appears as a sidekick and gives an **encouraging tip every 10 points**.

## ✅ Core requirement: ship it as a canvas extension

The game can't be a loose HTML file. It must be a **Copilot canvas extension** that:

1. Lives in its own folder, with an `extension.mjs` that **registers a canvas** (the game UI).
2. Can be **installed** into the Copilot App, either with `install_extension` from a GitHub gist or repo folder, or by dropping the folder into the extensions directory.
3. **Runs** when the agent opens it with `open_canvas`. The game renders in the side panel and is playable.

Start from the **provided canvas starter template**. Build the game UI with HTML, CSS, and vanilla JavaScript inside the canvas. Don't add an external build step.

**Why this raises the bar (in a good way):** participants learn the real extension model (manifest, canvas registration, install, and launch), not just front-end code. This is the "GitHub twist" that makes the challenge platform-native.

### Initial prompt to give participants

> "Build a Copilot App **canvas extension** called *Mona's Octoverse Arcade*. Start from the provided canvas starter template. Inside the canvas, create a game where Mona the Octocat collects green commit-squares while dodging red bugs. Track the score, increase speed over time, and show a game-over screen with a restart button. Copilot appears as a sidekick that gives an encouraging tip every 10 points. The extension must install cleanly and open as a playable canvas. Keep it to HTML/CSS/vanilla JS inside the canvas — no external build step."

## ⏱️ Suggested workshop structure (2 hours)

| Time | Phase |
| --- | --- |
| **0:00–0:15** | Kickoff: demo the target canvas extension, share the idea + starter prompt + rubric |
| **0:15–0:25** | Everyone installs & opens the **starter canvas template** (confirm it runs) |
| **0:25–1:15** | Build the core game inside the canvas with the Copilot App |
| **1:15–1:35** | Pick a "power-up" stretch goal (leaderboard, sound, animation, theming) |
| **1:35–2:00** | **Judging:** live demos, rubric scoring, and awards decided by the judges 🏆 |

## 🥇 Judging and picking a winner

**Format:** Each team installs its extension live and gives a **90-second demo**: play the game and show it running as a canvas. Judges score each demo against the rubric.

### Scoring rubric (25 pts total)

| Criteria | Points | What judges look for |
| --- | ---: | --- |
| **It works**: installs & runs as a canvas | 8 | Extension installs, canvas opens, game is actually playable |
| **Fun factor** | 6 | Is it enjoyable? Would you play again? |
| **GitHub theme** | 5 | Creative use of Mona & Copilot as characters |
| **Polish** | 3 | Visuals, animations, sound, game-over/restart flow |
| **Wow / stretch** | 3 | A power-up feature that surprised the judges |

### Award categories

The **judges decide** all three categories. Each category winner takes home **swag** 🎁.

| 🏆 Award | Recognizes |
| --- | --- |
| **🥇 Overall Winner** | Best total rubric score across all criteria |
| **🎨 Best Design** | The best-looking, most visually striking game (Polish) |
| **🎉 Most Fun** | The game everyone wanted to keep playing (Fun factor) |

> A team can win more than one category. However, if the Overall Winner also tops another category, that second award rolls to the runner-up to spread the recognition.

## 🎯 Design principles

- ✅ Ship the **rubric up front** so teams build toward what's judged.
- ✅ Provide a **known-good canvas starter** so "install & run" is achievable for everyone.
- ✅ **Reward working software**: the rubric weights "it runs" highest (8 of 25 points).
- ✅ Shared theme, personal spin: everyone builds Mona's Arcade, but customizes it.

## 💡 Alternate theme options (same format & rubric)

| Idea | Concept | GitHub Twist |
| --- | --- | --- |
| **"Ask Mona" Chatbot** | A rule-based/scripted Q&A assistant UI | Mona answers Git/GitHub beginner questions; Copilot suggests follow-ups |
| **Commit Streak Tracker** | A habit/streak tracker | Themed as a "contribution graph": earn Mona badges for streaks |
| **Octo-Quiz** | Timed trivia game | Git/GitHub trivia; Copilot gives hints, Mona celebrates wins |
| **PR Review Simulator** | Card-swipe game (approve/request changes) | Learn code-review etiquette; Mona is the author, Copilot the reviewer |
| **Mona's Sticker Maker** | Canvas drawing + Octocat generator | Compose your own Octocat; export as PNG |

## 📋 Quick demo checklist

- [ ] The extension lives in its own folder, with an `extension.mjs` that registers a canvas.
- [ ] It installs cleanly into the Copilot App.
- [ ] It opens with `open_canvas`, and the game renders in the side panel.
- [ ] Mona collects commit squares and dodges bugs. The score is tracked and speed increases.
- [ ] The game-over screen and restart button work.
- [ ] Copilot gives an encouraging tip every 10 points.
- [ ] The game is HTML/CSS/vanilla JS inside the canvas, with no external build step.
- [ ] The power-up stretch feature is ready.
- [ ] The 90-second demo is rehearsed.

---

## 🖥️ Running the attendee website

### Prerequisites

- [Node.js](https://nodejs.org/) **22.12.0 or later** (required by Astro 7)
- npm (included with Node.js)

### Commands

Run these from the repository root:

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server at `http://localhost:4321` |
| `npm run build` | Build the static production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

### Build output

`npm run build` writes a fully static site to `dist/` (an `index.html` plus the assets in `public/`). You can deploy that folder to any static host.

`astro.config.mjs` reads two optional environment variables: `SITE_URL` (the site origin) and `BASE_PATH` (the sub-path). Locally they're unset, so the site is served from `/`. To test a sub-path build:

```bash
SITE_URL=https://arilivigni.github.io BASE_PATH=/monas-octoverse-arcade npm run build
```

### Deploying to GitHub Pages

`.github/workflows/deploy-pages.yml` builds the site and publishes it to GitHub Pages. It runs on every push to `main` and can also be started by hand from the **Actions** tab (**Run workflow**). The workflow gets the correct origin and sub-path from `actions/configure-pages`, so links and assets work at `https://<owner>.github.io/<repo>/` or on a custom domain.

One-time setup:

1. Go to **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow). The site URL appears in the workflow run summary and in **Settings → Pages**.

> **Private repository note:** GitHub Pages for private repositories requires a GitHub Pro, Team, Enterprise Cloud, or Enterprise Server plan. On GitHub Free, make the repository public to publish the site. On Enterprise Cloud you can also limit who can view the site.

The page loads no remote images, fonts, or scripts at runtime. The only JavaScript on the page is a small inline script that turns on the "Copy prompt" button, and the page works without it.

### Project structure

```text
.
├── .github/workflows/
│   └── deploy-pages.yml      # Build and deploy to GitHub Pages
├── astro.config.mjs          # Astro configuration (static output, SITE_URL/BASE_PATH support)
├── package.json              # Scripts and the single dependency: astro
├── public/
│   ├── favicon.svg           # Favicon based on the original Mona artwork
│   └── images/
│       └── hero-arcade.svg   # Original GitHub-green and Copilot-purple tile-grid hero art
└── src/
    ├── layouts/
    │   └── Base.astro        # HTML shell, metadata, favicon, skip link
    ├── pages/
    │   └── index.astro       # The attendee guide page (all workshop content)
    └── styles/
        └── global.css        # Dark event theme, responsive layout, focus and reduced-motion styles
```

### Design and accessibility notes

- Dark ink and charcoal surfaces, with GitHub green as the primary accent and purple for AI and Copilot touches. The page also uses subtle grid and contribution-graph motifs.
- The original hero artwork uses GitHub-green accents, neutral tiles, and restrained Copilot-purple details. It features Mona, a Copilot robot, a git branch, red pixel bugs, green commit squares, a terminal prompt, and a contribution-graph pattern.
- The page uses semantic HTML landmarks, headings, tables, and lists, plus a skip link.
- The navigation is keyboard-accessible, and focus states are visible.
- Layouts are responsive down to 320px wide.
- `prefers-reduced-motion` turns off animation, both on the page and inside the SVG artwork.
- Text and accent colors meet WCAG AA contrast against their backgrounds.
