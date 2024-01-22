const fizzBuzz = require("../fizzBuzz");

describe("Fizz Buzz function tests", () => {
    it("Should return 'FizzBuzz' when number is divisible by both 3 and 5", () => {
        const testNumber = 15;
        const result = fizzBuzz(testNumber);
        expect(result).toBe("FizzBuzz");
    });

    it("Should return 'Fizz' when number is divisible by 3", () => {
        const testNumber = 9;
        const result = fizzBuzz(testNumber);
        expect(result).toBe("Fizz");
    });

    it("Should return 'Buzz' when number is divisible by 5", () => {
        const testNumber = 10;
        const result = fizzBuzz(testNumber);
        expect(result).toBe("Buzz");
    });

    it("Shoul return the original number when it is not divisible by 3, 5 and both", () => {
        const testNumber = 4;
        const result = fizzBuzz(testNumber);
        expect(result).toBe(testNumber);
    });
});
