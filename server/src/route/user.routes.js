const express = require('express');

const router = express.Router();
const auth = require('../authenticator/auth');
const userController = require('../controller/user.controller');

router.post('/register', userController.registerNewUser);
router.post('/login', userController.loginUser);
router.post("/googleLogin",userController.loginGoogle)
router.get('/userProfile', auth, userController.returnUserProfile);

module.exports = router;
