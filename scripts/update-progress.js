// Progress Dashboard Updater
// Run this file with:
// npm run progress
//
// This script reads progress.json, calculates HP and XP bars,
// then updates the generated section inside README.md.

const fs = require("node:fs");
const path = require("node:path");

// __dirname is the folder this script lives in: scripts/
// ".." means "go up one folder" to the repository root.
const repoRoot = path.join(__dirname, "..");

// Build full file paths so the script works no matter where you run it from.
const progressPath = path.join(repoRoot, "progress.json");
const readmePath = path.join(repoRoot, "README.md");

// These markers tell the script which README section it owns.
// Everything between the markers can be regenerated.
const startMarker = "<!-- PROGRESS:START -->";
const endMarker = "<!-- PROGRESS:END -->";

// Read progress.json as text, then turn that text into a JavaScript object.
const progressText = fs.readFileSync(progressPath, "utf8");
const progress = JSON.parse(progressText);

// Read the README as text so we can replace one section.
const readme = fs.readFileSync(readmePath, "utf8");

// A percentage tells us how full a bar should be.
// Example: 5 HP out of 10 HP is 50%.
function calculatePercentage(currentValue, maximumValue) {
  if (maximumValue <= 0) {
    return 0;
  }

  const rawPercentage = (currentValue / maximumValue) * 100;

  // Keep the number between 0 and 100 so the bar never breaks.
  return Math.max(0, Math.min(100, Math.round(rawPercentage)));
}

// Make a markdown-style progress bar with 10 slots.
// Filled slots use █ and empty slots use ░.
function makeProgressBar(percentage) {
  const totalSlots = 10;
  const filledSlots = Math.round((percentage / 100) * totalSlots);
  const emptySlots = totalSlots - filledSlots;

  return `[${"█".repeat(filledSlots)}${"░".repeat(emptySlots)}] ${percentage}%`;
}

const hpPercentage = calculatePercentage(progress.hp, progress.maxHp);
const xpPercentage = calculatePercentage(progress.xp, progress.xpToNextLevel);

const hpBar = makeProgressBar(hpPercentage);
const xpBar = makeProgressBar(xpPercentage);

// This is the new README dashboard section.
// Template strings use backticks and can contain multiple lines.
const generatedSection = `${startMarker}
### 🧙 Player Card

| Stat | Value |
|------|-------|
| Player Name | ${progress.playerName} |
| Current Rank | ${progress.rank} |
| Current Level | ${progress.level} |
| Total XP | ${progress.xp} |
| Quest Points | ${progress.questPoints} |
| Current Area | ${progress.currentArea} |
| Current Goal | Learn JavaScript fundamentals |

### ❤️ HP Bar

HP represents learning stamina. Completing quests restores HP. Getting stuck or failing tests can reduce HP in [PROGRESS.md](PROGRESS.md), but only as a fun reminder to rest, retry, and keep going.

HP: ${progress.hp} / ${progress.maxHp}

${hpBar}

### ⭐ XP Bar

XP: ${progress.xp} / ${progress.xpToNextLevel}

${xpBar}

### 🏆 Quest Points

Quest Points: ${progress.questPoints}

Small quest completed: +1 Quest Point

Boss fight completed: +3 Quest Points

Full module completed: +5 Quest Points

### Current Active Quest

**Current Quest:** ${progress.currentQuest}

**Objective:** Learn how to store and print player stats using JavaScript variables.

**Reward:** 25 XP, 1 Quest Point
${endMarker}`;

const startIndex = readme.indexOf(startMarker);
const endIndex = readme.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find the progress markers in README.md.");
  console.error(`Expected markers: ${startMarker} and ${endMarker}`);
  process.exit(1);
}

const beforeGeneratedSection = readme.slice(0, startIndex);
const afterGeneratedSection = readme.slice(endIndex + endMarker.length);
const updatedReadme = beforeGeneratedSection + generatedSection + afterGeneratedSection;

fs.writeFileSync(readmePath, updatedReadme, "utf8");

console.log("Progress dashboard updated.");
console.log(`HP: ${progress.hp} / ${progress.maxHp} ${hpBar}`);
console.log(`XP: ${progress.xp} / ${progress.xpToNextLevel} ${xpBar}`);
