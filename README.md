# Mona’s Octoverse Arcade

**GitHub Day of Learning — 2 Hour Workshop Game Challenge · Canvas Extension Edition**

This repository holds the attendee guide for the workshop. It has two parts:

- **[Open the live attendee website](https://arilivigni.github.io/monas-octoverse-arcade/)**
- **This README**: the full workshop instructions, team rules, agenda, submission steps, judging rubric, and award rules, so you can read everything right here on GitHub.
- **An [Astro](https://astro.build) website** that presents the same guide as a responsive, accessible dark-theme page for attendees.

The site is only an attendee guide. It is not the game. Participants build the game themselves during the workshop.

> **Note:** This is an independent workshop resource. It is **not** an official GitHub Universe or GitHub event website and is not endorsed by GitHub. GitHub, GitHub Copilot, and the Octocat are trademarks of GitHub, Inc. Supplied GitHub artwork is displayed unaltered. Universe event details within the artwork are not the workshop's event details. Public-facing mascot use requires approval from GitHub's Brand & Marketing Design team under the [mascot guidelines](https://brand.github.com/graphic-elements/mascots).

---

## 🏆 The challenge

Teams build a browser game starring **Mona** the Octocat as the hero and **Copilot** as the sidekick. There is one key requirement: **the game must ship as a Copilot App canvas extension** that can be installed and launched inside the Copilot App itself. Every team starts from one prompt. What you build from it is up to you. After the workshop, judges review every submission and crown the winners.

### Start here: the prompt

Every team starts with this prompt in the Copilot App. It sets the baseline, not the limit.

> "Build a Copilot App **canvas extension** called *Mona's Octoverse Arcade*. Start from the provided canvas starter template. Inside the canvas, create a game where Mona the Octocat collects green commit-squares while dodging red bugs. Track the score, increase speed over time, and show a game-over screen with a restart button. Copilot appears as a sidekick that gives an encouraging tip every 10 points. The extension must install cleanly and open as a playable canvas. Keep it to HTML/CSS/vanilla JS inside the canvas — no external build step."

**The baseline:** Mona collects green commit squares and dodges red bugs. The score is tracked, and the speed increases over time. A game-over screen has a restart button. Copilot cheers you on with a tip every 10 points.

**Make it yours:** build what the prompt asks, then take the game somewhere only your team would:

- **Rethink the world**: levels, settings, and a story that make Mona's arcade feel like yours.
- **Invent power-ups**: shields, magnets, merge combos, or boss bugs. Surprise the judges.
- **Give Copilot personality**: make the sidekick funny, helpful, or full of surprises.
- **Find your style**: art direction, animation, and sound that make people want to keep playing.

## 👥 Teams

Up to 150 people may take part, so everyone builds in a team.

- **4–6 people per team**: minimum 4, maximum 6. Aim for 5.
- **Choose a team name** during kickoff. You'll use it on your submission.
- **One shared repository**: keep your team's extension in one repository that judges can open.

With 150 participants, teams of 5 make about 30 teams (25–38, depending on team size). If your group has fewer than 4 people, join another group. If it has more than 6, split into two teams.

## ✅ Core requirement: ship it as a canvas extension

The game can't be a loose HTML file. It must be a **Copilot canvas extension** that:

1. Lives in its own folder, with an `extension.mjs` that **registers a canvas** (the game UI).
2. Can be **installed** into the Copilot App, either with `install_extension` from a GitHub gist or repo folder, or by dropping the folder into the extensions directory.
3. **Runs** when the agent opens it with `open_canvas`. The game renders in the side panel and is playable.

Start from the **provided canvas starter template**. Build the game UI with HTML, CSS, and vanilla JavaScript inside the canvas. Don't add an external build step.

**Why this raises the bar (in a good way):** participants learn the real extension model (manifest, canvas registration, install, and launch), not just front-end code. This is the "GitHub twist" that makes the challenge platform-native.

## ⏱️ Suggested workshop structure (2 hours)

| Time | Phase |
| --- | --- |
| **0:00–0:15** | Kickoff & teams: see the target canvas extension, get the starter prompt and rubric, form teams of 4–6, and choose a team name |
| **0:15–0:25** | Every team installs & opens the **starter canvas template** (confirm it runs) |
| **0:25–1:15** | Start from the prompt, then build your team's version inside the canvas with the Copilot App |
| **1:15–1:35** | Pick a "power-up" stretch goal (leaderboard, sound, animation, theming, or your own idea) |
| **1:35–2:00** | **Record & submit:** record a demo video of up to 90 seconds and post your submission in the challenge Discussion 🏆 |

## 📮 Submitting

Before the workshop ends at 2:00, one teammate posts your team's submission as a single comment in the challenge Discussion. Your facilitator will share the link. Include:

1. **Team name**: the name your team chose at kickoff.
2. **Description**: a few sentences about your game, your creative spin, and your power-up.
3. **Demo video**: up to 90 seconds. Install the extension, open it as a canvas, and play. Attach the video to your comment or add a link.
4. **Repository link**: the repository that contains your extension folder. Make sure the judges can access it.

## 🥇 Judging and picking a winner

**How judging works:** after the workshop, judges review every submission's demo video and repository against the 25-point rubric. They choose all three award winners and announce them in the challenge Discussion. There is no audience vote.

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
| **🎉 Most Fun** | The game the judges most wanted to keep playing (Fun factor) |

> A team can win more than one category. However, if the Overall Winner also tops another category, that second award rolls to the runner-up to spread the recognition.

## 🎯 Design principles

- ✅ Ship the **rubric up front** so teams build toward what's judged.
- ✅ Provide a **known-good canvas starter** so "install & run" is achievable for everyone.
- ✅ **Reward working software**: the rubric weights "it runs" highest (8 of 25 points).
- ✅ Shared theme, personal spin: every team starts from the same prompt and builds Mona's Arcade, then makes it its own.

## 💡 Ideas for your next canvas extension

Inspiration for after the workshop — not submissions for this competition. Every team builds Mona's Arcade for this challenge, with the shared gameplay requirements and 25-point rubric.

| Idea | Concept | GitHub Twist |
| --- | --- | --- |
| **"Ask Mona" Chatbot** | A rule-based/scripted Q&A assistant UI | Mona answers Git/GitHub beginner questions; Copilot suggests follow-ups |
| **Commit Streak Tracker** | A habit/streak tracker | Themed as a "contribution graph": earn Mona badges for streaks |
| **Octo-Quiz** | Timed trivia game | Git/GitHub trivia; Copilot gives hints, Mona celebrates wins |
| **PR Review Simulator** | Card-swipe game (approve/request changes) | Learn code-review etiquette; Mona is the author, Copilot the reviewer |
| **Mona's Sticker Maker** | Canvas drawing + Octocat generator | Compose your own Octocat; export as PNG |

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
├── docs/
│   └── speaker-demo-runbook.md # Speaker-only demo runbook (not published on the site)
├── package.json              # Scripts and the single dependency: astro
├── public/
│   ├── favicon.svg           # Neutral arcade icon, not a mascot or GitHub logo
│   └── images/
│       ├── arcade-hero.png   # Supplied Mona and green-block landscape
│       ├── mona-clouds.png   # Supplied Mona and butterfly illustration
│       ├── universe-2026.png # Supplied Universe event artwork, displayed intact
│       ├── pattern-green-pink.png
│       ├── pattern-gold-orange.png
│       └── hero-arcade.svg   # Previous artwork, no longer displayed
└── src/
    ├── layouts/
    │   └── Base.astro        # HTML shell, metadata, favicon, skip link
    ├── pages/
    │   └── index.astro       # The attendee guide page (all workshop content)
    └── styles/
        └── global.css        # Dark event theme, responsive layout, focus and reduced-motion styles
```

### Design and accessibility notes

- Neutral ink and charcoal surfaces, GitHub green (`#0FBF3E`) as the primary accent, and restrained Copilot purple, following the [GitHub Brand Toolkit](https://brand.github.com/foundations/color). Bright secondary colors stay primarily in the supplied artwork.
- The five supplied images are displayed without recoloring, cropping, overlaid text, or altered event lockups. The main landscape introduces the challenge; the two supporting illustrations and geometric patterns form an inspiration gallery.
- Mascots illustrate the creative challenge, rather than serving as the site's logo or explaining instructions. Public-facing mascot use still requires GitHub Brand approval.
- The page uses semantic HTML landmarks, headings, tables, and lists, plus a skip link.
- The navigation is keyboard-accessible, and focus states are visible.
- Layouts are responsive down to 320px wide.
- `prefers-reduced-motion` turns off page animation.
- Text and accent colors meet WCAG AA contrast against their backgrounds.
