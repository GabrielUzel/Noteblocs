const Notebook = require('../database/models/notebookModel');

exports.homePage = async (request, response) => {
    const notebookList = await Notebook.find({ ownerEmail: request.user.email });

    for (const notebook of notebookList) {
        console.log(notebook);
    }

    response.render('index', { notebookList: notebookList });
}

exports.newNotebook = async (request, response) => {
    try {
        const notebookInfo = JSON.parse(JSON.stringify(request.body));

        if(!notebookInfo.title) notebookInfo.title = 'Sem título';

        notebookInfo.wallpaperId = 1;
        notebookInfo.ownerEmail = request.user.email;
        
        await Notebook.create(notebookInfo);
        response.redirect('/');
    } catch(error) {
        console.log(error);
        response.render('404');
    }
}