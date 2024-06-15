const express = require('express');
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController'); // Correct import

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Define routes
router.get('/login', userController.getLogin);
router.get('/wallet', userController.getWallet);
router.get('/admin', userController.getAdmin);
router.post('/signup', upload.single('document'), userController.signup);

module.exports = router;
