exports.signupPage = (request, response) => {
    response.render('singup');
}

exports.createUser = (request, response, next) => {
    console.log(request.body);
}
