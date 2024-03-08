const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('./database/models/userModel');
const { comparePassword } = require('./utils/hashPassword');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
    try {
        const currentUser =  await User.findById(id);
        if(!currentUser) throw new Error('User not found');
        done(null, currentUser);
    } catch(error) {
        done(error, null)
    }
});

passport.use(
    new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        try {
            if(!email || !password) throw new Error('Missing credentials');
            
            const currentUser = await User.findOne({ email });
            if(!currentUser) throw new Error('User not found');
            if(!comparePassword(password, currentUser.password)) throw new Error('Bad credentials');
            console.log("login feito!");
            done(null, currentUser);
        } catch(error) {
            done(error, null);   
        }
    })
)