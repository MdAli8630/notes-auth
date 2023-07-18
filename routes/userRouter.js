const express = require('express');
const { createSignup, userLogin } = require('../controllers/userContr');
// const { signup, signin } = require('../controllers/userController');
// const auth = require('../middlewares/auth');
const UserRouter = express.Router();


 UserRouter.post("/signup",createSignup)

 UserRouter.post("/signin",userLogin)

module.exports = UserRouter