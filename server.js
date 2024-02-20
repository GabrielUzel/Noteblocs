const path = require('path');
const routes = require('./routes');
const express = require('express');
const app = express();

const PORT = 5000;
app.listen(PORT, () => console.log("Server opened..."));

app.use(routes);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join('public', 'assets')));