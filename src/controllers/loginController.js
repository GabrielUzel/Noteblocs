exports.loginPage = (request, response) => {
    if(request.user) { return response.redirect('/'); }
    response.render('login');
}
