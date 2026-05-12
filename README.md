# Sledding Game Wiki

Astro static site for a fan-made Sledding Game field guide. The structure is
inspired by <https://sleddinggame.wiki/>, while the visual design and guide copy
in this repository are original.

## Pages

- `/` - homepage, quick stats, route planning, and guide index
- `/guide` - starter guide and first-session flow
- `/characters` - roster selection notes
- `/money` - coin farming methods and spending strategy
- `/minigames` - mini-game practice guide
- `/secrets` - spoiler-light hidden item workflow
- `/achievements` - 37-goal completion tracker outline
- `/changelog` - update and wiki maintenance notes

## Commands

Use `npm.cmd` in PowerShell if script execution policy blocks `npm`.

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run preview
```

The Astro dev server usually starts at <http://localhost:4321>.

## Project Structure

```text
src/
├── data/
│   └── wiki.ts
├── layouts/
│   └── Layout.astro
└── pages/
    ├── [slug].astro
    └── index.astro
```

## Notes

- This is an unofficial guide site.
- Verify live gameplay details with the game, Steam page, and reference wiki
  before publishing factual updates.
- Build output is generated in `dist/`.
