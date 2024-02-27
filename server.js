require('dotenv').config();

const path = require('path');
const routes = require('./routes');
const express = require('express');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const flash = require('connect-flash');
const app = express();

const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    app.emit("Connected");
}).catch(e => console.log(e)); // Temporário

app.on("Connected", () => {
    app.listen(process.env.PORT, () => console.log("Server opened..."));
})

const sessionOptions = session({
    secret: "user noteblocs",
    store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 5,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.use(routes);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join('public', 'assets')));