// Initiate express router
const express = require('express');
// Import the contactController
const router = express.Router();
// Import the contactController
const contactController = require('../controllers/contactController');

// Define the routes

// Define route for the contact form
router.get('/form', contactController.getForm);
// Define route to submit the contact form
router.post('/submit', contactController.postForm);

// Export the router
module.exports = router;
