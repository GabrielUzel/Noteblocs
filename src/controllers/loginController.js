const passport = require("passport");

exports.loginPage = (require, response) => {
    response.render('login');
}
