// Array to store user data
let users = [
    { name: "John Doe", email: "johndoe@example.com", discountEligibility: "yes" },
    { name: "Jane Doe", email: "janedoe@example.com", discountEligibility: "no" },
];

// Function to get all users from array
const getAllUsers = (callback) => {
    callback(null, users);
};

// Export the functions
module.exports = {
    getAllUsers,
};
