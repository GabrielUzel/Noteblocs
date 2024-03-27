const Notebook = require('../database/models/notebookModel');
const Note = require('../database/models/noteModel');

exports.homePage = async (request, response) => {
    if(request.user) {
        const notebookList = await Notebook.find({ ownerEmail: request.user.email });
        response.render('index', { notebookList: notebookList });
    } else {
        response.render('index');
    }
}

exports.newNotebook = async (request, response) => {
    try {
        const notebookInfo = JSON.parse(JSON.stringify(request.body));

        if(!notebookInfo.title) notebookInfo.title = 'Sem título';
        if(!notebookInfo.wallpaperId) notebookInfo.wallpaperId = 0;

        notebookInfo.wallpaperId = notebookInfo.wallpaperId;
        notebookInfo.ownerEmail = request.user.email;
        
        await Notebook.create(notebookInfo);
        response.redirect('/');
    } catch(error) {
        response.render('404');
    }
}

exports.deleteNotebook = async (request, response) => {
    try {
        const notebookId = request.body.id;
        await Notebook.deleteOne({_id: notebookId});
        await Note.deleteMany({notebookId: notebookId});

        response.redirect('/');
    } catch(error) {
        response.render('404');
    }
}