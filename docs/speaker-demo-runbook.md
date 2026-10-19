# Speaker demo runbook — Mona’s Octoverse Arcade

> **Speaker only.** This runbook is for the challenge speaker. It isn't linked from the attendee site, and the Astro build doesn't publish it.

Use this runbook to demo a **basic example** of the canvas extension during kickoff (**0:00–0:15**). The demo shows teams what “done” looks like: an extension that installs, opens as a canvas, and plays the baseline game from the starter prompt. Keep the demo basic, so teams have room to be creative.

**Target length:** about 6 minutes, leaving time for teams, the prompt, and the rubric.

---

## Before the session

### The day before

- [ ] Build the basic example from the starter prompt. Don't add creative extras beyond one simple power-up.
- [ ] Publish the example extension folder to a GitHub gist or a repository folder that you can install from.
- [ ] Do a clean install rehearsal: remove the example, install it again, and open it as a canvas.
- [ ] Record a backup demo video of up to 90 seconds. It also serves as the example submission video.
- [ ] Create the challenge Discussion. In this repository, Discussions must be enabled first in **Settings → General → Features**. Make sure participants can access the repository or Discussion where they'll submit.
- [ ] Add your example submission comment to the Discussion: team name, description, demo video, and repository link.
- [ ] Have the Discussion link ready to share, such as in a slide, a QR code, or chat.
- [ ] Confirm the judges, their access to submissions, and when you'll announce the winners.

### Thirty minutes before

- [ ] Sign in to the Copilot App, and close unrelated sessions and notifications.
- [ ] Increase the font size and zoom so the side panel can be read from the back of the room.
- [ ] Open these tabs: the attendee site, the example extension folder, the challenge Discussion, and the backup video.
- [ ] Remove the example extension so you can install it live. Keep a pre-installed fallback copy available in another session if possible.
- [ ] Have the install URL copied and ready.

---

## Demo flow

Each step maps to an item from the original demo checklist.

| # | Time | Step | Checklist item it proves |
| --- | --- | --- | --- |
| 1 | 0:45 | Show the extension folder | Own folder with `extension.mjs` that registers a canvas |
| 2 | 0:30 | Show that there's no build step | HTML/CSS/vanilla JS inside the canvas |
| 3 | 0:45 | Install the extension | Installs cleanly into the Copilot App |
| 4 | 0:30 | Open the canvas | Opens with `open_canvas` and renders in the side panel |
| 5 | 1:00 | Play the core loop | Mona collects commits and dodges bugs. The score is tracked, and speed increases |
| 6 | 0:30 | Reach 10 points | Copilot gives an encouraging tip every 10 points |
| 7 | 0:30 | Show one power-up | Power-up stretch feature |
| 8 | 0:30 | Lose and restart | Game-over screen and restart button work |
| 9 | 0:45 | Show the submission | Demo video and Discussion submission |

### 1. Show the extension folder

**Do:** Open the example extension folder, and point to `extension.mjs`.

**Say:** “Your whole game lives in one folder. `extension.mjs` registers a canvas, which is the UI the Copilot App opens in the side panel.”

**Show:** The canvas registration in `extension.mjs`.

### 2. Show that there's no build step

**Do:** Scroll through the game's HTML, CSS, and JavaScript.

**Say:** “It's plain HTML, CSS, and vanilla JavaScript inside the canvas. There's no bundler and no build step, so you can spend your time on the game.”

### 3. Install the extension

**Do:** In the Copilot App, ask the agent to install the extension from your gist or repository folder URL:

```text
Install the canvas extension from <gist-or-repo-folder-url>
```

**Say:** “Teams can install from a gist or a repository folder, or drop the folder into the extensions directory. This is the same path the judges will see in your video.”

**Show:** The successful install confirmation.

### 4. Open the canvas

**Do:** Ask the agent to open the game:

```text
Open the Mona's Octoverse Arcade canvas
```

**Say:** “The agent opens it with `open_canvas`, and the game renders right here in the side panel.”

### 5. Play the core loop

**Do:** Collect a few green commit squares, dodge a red bug, and let the speed increase.

**Say:** “This is the baseline from the prompt: collect commits, dodge bugs, track the score, and increase the speed over time.”

### 6. Reach 10 points

**Do:** Keep playing until Copilot's tip appears.

**Say:** “Every 10 points, Copilot shows up as your sidekick with an encouraging tip. How Copilot sounds and behaves is up to your team.”

### 7. Show one power-up

**Do:** Trigger the example's single power-up.

**Say:** “In the power-up block, every team adds a stretch feature. This is worth points under ‘Wow / stretch.’ Surprise the judges.”

### 8. Lose and restart

**Do:** Hit a bug on purpose, show the game-over screen, and select **Restart**.

**Say:** “A clear game-over and restart flow counts toward Polish.”

### 9. Show the submission

**Do:** Open the challenge Discussion and your example comment.

**Say:** “Before 2:00, one teammate posts a single comment with your team name, description, demo video of up to 90 seconds, and repository link. Judges review after the workshop and announce the winners here.”

---

## Hand-off to teams

After the demo, finish the kickoff:

1. **Show the starter prompt** on the attendee site, and remind teams that it sets the baseline, not the limit.
2. **Form teams:** 4–6 people per team, aiming for 5. Groups with fewer than 4 people join another group. Groups with more than 6 split.
3. **Choose a team name** before the starter install block begins at 0:15.
4. **Show the rubric** (25 points) and the three judge-selected awards: Overall Winner, Best Design, and Most Fun. There is no audience vote.
5. **Share the Discussion link** and the 2:00 submission deadline.

---

## Fallbacks

| Problem | Fallback |
| --- | --- |
| Install fails | Ask the agent to inspect the extension and show its log. If it's not quick to fix, switch to the pre-installed copy. |
| Canvas doesn't appear after install | Ask the agent to reload extensions, then open the canvas again. |
| Game doesn't render or freezes | Close and reopen the canvas. If it still fails, play the backup video. |
| Network or Wi-Fi drops | Play the backup video, and narrate the same steps. |
| Running long | Skip steps 2 and 7, and keep steps 3–6. Installing and playing the game are what teams need to see. |

---

## Timing during the session

| Time | Your cue |
| --- | --- |
| **0:15** | Teams should be named and installing the starter template. |
| **1:15** | Announce the power-up block. |
| **1:35** | Announce record and submit, and share the Discussion link again. |
| **1:50** | Give a 10-minute warning. |
| **2:00** | Close submissions. Remind everyone that winners will be announced in the Discussion. |
