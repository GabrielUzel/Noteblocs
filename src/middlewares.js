exports.checkCsurf = (error, request) => {
    if(error && error.code === 'EBADCSRFTOKEN') {
        return request.render('errorPage');
    }
};

exports.csurfAuth = (request, response, next) => {
    response.locals.crsfToken = require.crsfToken();
    next();
}