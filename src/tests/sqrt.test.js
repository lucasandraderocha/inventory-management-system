import { expect, test } from "vitest";
import { sqrt } from "../lab/sqrt";

test("Math.sqrt works for perfect squares", () => {
    expect(sqrt(4)).toBe(2)
    expect(sqrt(144)).toBe(12)
    expect(sqrt(0)).toBe(0)
})