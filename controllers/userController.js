//Imports the necessary libraries
const fs = require('fs');
const path = require('path');

// Import the necessary functions from userModel.js
const {readUsers, writeUsers } = require('../models/userModel');

// Reads users from the JSON file
const getUsers = () => {
    const data = fs.readFileSync(path.join(__dirname, '../data/users.json'));
    return JSON.parse(data);
};

// Writes users to the JSON file
const saveUsers = (users) => {
    fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 2));
};

exports.deleteUser = (req, res) => {
    try{
        const userId = req.params.id;
        let users = readUsers();
        const updatedUsers = users.filter(user => user.id !== userId);

    if (users.length === updatedUsers.length) {
        return res.status(404).json({ message: 'User not found' });
    }

    writeUsers(updatedUsers);
    res.json({ success: true });
    res.status(200).json({ message: 'User deleted successfully' });
    } 
    catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


// Renders the login page
exports.getLogin = (req, res) => {
    res.render('login');
};

// Renders the wallet page
exports.getWallet = (req, res) => {
    res.render('wallet');
};

// Renders the admin page
exports.getAdmin = (req, res) => {
    const users = getUsers();
    res.render('admin', { users });
};

// Handles user signup logic
exports.signup = (req, res) => {
    const users = readUsers();
    const { fullName, signupEmail, signupUsername, signupPassword, confirmPassword, discountCheck } = req.body;

    if (signupPassword !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    const newUser = {
        id: Date.now(),
        fullName,
        email: signupEmail,
        username: signupUsername,
        password: signupPassword,
        document: req.file ? req.file.filename : null
    };

    users.push(newUser);
    saveUsers(users);
    
    res.status(201).send('User registered successfully');
};
