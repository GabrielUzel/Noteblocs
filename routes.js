const express = require('express');
const route = express.Router();
const passport = require('passport');

const homeController = require('./src/controllers/homeController');
route.get('/', homeController.homePage);

const loginController = require('./src/controllers/loginController');
route.get('/login', loginController.loginPage);
route.post('/login', passport.authenticate('local', { session : false }), (request, response) => {
    response.redirect('/login');
});

const signupController = require('./src/controllers/signupController');
route.get('/signup', signupController.signupPage);
route.post('/signup/createUser', signupController.createUser);
module.exports = route;