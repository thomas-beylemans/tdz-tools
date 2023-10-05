# tdz-tools

## Goal

This project is a set of tools to have with me my personal tool library. But actually, it's also for me a way to learn how to create and maintain an npm package.

## Installation

Installez `tdz-tools` en utilisant npm :

```bash
npm install tdz-tools
```
Or with Yarn:

```bash
yarn add tdz-tools
```
Or with pnpm:
```bash
pnpm add tdz-tools
```
## Usage

### isoToFlagEmoji
<details>
<summary>Converts a string to a sequence of emojis based on their Unicode character codes to display a flag emoji.</summary>

A brilliant idea from [Grafikart](https://grafikart.fr/tutoriels/drapeau-emoji-fonction-2152)

Here's how you can use the isoToFlagEmoji function from tdz-tools:

```typescript
import { isoToFlagEmoji } from 'tdz-tools';

const emojiFlags = isoToFlagEmoji('FR');
console.log(emojiFlags);  // Outputs: 🇫🇷
```
note: on Chromium browsers on Windows, the emoji flags are not displayed correctly. This is due to the system font (Sego UI) which is not supporting flag emojis. Have a look on the grafikart website link above for more details.

>API Documentation

```typescript
isoToFlagEmoji(code: string, modulo?: number, offset?: number): string
```

Converts a string to a sequence of emojis based on their Unicode character codes.

- code (string): The string to convert.
- modulo (number, optional): The modulo value to use for calculating the character code of the emoji. Default is 32.
- offset (number, optional): The offset value to add to the character code. Default is 0x1F1E5.

```typescript
const emojiFlags = isoToFlagEmoji('US');
console.log(emojiFlags);  // Outputs: 🇺🇸
```
</details>
