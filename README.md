# DM2008 — Programming for Interaction

This repository contains all materials, templates, and examples for **DM2008: Programming for Interaction**.  
It serves as the single reference point for in-class activities, demos, and code templates throughout the semester.

## 📁 Repository Structure

### `weekly_lessons/`

Weekly folders containing class demos and activities.

Each week corresponds to a topic covered in class:
| Folder | Focus |
|---------|--------|
| `week_01` | Introduction to Creative Coding and p5.js |
| `week_02` | Conditionals and Loops |
| `week_03` | Arrays and Functions |
| `week_04` | Object-Oriented Programming (Part 1) |
| `week_05` | Object-Oriented Programming (Part 2) |
| `week_06` | Media Loading |
| `week_08` | Arduino Basics |

Within each week, you’ll find folders for specific **activities**, **readings**, or **mini-projects** used during class.

> ⚠️ Weeks 09–13 focus on Arduino, simple UIs, and final projects — materials will be added progressively.
> ⚠️ Week 7 involves this repo and the [Notion Companion](https://creative-coding.notion.site/DM2008-Companion-247b682052028078a36bdae76f4042d2), thus there is intentionally no folder catered for it.

---

### `starter_templates/`

Clean, ready-to-use project templates for your own sketches.

- **p5-only/** → browser-based sketches

  - `fixed-size/` : fixed canvas dimensions
  - `window-size/` : responsive full-window canvas

- **p5-arduino/** → templates that include serial communication setup between Arduino and p5.js

Each folder includes its own `README.md` explaining how to use or modify the template.

---

### `weekly_lessons/libraries/`

Local copies of required p5.js libraries for offline use:

- `p5.min.js`
- `p5.sound.min.js`

These are already linked in the starter templates.

---

### `LICENSE`

Contains licensing information for instructional use.  
All original teaching materials © jo+kapi / Nanyang Technological University, Singapore.

## 🧭 How to Use

You can access the course materials in two ways:

### Option 1 — Using GitHub Desktop (recommended for beginners)

1. Open **GitHub Desktop**.
2. Click **File → Clone Repository → URL**.
3. Paste this link:

`https://github.com/jo-kapi/DM2008-Materials.git`

4. Choose where to save the folder on your computer (e.g., `Documents/DM2008/`).
5. Click **Clone**.
6. Once cloned, open the folder in **VS Code** and use **Live Server** to preview sketches in the browser.

> 🪄 Tip: Use GitHub Desktop to **commit** and **push** your own project progress later in the semester (Week 7 onward).

---

### Option 2 — Using Command Line (for those comfortable with Terminal)

```bash
git clone https://github.com/jo-kapi/DM2008-Materials.git
```

Then open the cloned folder in **VS Code**:

```bash
cd DM2008-Materials
code .
```

Launch **Live Server** to preview sketches in your browser.

## 🧩 Tooling Overview

• **Editor:** VS Code + Live Server
• **Version Control:** GitHub Desktop
• **Libraries:** p5.js, p5.sound
• **Physical Computing:** Arduino Uno (Weeks 8–9)
• **AI Assistants:** ChatGPT, Claude, or GitHub Copilot (introduced mid-semester)

## 📚 References

• _Getting Started with p5.js_ — McCarthy, Reas, Fry (O’Reilly, 2015)
• _The Nature of Code_ — Daniel Shiffman (No Starch Press, 2024)
• _Code as a Creative Medium_ — Levin & Brain (MIT Press, 2021)

## 🧑‍🏫 About This Course

**DM2008: Programming for Interaction** introduces coding as a creative practice for interaction & game designers.
You’ll learn to think computationally, experiment fearlessly, and build interactive experiences that connect screen, sound, and sensor.

The course emphasizes:
• Playful experimentation
• Confidence through process and iteration
• Embracing debugging and “productive confusion” as part of learning

The accompanying slides to this course can be [viewed here](https://slides.com/joanneho/dm2008-s1-2526/fullscreen).

---

© jo+kapi | Nanyang Technological University, Singapore

For teaching and learning purposes only.
