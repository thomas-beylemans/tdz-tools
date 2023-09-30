/**
 * Converts a string to a sequence of emojis based on their Unicode character codes.
 * @param code - The string to convert.
 * @param modulo - The modulo value to use for calculating the character code of the emoji. Default is 32 as we want the alphabet to start at 1.
 * @param offset - The offset value to add to the character code. Default is the Unicode code point for regional letter A - 1.
 * @returns The resulting sequence of emojis.
 */
export function isoToFlagEmoji(
  code: string,
  modulo: number = 32,
  offset: number = 0x1f1e5
): string {
  if (typeof code !== "string" || code.length === 0) {
    throw new Error("'code' must be a non-empty string.");
  }

  return code.split("").reduce((acc, letter) => {
    const n = (letter.charCodeAt(0) % modulo) + offset;
    return acc + String.fromCodePoint(n);
  }, "");
}
