const passport = require('passport');

exports.loginPage = (request, response) => {
    response.render('login');
}
