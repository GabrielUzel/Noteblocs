const express = require('express');
const route = express.Router();
const passport = require('passport');
const { checkUserLoged } = require('./src/utils/middlewares')

const homeController = require('./src/controllers/homeController');
route.get('/', homeController.homePage);

const loginController = require('./src/controllers/loginController');
route.get('/login', checkUserLoged, loginController.loginPage);
route.post('/login', passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: 'login',
    badRequestMessage: 'Há campos vazios',
    failureFlash: true 
}));

const signupController = require('./src/controllers/signupController');
route.get('/signup', checkUserLoged, signupController.signupPage);
route.post('/signup', signupController.createUser);

const signupConfirmationController = require('./src/controllers/signupConfirmationController');
route.get('/signup/confirm', signupConfirmationController.signupConfirmationPage);


const logoutController = require('./src/controllers/logoutController');
route.get('/logout', logoutController.logOutUser);

module.exports = route;