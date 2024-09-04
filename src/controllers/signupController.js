const { hashPassword } = require('../utils/hashPassword');
const User = require('../database/models/userModel');
const { validateCredentials } = require('../utils/middlewares');
const jwt = require("jsonwebtoken");

exports.signupPage = (request, response) => {
    response.render('singup');
}

exports.signupConfirmationPage = (request, response) => {
    response.render('signupConfirmation');
}

exports.validateUserCredentials = async (request, response, next) => {
    try {
        const userInfo = JSON.parse(JSON.stringify(request.body));
        validateCredentials(userInfo);

        const user = await User.findOne({ email: userInfo.email });
        if(user) throw new Error('Esse email já foi utilizado por outro usuário');

        next();
    } catch(error) {
        request.flash('error', error.message);
        request.session.save(() => { response.redirect('back'); });
    }
}

exports.createUser = async (request, response) => {
    const userInfo =  request.app.locals.userTemplate;

    try {
        const { token } = request.query;
        if(!token) throw new Error('Invalid user token');

        const decodedToken = jwt.verify(token, process.env.JWTSECRETKEY);
        if(!decodedToken.hasOwnProperty("email") || !decodedToken.hasOwnProperty("expirationDate")) throw new Error('Invalid credentials');
        
        const { expirationDate } = decodedToken;
        if(expirationDate < new Date()) throw new Error('Token has expired');

        userInfo.password = hashPassword(userInfo.password);
        delete userInfo.passwordConfirmation;
        await User.create(userInfo);

        response.redirect('/signup/confirm');
    } catch(error) {
        response.render('404');
    }
}
