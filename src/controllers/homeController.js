const Notebook = require('../database/models/notebookModel');
const Note = require('../database/models/noteModel');

exports.homePage = async (request, response) => {
    if(request.user) {
        const notebookList = await Notebook.find({ ownerEmail: request.user.email });
        response.render('home', { notebookList: notebookList });
    } else {
        response.render('home');
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

exports.editNotebook = async (request, response) => {
    try {
        const formInfo = JSON.parse(JSON.stringify(request.body))
        const notebookId = formInfo.id;

        delete formInfo.id;

        const currentWallpaperId = (await Notebook.findById(notebookId)).wallpaperId;
        if(!formInfo.wallpaperId) formInfo.wallpaperId = currentWallpaperId;

        const currentTitle = (await Notebook.findById(notebookId)).title;
        if(!formInfo.title) formInfo.title = currentTitle;

        await Notebook.findByIdAndUpdate(notebookId, formInfo);
        response.redirect('/');
    } catch(error) {
        response.render('404');
    }
}