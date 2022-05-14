const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// MIDDLEWARE
const auth = require('../middleware/auth');


router.route('/profile')
.get(auth('readOwn','profile'),userController.profile)
.patch(auth('updateOwn','profile'),userController.updateProfile)




module.exports = router;