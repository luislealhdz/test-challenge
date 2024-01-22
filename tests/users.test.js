// You already have the methods imported
const { getAllUsers, getUserById } = require("../users.js");

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

describe("Users functions tests", () => {
    it("Should 'getAllUsers' function be defined", () => {
        const users = getAllUsers();
        expect(users).toBeDefined();
    });

    it("Should return a non-empty list 'getAllUsers' function", () => {
        const users = getAllUsers();
        expect(users.length).toBeGreaterThan(0);
    });

    it("Should 'getAllUsers' function return an instance of an array", () => {
        const users = getAllUsers();
        expect(users).toBeInstanceOf(Array);
    });

    it("Should 'getAllUsers' function return a list of objects", () => {
        const users = getAllUsers();
        expect(users.every((item) => typeof item === "object")).toBe(true);
    });

    it("Should getUserById function be defined", () => {
        const validUserId = 1;
        const user = getUserById(validUserId);
        expect(user).toBeDefined();
    });

    it("Should return user information with the ID: 3", () => {
        const user = getUserById(3);
        expect(user).toEqual({
            id: 3,
            username: "goosemotionless",
            email: "dotmeheart@outlook.com",
            password: "12345abcde",
        });
    });

    it("Should return the user with a valid ID", () => {
        const userId = 1;
        const user = getUserById(userId);
        expect(user).toBeDefined();
        expect(user.id).toBe(userId);
    });

    it("Should handle non-numeric or invalid ID gracefully", () => {
        const invalidUserId = "invalidId";
        const user = getUserById(invalidUserId);
        expect(user).toBeUndefined();
    });
});
