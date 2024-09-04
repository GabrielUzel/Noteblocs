exports.logOutUser = (request, response) => {
    response.clearCookie('connect.sid');

    request.logout(() => {
        request.session.destroy(() => response.redirect('/')); 
    });
}