exports.logOutUser = (request, response) => {
    response.clearCookie('connect.sid');

    request.logout((error) => {
        request.session.destroy(() => {
            response.redirect('/'); 
        }) 
    })
}