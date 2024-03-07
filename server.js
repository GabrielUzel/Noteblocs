require('dotenv').config();

const path = require('path');
const routes = require('./routes');
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const helmet = require('helmet');
const csurf = require('csurf');

const { checkCsurf, csurfAuth } = require('./src/middlewares');

const app = express();

// Database connection
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    app.emit('Connected');
}).catch(e => console.log(e)); 

app.on("Connected", () => {
    app.listen(process.env.PORT, () => console.log('Server opened...'));
})

// Session config
const sessionOptions = session({
    secret: 'user noteblocs',
    store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 5,
        httpOnly: true
    }
});

app.use(routes);
app.use(express.static('./public'));

app.use(express.json);
app.use(sessionOptions);
app.use(flash());
app.use(helmet());
app.use(csurf());
app.use(checkCsurf);
app.use(csurfAuth);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
