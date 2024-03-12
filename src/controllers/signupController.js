const { hashPassword } = require('../utils/hashPassword');
const User  = require('../database/models/userModel');
const { validateCredentials } = require('../utils/middlewares');

exports.signupPage = (request, response) => {
    response.render('singup');
}

exports.createUser = async (request, response, next) => {
    try {
        const userInfo = JSON.parse(JSON.stringify(request.body));
        validateCredentials(userInfo);

        const user = await User.findOne({ email: userInfo['email'] });
        if(user) throw new Error('User already exists');
        
        userInfo['password'] = await hashPassword(userInfo['password']);

        await User.create(userInfo);
        response.redirect('/login');
    } catch(error) {
        console.log(error);
        response.redirect('/signup');
    }
}
