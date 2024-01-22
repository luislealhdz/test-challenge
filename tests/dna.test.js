const dnaStringFilter = require("../dna");

describe("DNA string filter function test", () => {
    it("Should filter non-canonical DNA bases", () => {
        const result = dnaStringFilter("CTAGGYGYTYA");
        expect(result).toBe("CTAGGGTA");
    });

    it("Should return an empty string if DNA string is empty", () => {
        const result = dnaStringFilter("");
        expect(result).toBe("");
    });

    it("Should return the same DNA string if it contains only canonical bases", () => {
        const result = dnaStringFilter("CTAGCGGTAT");
        expect(result).toEqual("CTAGCGGTAT");
    });
});
