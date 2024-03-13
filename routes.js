const express = require('express');
const route = express.Router();
const passport = require('passport');

const homeController = require('./src/controllers/homeController');
route.get('/', homeController.homePage);

const loginController = require('./src/controllers/loginController');
route.get('/login', loginController.loginPage);
route.post('/login', passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: 'login',
    failureFlash: true 
}));

const signupController = require('./src/controllers/signupController');
route.get('/signup', signupController.signupPage);
route.post('/signup', signupController.createUser);

module.exports = route;