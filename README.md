# RoguePlanet JavaScript Adventure Log

![Beginner Friendly](https://img.shields.io/badge/Beginner-Friendly-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-Node.js-yellow)
![OSRS Inspired](https://img.shields.io/badge/OSRS-Inspired-green)
![Quest Based](https://img.shields.io/badge/Learning-Quest_Based-blue)
![Private Sandbox Automation](https://img.shields.io/badge/Automation-Private_Sandbox-purple)

Welcome to the RoguePlanet learning dashboard: an Old School RuneScape-inspired quest journal for learning JavaScript fundamentals step by step.

This project is for learning JavaScript automation architecture in personally owned, private, authorized, or sandboxed environments only. It does not target public OSRS cheating, anti-cheat evasion, or rule-breaking automation.

## Adventure Status

<!-- PROGRESS:START -->
### 🧙 Player Card

| Stat | Value |
|------|-------|
| Player Name | JavaScript Apprentice |
| Current Rank | Tutorial Island Coder |
| Current Level | 1 |
| Total XP | 0 |
| Quest Points | 0 |
| Current Area | Tutorial Island |
| Current Goal | Learn JavaScript fundamentals |

### ❤️ HP Bar

HP represents learning stamina. Completing quests restores HP. Getting stuck or failing tests can reduce HP in [PROGRESS.md](PROGRESS.md), but only as a fun reminder to rest, retry, and keep going.

HP: 10 / 10

[██████████] 100%

### ⭐ XP Bar

XP: 0 / 100

[░░░░░░░░░░] 0%

### 🏆 Quest Points

Quest Points: 0

Small quest completed: +1 Quest Point

Boss fight completed: +3 Quest Points

Full module completed: +5 Quest Points

### Current Active Quest

**Current Quest:** Quest 01: Create Your First Player Stat

**Objective:** Learn how to store and print player stats using JavaScript variables.

**Reward:** 25 XP, 1 Quest Point
<!-- PROGRESS:END -->

## 📜 Quest Log

| Status | Quest | Concept | XP | Quest Points |
|--------|-------|---------|----|--------------|
| Not Started | [Quest 01: Create Your First Player Stat](quests/quest-01-variables-player-stats/README.md) | Variables | 25 | 1 |

Status meanings:

- Not Started: the quest is unlocked, but you have not begun yet.
- In Progress: you are actively working on the quest.
- Completed: you finished the challenge and updated your progress.
- ⚔️ Boss Fight: a larger challenge that combines several quests.

## JavaScript Skills

| Skill | Level | XP | Description |
|------|-------|----|-------------|
| Variables | 1 | 0 | Store player stats and values |
| Conditions | 1 | 0 | Make decisions |
| Loops | 1 | 0 | Repeat actions |
| Functions | 1 | 0 | Reusable actions |
| Arrays | 1 | 0 | Inventory systems |
| Objects | 1 | 0 | Players, NPCs, items |
| Timers | 1 | 0 | Game ticks |
| Events | 1 | 0 | React to changes |
| State Machines | 1 | 0 | 🧠 Automation brains |
| Plugin Architecture | 1 | 0 | start, stop, onTick |

## 🗺️ World Map Progress

### Tutorial Island

- Quest 01: Variables
- Quest 02: Conditions
- Quest 03: Loops

### Lumbridge

- Quest 04: Functions
- Quest 05: 🎒 Arrays
- Quest 06: Objects

### Varrock

- Quest 07: Timers
- Quest 08: Events
- Quest 09: JSON Configs

### Falador

- Quest 10: 🧠 State Machines
- Quest 11: Task Queues
- Quest 12: Plugin Architecture

### Boss Dungeon

- ⚔️ Boss Fight 01: Survive the Goblin
- ⚔️ Boss Fight 02: Automate Woodcutting Sandbox
- ⚔️ Boss Fight 03: Build a Mini Plugin System

## Files In This Learning Dashboard

| File | What It Is For |
|------|----------------|
| [README.md](README.md) | The main player profile, quest journal, roadmap, and dashboard |
| [PROGRESS.md](PROGRESS.md) | Your human-written learning log: completed quests, mistakes, struggles, and next steps |
| [progress.json](progress.json) | Machine-readable progress data used by the update script |
| [scripts/update-progress.js](scripts/update-progress.js) | Reads `progress.json` and refreshes the generated dashboard section in `README.md` |
| [quests/quest-01-variables-player-stats/README.md](quests/quest-01-variables-player-stats/README.md) | The first bite-sized lesson |
| [quests/quest-01-variables-player-stats/player-stats.js](quests/quest-01-variables-player-stats/player-stats.js) | Your starter JavaScript file for Quest 01 |
| [package.json](package.json) | Defines beginner-friendly commands you can run with `npm run ...` |

## How To Run Things

Run Quest 01:

```powershell
npm run quest01
```

This command runs:

```powershell
node quests/quest-01-variables-player-stats/player-stats.js
```

`node` means "use Node.js to run this JavaScript file."

Refresh the dashboard progress section:

```powershell
npm run progress
```

This command runs:

```powershell
node scripts/update-progress.js
```

The script reads [progress.json](progress.json), calculates HP and XP bars, then updates the marked progress section in this README.

## XP Rules

- Easy Quest: 25 XP
- Medium Quest: 50 XP
- Hard Quest: 100 XP
- Boss Fight: 250 XP

## Rules Of The Adventure

- Learn slowly and clearly.
- Try the challenge before asking for a full solution.
- Use hints in order: small hint, bigger hint, concept explanation, partial code, full solution.
- Keep automation practice inside personally owned, authorized, private, or sandboxed environments.
- Do not build or request anti-cheat evasion, stealth, detection bypass, or rule-breaking automation.
