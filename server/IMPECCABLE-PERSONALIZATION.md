# Your personalized Impeccable skill

This is the [Impeccable](https://impeccable.style) design skill for Claude Code, customized for:
- Building your own product (React / Next.js)
- Priority: accessibility, performance & polish over pure visual experimentation

## What was changed from the original

All changes live in `.claude/skills/impeccable/SKILL.md` (new "Project defaults" section) and `.claude/skills/impeccable/reference/routing.md` (one added sentence). Nothing else was touched — every command, script, and reference file is untouched stock Impeccable.

1. **Suggestion priority.** When you run `/impeccable` with no argument, or ask for something ambiguous, Claude will lead with `/impeccable audit`, `/impeccable harden`, `/impeccable optimize`, and `/impeccable polish` rather than the more experimental commands (`bolder`, `overdrive`, `delight`). This is only a *default suggestion order* — every command still exists and works exactly as before. Just ask for `/impeccable bolder` (or anything else) directly any time and it'll do exactly that.
2. **React/Next.js awareness.** A short note tells Claude to reach for Next.js-native patterns where relevant — `next/image`/`next/font` for performance, hydration-safe motion, Server/Client Component boundaries, and accessible patterns for common headless-UI libraries (Radix, Headless UI, React Aria).
3. **No shortcuts.** Every command is always typed as `/impeccable <command>` (e.g. `/impeccable audit`). The skill ships a `pin.mjs` script that can create bare shortcuts like `/audit` — this project is set up to *not* use that, so there's only one consistent namespace. If you ever want a shortcut later, just ask Claude to run `node .claude/skills/impeccable/scripts/pin.mjs pin audit` (or whichever command).
4. **Hook is already on.** Impeccable's design-detector hook (auto-checks accessibility/anti-patterns after every UI file edit) ships pre-wired and enabled in the stock skill via the included `.claude/settings.json` — this was already the default, nothing extra was needed here. If you ever want to turn it off, say `/impeccable hooks off`.

## How to install

1. Unzip this into the **root of your project** (the same folder as your `package.json`), so you end up with `your-project/.claude/skills/impeccable/...`.
2. Open the project in Claude Code.
3. Type `/impeccable` with no arguments any time to get a context-aware suggestion of what to run next, or go straight to a command like `/impeccable audit` or `/impeccable critique`.
4. The first time you use it in a project, run `/impeccable init` so it can capture some context about your product (used by every other command).

## Full command list

Build: `shape`, `init`, `document`, `extract`
Evaluate: `critique`, `audit`
Refine: `polish`, `bolder`, `quieter`, `distill`, `harden`, `onboard`
Enhance: `animate`, `colorize`, `typeset`, `layout`, `delight`, `overdrive`
Fix: `clarify`, `adapt`, `optimize`
Iterate: `live`

All are always invoked as `/impeccable <command>` in this setup.
