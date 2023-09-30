import { isoToFlagEmoji } from "../library/string";

describe("isoToFlagEmoji", () => {
  it("should convert string to emoji flags", () => {
    expect(isoToFlagEmoji("AB")).toBe("🇦🇧");
  });

  it("should throw an error for empty string", () => {
    expect(() => isoToFlagEmoji("")).toThrowError(
      "'code' must be a non-empty string."
    );
  });

  it("should throw an error for non-string argument", () => {
    // @ts-expect-error: Test case with invalid type
    expect(() => isoToFlagEmoji(null)).toThrowError(
      "'code' must be a non-empty string."
    );
    // @ts-expect-error: Test case with invalid type
    expect(() => isoToFlagEmoji([13, "37"])).toThrowError(
      "'code' must be a non-empty string."
    );
  });

  it("should allow custom modulo and offset values", () => {
    expect(isoToFlagEmoji("A")).toBe("🇦");

    expect(isoToFlagEmoji("A", 10)).toBe(
      String.fromCodePoint(("A".charCodeAt(0) % 10) + 0x1f1e5)
    );

    expect(isoToFlagEmoji("A", 32, 0x1f600)).toBe(
      String.fromCodePoint(("A".charCodeAt(0) % 32) + 0x1f600)
    );

    expect(isoToFlagEmoji("A", 10, 0x1f600)).toBe(
      String.fromCodePoint(("A".charCodeAt(0) % 10) + 0x1f600)
    );
  });
});
