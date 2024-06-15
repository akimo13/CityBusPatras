// Module dependencies
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Import the main controller
const mainController = require('../controllers/mainController');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Create an instance of the multer upload
const upload = multer({ storage: storage });

// References to the main controller functions
router.get('/', mainController.getIndex);
router.get('/routes', mainController.getRoutes);
router.post('/purchase', mainController.purchaseTicket);

module.exports = router;



// Define routes
// router.get('/login', userController.getLogin);
// router.get('/wallet', userController.getWallet);
// router.get('/admin', userController.getAdmin);
// router.post('/signup', upload.single('document'), userController.signup);
