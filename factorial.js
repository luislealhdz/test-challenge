const factorial = (number) => {
    if (number <= 0) return 1;

    return number === 0 || number === 1 ? 1 : number * factorial(number - 1);
};

module.exports = factorial;
