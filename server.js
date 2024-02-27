require('dotenv').config();

const path = require('path');
const routes = require('./routes');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    app.emit("Connected");
}).catch(e => console.log(e)); // Temporário

const PORT = 5000;
app.on("Connected", () => {
    app.listen(PORT, () => console.log("Server opened..."));
})


app.use(routes);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join('public', 'assets')));