// routes/userRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

router.get('/login', userController.getLogin);
router.get('/wallet', userController.getWallet);
router.get('/admin', userController.getAdmin);
router.post('/signup', upload.single('document'), userController.signup);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
