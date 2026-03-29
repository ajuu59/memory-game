# AGENTS.md

## Project overview
This repository contains a simple HTML5 memory game for kids.

Main goals:
- Keep the game easy to understand
- Keep the code beginner-friendly
- Keep it runnable directly in the browser
- Support both desktop and mobile browsers
- Support English and German UI text

The game should work well on:
- iPhone Safari
- Android Chrome
- desktop browsers

## Tech stack
- HTML5 - use https://github.com/knadh/oat UI as much as possible
- CSS3
- Vanilla JavaScript
- No framework
- No backend
- No build step

## Core product idea
Build a bilingual memory matching game for kids.

Possible learning themes:
- flags
- countries
- capitals
- animals
- shapes

Default preferred theme:
- world flags / countries

## Architecture rules
- Prefer the simplest possible structure.
- The app should run by opening `index.html` directly in a browser.
- Avoid adding frameworks such as React, Vue, Angular, Svelte, or Next.js unless explicitly requested.
- Avoid adding Node-based tooling unless explicitly requested.
- Keep the app lightweight and easy to host on GitHub Pages.
- Prefer a single-file implementation first unless splitting files clearly improves maintainability.

## Preferred file structure
For initial implementation:
- `index.html`

If the project grows, it may be split into:
- `index.html`
- `css/style.css`
- `js/app.js`
- `js/data.js`
- `assets/`

Do not split files unless there is a clear benefit.

## Functional requirements
The game should support:
- start game
- shuffled cards
- flip card interaction
- match checking
- matched cards stay open
- non-matching cards flip back
- moves counter
- win state
- restart / play again
- language switch: English / German
- responsive mobile layout

## Educational requirements
If educational content is used:
- keep facts simple and child-friendly
- use clear country / capital / flag data
- avoid overly difficult content by default
- prefer a small clean dataset first, then extend

## Language rules
- All user-facing text must support both English and German.
- Any newly added visible text must include translations for both languages.
- Keep wording short, clear, and child-friendly.
- Store translations centrally in one object.
- Do not hardcode visible text in many places if it can be centralized.

## Mobile compatibility rules
The app must work well on phones and tablets.

Requirements:
- large tap targets
- responsive layout
- no hover-only interactions
- readable text on small screens
- reliable input behavior on iPhone Safari
- use standard event listeners instead of fragile inline handlers when reliability matters
- avoid interactions that depend on mouse-only behavior

## UX rules
- Design for kids.
- Keep the interface colorful, simple, and friendly.
- Use large cards and buttons.
- Keep the game flow obvious.
- Show clear success and error feedback.
- Avoid clutter and unnecessary menus.
- Keep animations subtle and lightweight.

## Code style
- Use clear variable and function names.
- Keep functions small and easy to read.
- Prefer simple logic over clever abstractions.
- Avoid deeply nested code.
- Use constants for reusable configuration.
- Keep translation strings centralized.
- Keep game state easy to trace.

## Game state expectations
Typical state may include:
- card list
- flipped cards
- matched cards
- move count
- lock state while checking a pair
- selected language
- selected difficulty

Keep state simple and explicit.

## Data rules
- Use a simple array of objects for game items.
- Keep data local in the repo.
- Do not fetch remote APIs unless explicitly requested.
- Prefer offline-friendly behavior.
- Keep data easy to edit and expand.

## Difficulty rules
Preferred levels:
- Easy
- Medium
- Hard

Examples:
- Easy: 4 pairs
- Medium: 6 pairs
- Hard: 8 pairs

Default to Easy unless specified otherwise.

## Performance rules
- Keep startup fast.
- Avoid large assets and dependencies.
- Avoid heavy animation libraries.
- Keep the game smooth on low-end mobile devices.
- Prefer CSS transitions and simple DOM updates.

## Hosting rules
The app should remain compatible with static hosting, especially GitHub Pages.
Do not introduce server-side dependencies unless explicitly requested.

## Testing checklist
After making changes, verify:
1. `index.html` opens directly in a browser
2. cards render correctly
3. shuffle works
4. only valid card flips are allowed
5. matching logic works
6. move counter updates correctly
7. win state appears correctly
8. restart works
9. English UI works
10. German UI works
11. mobile layout works on narrow screens
12. iPhone-friendly language switching works reliably

## Change guidelines
When making changes:
- preserve simplicity
- preserve bilingual support
- preserve mobile compatibility
- preserve static-hosting compatibility
- avoid unnecessary rewrites
- make the smallest clean change that solves the problem

## Safe enhancements
Preferred future enhancements:
- sounds for match / mismatch
- timer
- score or stars
- confetti on win
- best score with localStorage
- more datasets
- flags / countries / capitals mode
- installable PWA support

## Avoid unless requested
- backend
- authentication
- database
- analytics
- multiplayer
- admin panel
- large third-party UI libraries
- TypeScript migration
- complex state management

## Output expectations for Codex
When modifying code:
- explain briefly what changed
- keep edits minimal
- preserve existing behavior unless intentionally changing it
- mention any mobile-specific fixes
- mention any translation updates
- prefer beginner-friendly code