const calculator = require("../calculator");

test("It should add 1 + 2 to equal 3", () => {
    expect(calculator.sum(1, 2)).toBe(3);
});

test("It should subtract 3 - 2 to equal 1", () => {
    expect(calculator.substract(3, 2)).toBe(1);
});

test("It should multiply 5 * 2 to equal 10", () => {
    expect(calculator.multiply(5, 2)).toBe(10);
});

test("It should divide 10 / 5 to equal 2", () => {
    expect(calculator.divide(10, 5)).toBe(2);
});

test("It should return 2 to the power of 2 to equal 4", () => {
    expect(calculator.power(2, 2)).toBe(4);
});
