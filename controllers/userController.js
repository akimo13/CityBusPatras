//Imports the necessary libraries
const fs = require('fs');
const path = require('path');

// Reads users from the JSON file
const getUsers = () => {
    const data = fs.readFileSync(path.join(__dirname, '../data/users.json'));
    return JSON.parse(data);
};

// Writes users to the JSON file
const saveUsers = (users) => {
    fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 2));
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
    const users = getUsers();
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
