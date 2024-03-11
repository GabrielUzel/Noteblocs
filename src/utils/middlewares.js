exports.checkCsrf = (error, request) => {
    if(error && error.code === 'EBADCSRFTOKEN') {
        return request.render('errorPage');
    }
};

exports.csrfAuth = (request, response, next) => {
    response.locals.crsftoken = request.crsfToken();
    next();
}
