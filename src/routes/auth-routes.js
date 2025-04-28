const express = require('express');
const authController = require('../controllers/auth-controller.js');

const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login)

module.exports = authRouter;