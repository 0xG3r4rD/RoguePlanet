# Quest 01: Create Your First Player Stat

Difficulty: Easy

Reward: **25 XP** and **1 Quest Point**

## 1. Quest Title

Quest 01: Create Your First Player Stat

## 2. Objective

You will learn how to store and print a player stat using JavaScript.

By the end, you should know:

- what JavaScript is
- what Node.js is
- what a `.js` file is
- what a variable is
- what `let` means
- what `const` means
- what `console.log()` does
- how to run the file

## 3. Tiny Lecture

JavaScript is a programming language. A programming language is a way to give clear instructions to a computer.

Node.js is a program that runs JavaScript on your computer from the terminal.

A `.js` file is a text file that contains JavaScript code. The `.js` ending tells you, Node.js, and your editor that the file contains JavaScript.

A variable is a named box that stores a value.

```js
let hitpoints = 10;
```

Read that as:

"Create a box named `hitpoints`, and put the number `10` inside it."

Use `let` when the value might change later.

Use `const` when the value should stay the same during the script.

`console.log()` prints information to the terminal.

```js
console.log(hitpoints);
```

Read that as:

"Show the value stored in `hitpoints`."

## 4. OSRS Analogy

Your player has stats like Hitpoints, Attack, Strength, and Defence.

In code, a variable can hold one of those stat values.

```js
let hitpoints = 10;
```

That is like saying:

"My player currently has 10 Hitpoints."

Your player name usually stays the same during a tiny script, so it can be a `const`.

```js
const playerName = "JavaScript Apprentice";
```

That is like writing your character name on Tutorial Island.

## 5. Starter Code

Work in this file:

[player-stats.js](player-stats.js)

The file already runs, but it is not finished. Your quest is to change it yourself.

## 6. Challenge

Open [player-stats.js](player-stats.js), then complete these steps:

1. Change `playerName` from `"Adventurer"` to any name you like.
2. Change `hitpoints` from `10` to `25`.
3. Create a new `let` variable named `attackLevel` with the value `1`.
4. Print the attack level using:

```js
console.log("Attack:", attackLevel);
```

## 7. Tests And Checks

Run Quest 01:

```powershell
npm run quest01
```

Expected output:

```text
Player: YourChosenName
Hitpoints: 25
Attack: 1
```

Your player name can be different. The Hitpoints and Attack lines should match exactly.

If Node.js shows an error, read the first error line slowly. It usually tells you the file and line number where JavaScript got confused.

## 8. XP Reward

When your output matches the expected output, award yourself:

- **25 XP**
- **1 Quest Point**

Then update:

- [../../PROGRESS.md](../../PROGRESS.md)
- [../../progress.json](../../progress.json)

After that, refresh the dashboard:

```powershell
npm run progress
```

## 9. Checkpoint Quiz

Answer these in your own words:

1. What is JavaScript?
2. What does Node.js help you do?
3. What is a variable?
4. When would you use `let`?
5. What does `console.log()` do?

## 10. Boss Fight

No boss fight yet.

Every 5 completed Quests unlocks a Boss Fight. Finish more Tutorial Island quests before entering the Boss Dungeon.

## Hint System

If you get stuck, ask for a hint. Hints unlock in this order:

1. Small hint
2. Bigger hint
3. Explanation of the concept
4. Partial code
5. Full solution only after you ask for it or try first
