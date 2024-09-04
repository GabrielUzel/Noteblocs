const User = require('../database/models/userModel');
const jwt = require("jsonwebtoken");
const { hashPassword } = require('../utils/hashPassword');

exports.forgotPasswordPage = (request, response) => {
    response.render('editPassword');
}

exports.forgotPasswordPageWithToken = (request, response) => {
    response.render('editPasswordForm', { token: request.query.token });
}

exports.editPasswordConfirmationPage = (request, response) => {
    response.render('editPasswordConfirmation');
}

exports.editPassword = async (request, response, next) => {
    const userEmail =  request.app.locals.userTemplate.email;
    let newPassword = request.body.password;

    try {
        const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?!.* ).{8,16}$/;
        if(!regexPassword.test(newPassword)) throw new Error('Senha inválida');
    } catch(error) {
        request.flash('error', error.message);
        request.session.save(() => { response.redirect('back'); });
        return;
    }

    newPassword = hashPassword(newPassword);

    try {
        const { token } = request.query;
        if(!token) throw new Error('Invalid user token');

        const decodedToken = jwt.verify(token, process.env.JWTSECRETKEY);
        if(!decodedToken.hasOwnProperty("email") || !decodedToken.hasOwnProperty("expirationDate")) throw new Error('Invalid credentials');
        
        const { expirationDate } = decodedToken;
        if(expirationDate < new Date()) throw new Error('Token has expired');

        await User.findOneAndUpdate({email: userEmail}, {password: newPassword});

        response.redirect('/editpassword/confirm');
    } catch(error) {
        response.render('404');
    }
}