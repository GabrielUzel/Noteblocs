require('dotenv').config();

const path = require('path');
const routes = require('./routes');
const express = require('express');
const session = require('express-session');
const connectFlash = require('connect-flash');
const flash = require('express-flash')
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { logUser } = require('./src/utils/middlewares');
require('./src/loginSettings');

const app = express();

// Database connection
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    app.emit('Connected');
}).catch(e => console.log(e)); 

// Session config
const sessionOptions = session({
    secret: process.env.SESSIONSECRET,
    store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 5,
        httpOnly: true
    }
});

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(connectFlash());
app.use(flash());
app.use(cookieParser('secretString'));
app.use(sessionOptions);
app.use(passport.initialize());
app.use(passport.session());
app.use(logUser);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on("Connected", () => {
    app.listen(process.env.PORT, () => console.log('Server opened...'));
})
