const dnaStringFilter = (dnaString) => {
    if (dnaString.length === 0) {
        return "";
    }

    const dnaFilter = dnaString
        .split("")
        .filter((base) => ["C", "T", "A", "G"].includes(base))
        .join("");

    return dnaFilter;
};

module.exports = dnaStringFilter;
