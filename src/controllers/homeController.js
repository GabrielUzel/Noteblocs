const Notebook = require('../database/models/notebookModel');

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
        console.log(error);
        response.render('404');
    }
}