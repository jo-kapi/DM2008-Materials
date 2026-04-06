# Starter Templates

This folder contains two ready-to-use project templates for your own sketches.  
Pick the one that matches what you're building, duplicate it, rename it, and start coding.

> **⚠️ Do not code directly inside these template folders.**
>
> Always **duplicate** the template and rename the copy before making any changes. This keeps the originals clean for future use.

---

## 📁 Templates Overview

| Folder        | Use When                                                              |
| ------------- | --------------------------------------------------------------------- |
| `p5-only/`    | You're building a browser-based sketch with no physical hardware      |
| `p5-arduino/` | You're connecting an Arduino to your sketch via Serial (p5.webserial) |

---

## 🎨 `p5-only/`

A clean starting point for any browser-based p5.js sketch.

### Folder Structure

```
p5-only/
├── index.html          ← Open this with Live Server to run your sketch
├── sketch.js           ← Your main p5.js code goes here
├── js/
│   ├── p5.min.js       ← p5.js library (do not edit)
│   ├── p5.sound.min.js ← p5.sound library (do not edit)
│   └── helper.js       ← Helper utilities (do not edit)
├── css/
│   ├── style.css       ← Customise page background colour and canvas shadow here
│   └── normalize.css   ← Browser reset styles (do not edit)
├── assets/
│   └── dog.jpg         ← Example asset — replace with your own
└── documentation/
    └── project-still-01.jpg ← For documenting your project (screenshots, stills)
```

### Getting Started

1. **Duplicate** the `p5-only/` folder and **rename** it to your project name.
2. Open the folder in **VS Code**.
3. Launch **Live Server** on `index.html` to preview your sketch in the browser.
4. Write your code in `sketch.js`.

### What's Included

- **`sketch.js`** — Pre-set with a `setup()` and `draw()` function and a 400×400 canvas. Change `createCanvas(400, 400)` to `createCanvas(windowWidth, windowHeight)` for a fullscreen canvas.
- **`helper.js`** — Handles two things automatically. Don't edit it unless you know what you're doing:
  - **Auto-resize:** If your canvas is fullscreen, it will resize correctly when the browser window changes size.
  - **Cursor hide:** The cursor hides automatically after 5 seconds of inactivity — useful for interactive installations.
- **`style.css`** — The page background colour and canvas drop shadow are controlled via CSS variables at the top of this file. Edit these to customise the look of your page.
- **`assets/`** — Place any images, sounds, or other media here. The included `dog.jpg` is just an example — delete or replace it.
- **`documentation/`** — Use this folder to store screenshots or stills of your finished project. The included `project-still-01.jpg` is a placeholder.

---

## 🔌 `p5-arduino/`

Everything in `p5-only/`, plus the setup needed to receive Serial data from an Arduino via USB.

### Folder Structure

```
p5-arduino/
├── index.html          ← Open this with Live Server to run your sketch
├── sketch.js           ← Your main p5.js code goes here
├── js/
│   ├── p5.min.js       ← p5.js library (do not edit)
│   ├── p5.sound.min.js ← p5.sound library (do not edit)
│   ├── p5.webserial.js ← Serial communication library (do not edit)
│   └── helper.js       ← Helper utilities including Connect button (do not edit)
├── css/
│   ├── style.css       ← Customise page background colour and canvas shadow here
│   └── normalize.css   ← Browser reset styles (do not edit)
├── assets/
│   └── dog.jpg         ← Example asset — replace with your own
├── documentation/
│   └── project-still-01.jpg ← For documenting your project (screenshots, stills)
└── arduino/
    └── sketch/
        └── sketch.ino  ← Arduino sketch — upload this to your board
```

### Getting Started

1. **Duplicate** the `p5-arduino/` folder and **rename** it to your project name.
2. Open the folder in **VS Code**.
3. Open `arduino/sketch/sketch.ino` in the **Arduino IDE** and upload it to your board.
4. Launch **Live Server** on `index.html`.
5. Click the **Connect Arduino** button that appears in the browser to open the Serial port.
6. Write your p5.js code in `sketch.js`, using the incoming `serialData` variable.

### What's Different from `p5-only/`

- **`p5.webserial.js`** — Included in `js/` and linked in `index.html`. Handles Serial communication between the browser and Arduino.
- **`sketch.js`** — Pre-configured with Serial setup. Key things to know:
  - `port` and `createSerial()` are set up in `setup()` — **do not remove or rename `port`**.
  - In `draw()`, incoming data is read with `port.readUntil("\n")` and stored in `serialData`.
  - Use `float(serialData)` to convert the incoming string to a number before using it in calculations.
  - The `connectBtnClicked()` function at the bottom handles opening/closing the port — **do not remove it**.
- **`helper.js`** — In addition to auto-resize and cursor-hide behaviour, this version also:
  - Automatically injects a **Connect Arduino** button into the page.
  - Updates the button label to reflect connection status (Connecting… / Disconnect Arduino).
  - Fades the button out after 5 seconds of mouse inactivity — it reappears on mouse movement.
- **`arduino/sketch/sketch.ino`** — A minimal Arduino sketch that sends a value over Serial once per loop. By default it sends a random number (0–1023) as a placeholder. Replace `random(1024)` with a real sensor read when you're ready. Make sure the baud rate in the `.ino` file matches `port.open()` in `sketch.js` — both are set to `9600` by default.

---

## 🧩 Libraries Reference

| Library           | Included In        | Purpose                           |
| ----------------- | ------------------ | --------------------------------- |
| `p5.min.js`       | Both templates     | Core p5.js library                |
| `p5.sound.min.js` | Both templates     | Audio playback and analysis       |
| `p5.webserial.js` | `p5-arduino/` only | Serial communication with Arduino |

All libraries are bundled locally — no internet connection required.

---

© jo+kapi | Nanyang Technological University, Singapore  
For teaching and learning purposes only.
