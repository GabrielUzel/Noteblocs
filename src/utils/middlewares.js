exports.logUser = (request, response, next) => {
    response.locals.user = request.user;
    response.locals.notebookList = [];
    next();
}

exports.validateCredentials = (userInfo) => {
    if(!userInfo['username'] || !userInfo['email'] || !userInfo['password']) throw new Error('Todos os campos devem ser preenchidos');

    const regexUsername = /^[a-zA-Z0-9]+$/;
    if(!regexUsername.test(userInfo['username'])) throw new Error('Usuário inválido');

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!regexEmail.test(userInfo['email'])) throw new Error('Email inválido');

    const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?!.* ).{8,16}$/;
    if(!regexPassword.test(userInfo['password'])) throw new Error('Senha inválida');
}

exports.checkUserLoged = (request, response, next) => {
    if(request.user) { return response.redirect('/'); }
    next();
}