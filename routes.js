const express = require('express');
const route = express.Router();
const passport = require('passport');
const { checkUserLoged, checkUserPermission } = require('./src/utils/middlewares');
const { createUserTemplate, createEmailTemplate } = require('./src/utils/middlewares');
const { validateEmail, validateEmailForPassword, resendEmail, resendEmailForPassword } = require('./src/utils/middlewares');

const homeController = require('./src/controllers/homeController');
route.get('/', homeController.homePage);
route.post('/', homeController.newNotebook);
route.post('/deletenotebook', homeController.deleteNotebook);
route.post('/editnotebook', homeController.editNotebook);

const notebookController = require('./src/controllers/notebookController');
route.get('/notebook/:id?', checkUserPermission, notebookController.notebookPage);
route.post('/notebook/:id?', notebookController.newNote);
route.get('/note/:noteid?', checkUserPermission, notebookController.notePage);
route.post('/updatenote', notebookController.updateNote);
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
route.post('/signup', createEmailTemplate, signupController.validateUserCredentials, createUserTemplate, validateEmail);
route.get('/signup/verify/:token?', signupController.createUser);
route.get('/signup/confirm', signupController.signupConfirmationPage);
route.post('/resendemail', resendEmail);

const forgotPasswordController = require('./src/controllers/forgotPasswordController');
route.get('/forgotpassword', forgotPasswordController.forgotPasswordPage);
route.post('/forgotpassword', createEmailTemplate, createUserTemplate, validateEmailForPassword);
route.get('/forgotpassword/verify/:token?', forgotPasswordController.forgotPasswordPageWithToken);
route.post('/forgotpassword/verify/:token?', forgotPasswordController.editPassword);
route.get('/editpassword/confirm', forgotPasswordController.editPasswordConfirmationPage);
route.post('/resendemailforpassword', resendEmailForPassword);

const logoutController = require('./src/controllers/logoutController');
route.get('/logout', logoutController.logOutUser);

module.exports = route;