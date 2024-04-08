const express = require('express');
const route = express.Router();
const passport = require('passport');
const { checkUserLoged, checkUserPermission } = require('./src/utils/middlewares');
const { createUserTemplate } = require('./src/utils/middlewares');

const homeController = require('./src/controllers/homeController');
route.get('/', homeController.homePage);
route.post('/', homeController.newNotebook);
route.post('/deletenotebook', homeController.deleteNotebook);
route.post('/editnotebook', homeController.editNotebook);

const notebookController = require('./src/controllers/notebookController');
route.get('/notebook/:id?', checkUserPermission, notebookController.notebookPage);
route.post('/notebook/:id?', notebookController.newNote);
route.get('/note/:noteid?', checkUserPermission, notebookController.notePage);
route.post('/deletenote', notebookController.deleteNote);
route.post('/editnote', notebookController.editNote);

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
route.post('/signup', signupController.validateUserCredentials, createUserTemplate, signupController.validateEmail);
route.get('/signup/verify:token?', signupController.createUser);

const signupConfirmationController = require('./src/controllers/signupConfirmationController');
route.get('/signup/confirm', signupConfirmationController.signupConfirmationPage);

const logoutController = require('./src/controllers/logoutController');
route.get('/logout', logoutController.logOutUser);

module.exports = route;