## Purpose

This project is a small static single-page site that renders a stylized "envelope/letter" using HTML and CSS. These instructions exist to help an AI coding assistant be immediately productive with edits, small feature additions, and styling fixes.

## Big picture

- Single-page static site: primary files are `index.html` and `main.css` at the repository root.
- No build step, package manager, or server-side code present.
- Visual behavior is driven by CSS (hover transforms and keyframe animation). Search for class selectors like `.envelope`, `.top`, `.letter`, and `.text` in `main.css` to understand interactions.

## Contract (what edits should do)

- Inputs: small HTML/CSS changes, optional assets added under an `assets/` directory.
- Outputs: updated `index.html` and/or `main.css` producing a visually correct envelope/letter effect in a browser.
- Error modes: visual regressions (layout/transform issues) are the main risk — keep changes minimal and test in a browser viewport.

## Quick dev workflows (how to preview and verify)

- No build tools. Open `index.html` directly in a browser to preview.
- Recommended: use VS Code Live Server or the browser's "Open File" action for fast iteration.
- When changing CSS, refresh the browser to see updates. Mobile/responsive testing: adjust viewport width in devtools.

## Project-specific patterns and gotchas

- Hover-driven animation: `.envelope:hover .top` rotates the envelope flap; `.envelope:hover .letter` translates the letter. Keep transform-origin and z-index ordering in mind when editing these rules.
- The HTML links the stylesheet as `<link rel="stylesheet" href="main.css">`. Keep this relative path unless you add an `assets/` subfolder and update the link accordingly.
- There is currently no JavaScript file. If a small interactive behavior is needed, add a new script (for example `scripts/main.js`) and include it before `</body>`.

## Examples from this repo (where to look)

- Flap rotation on hover: see the `.top` rule and the `.envelope:hover .top` selector in `main.css`.
- Letter lift: see `.envelope:hover .letter`.
- Animated heart: keyframes `@keyframes untoldcoding` and the `.heart` rules in `main.css`.

## When to avoid changes

- Avoid large refactors that split this into many files unless you add a README and a clear preview workflow. This repository's simplicity implies small, focused edits.

## Adding assets or scripts

- Create an `assets/` directory for images and update paths in `index.html` accordingly (e.g., `assets/img.png`).
- If adding JS, keep it small and local. Example: add `scripts/main.js` and include `<script src="scripts/main.js"></script>` just before `</body>`.

## Commit/PR guidance

- Make focused commits (one visual change per commit) and include a short description like: "Style: tweak envelope flap transform" or "Add assets folder + heart SVG".

## Questions for the maintainer

- Are you intending to add JavaScript or keep this purely CSS/HTML? If you plan to add more features, I can expand these instructions to include a basic dev server, linting, and test harness.

---
If anything here is missing or unclear, tell me what you'd like the AI assistant to prioritize (styling, accessibility, new content), and I'll iterate.
