exports.checkCsrf = (error, request, response, next) => {
    if(error) {
        console.log(error);
        return response.render('errorPage');
    }

    next();
};

exports.csrfAuth = (request, response, next) => {
    response.locals.crsfToken = request.crsfToken();
    next();
}
