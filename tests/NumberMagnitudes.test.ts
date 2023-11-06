import { NumberMagnitudes } from "../src/NumberMagnitudes";

describe("NumberMagnitudes", () => {
    it("should add the 'K' magnitude when bigger than or equal to one thousand", () => {
        const numberMagnitudes = new NumberMagnitudes();

        const result = numberMagnitudes.parse([3000]);

        expect(result).toEqual(["3K"]);
    });

    it("should ignore the hundres when bigger than or equal to one thousand", () => {
        const numberMagnitudes = new NumberMagnitudes();

        const result = numberMagnitudes.parse([6800]);

        expect(result).toEqual(["6K"]);
    });

    it("should add the 'M' magnitude when bigger than or equal to one million", () => {
        const numberMagnitudes = new NumberMagnitudes();

        const result = numberMagnitudes.parse([2000000]);

        expect(result).toEqual(["2M"]);
    });

    it("should ignore the thousands when bigger than or equal to one million", () => {
        const numberMagnitudes = new NumberMagnitudes();

        const result = numberMagnitudes.parse([3500000]);

        expect(result).toEqual(["3M"]);
    });

    it("should return the same number when not bigger than one million nor one thousand", () => {
        const numberMagnitudes = new NumberMagnitudes();

        const result = numberMagnitudes.parse([150]);

        expect(result).toEqual(["150"]);
    });

    it("should support miltiple numbers", () => {
        const numberMagnitudes = new NumberMagnitudes();

        const result = numberMagnitudes.parse([150, 1500, 3000000]);

        expect(result).toEqual(["150", "1K", "3M"]);
    });
});
