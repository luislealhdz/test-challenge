// You already have the methods imported
const { getAllUsers, getUserById } = require("../users.js");

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

describe("Users functions tests", () => {
    it("Should getAllUsers function be defined", () => {
        const users = getAllUsers();
        expect(users).toBeDefined();
    });

    it("Should getUserById function be defined", () => {
        const user = getUserById(1);
        expect(user).toBeDefined();
    });

    // it("Should return a non-empty list of users", () => {
    //     const users = getAllUsers();
    //     expect(users).toEqual();
    // });

    it("Should return user information with the ID: 3", () => {
        const user = getUserById(3);
        expect(user).toEqual({
            id: 3,
            username: "goosemotionless",
            email: "dotmeheart@outlook.com",
            password: "12345abcde",
        });
    });
});
