const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('./database/models/userModel');
const { comparePassword } = require('./utils/hashPassword');

passport.use(
    new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        console.log(email);
        console.log(password);

        try {
            if(!email || !password) throw new Error('Missing credentials');
            
            const currentUser = await User.findOne({ email });
            if(!currentUser) throw new Error('User not found');
            if(!comparePassword(password, currentUser.password)) throw new Error('Bad credentials');
            done(null, currentUser);
        } catch(error) {
            done(error, null);   
        }
    })
)