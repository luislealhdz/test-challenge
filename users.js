// Imports small array of users
// Pretend it's an API request
const users = require("./data");

// Fetches all users
const getAllUsers = () => {
    return users;
};

// Filters users by specific ID
const getUserById = (id) => {
    return users.find((user) => user.id === id);
};

module.exports = { getAllUsers, getUserById };
