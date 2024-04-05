const Notebook = require('../database/models/notebookModel');
const User = require('../database/models/userModel');
const Note = require('../database/models/noteModel');

exports.logUser = (request, response, next) => {
    response.locals.user = request.user;
    response.locals.notebookList = [];
    response.locals.notesList = [];
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

    if(userInfo['password'] !== userInfo['passwordConfirmation']) throw new Error('Insira senhas iguais nos campos de senha');
}

exports.checkUserLoged = (request, response, next) => {
    if(request.user) { return response.redirect('/'); }
    next();
}

exports.checkUserPermission = async (request, response, next) => {
    try {
        let correctUserId;

        if(!request.query.noteid) {
            const correctUserEmail = (await Notebook.findById(request.query.id)).ownerEmail;
            correctUserId =  (await User.findOne({ email: correctUserEmail })).id;
        } else {
            const notebookId = (await Note.findById(request.query.noteid)).notebookId;
            const correctUserEmail = (await Notebook.findById(notebookId)).ownerEmail;
            correctUserId =  (await User.findOne({ email: correctUserEmail })).id;
        }

        if(correctUserId !== request.user.id) throw new Error('Permission not granted');
        
        next();
    } catch(error) {
        console.log(error);
        response.render('404');
    }
}