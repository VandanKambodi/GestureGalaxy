const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', registerUser);  // Signup Route
router.post('/login', loginUser);      // Login Route

module.exports = router;
