const factorial = require("../factorial");

describe("Factorial function test", () => {
    it("Should 'factorial' function be defined", () => {
        const factorialFunction = factorial(5);
        expect(factorialFunction).toBeDefined();
    });

    it("Should calculate factorial of 5 to be 120", () => {
        const result = factorial(5);
        expect(result).toBe(120);
    });

    it("Should return 1 the factorial of 0", () => {
        const result = factorial(0);
        expect(result).toBe(1);
    });

    it("Should return 1 the factorial of 1", () => {
        const result = factorial(1);
        expect(result).toBe(1);
    });

    it("Should 'factorial' function return an instance of an number", () => {
        const result = factorial(5);
        expect(result).toEqual(expect.any(Number));
    });

    test("Should return 1 for factorial of a negative number", () => {
        const result = factorial(-5);
        expect(result).toEqual(1);
    });
});
