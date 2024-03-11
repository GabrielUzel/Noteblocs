const express = require('express');
const route = express.Router();
const passport = require('passport');

const homeController = require('./src/controllers/homeController');
route.get('/', homeController.homePage);

const loginController = require('./src/controllers/loginController');
route.get('/login', loginController.loginPage);
route.post('/login', passport.authenticate('local', { session : false }));

const signupController = require('./src/controllers/signupController');
route.get('/signup', signupController.signupPage);

module.exports = route;