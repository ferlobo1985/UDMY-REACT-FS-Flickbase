const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

// ajaj.com/api/auth/test

router.post('/register', authController.register)




module.exports = router


