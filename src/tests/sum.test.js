import { expect, it, describe } from "vitest";
import { sum } from "../lab/sum.js";

describe("Sum of numbers", () => {
    it("adds 1 + 2 to equals 3", () => {
        expect(sum(1, 2)).toBe(3);
    })

    it("return NaN for obvious reason...",() => {
        expect(sum()).toBeNaN()
    })

    it("return same number when you sum with 0", () => {
        expect(sum(3,0)).toBe(3)
    })
})