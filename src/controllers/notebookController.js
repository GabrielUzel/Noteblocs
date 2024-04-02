const Note = require('../database/models/noteModel');

exports.notebookPage = async (request, response) => {
    const notesList = await Note.find({ notebookId: request.query.id });

    response.render('notebookPage', { notesList: notesList });
}

exports.newNote = async (request, response) => {
    try {
        const noteInfo = JSON.parse(JSON.stringify(request.body));

        if(!noteInfo.title) noteInfo.title = 'Sem título';
        
        noteInfo.content = ''; 
        noteInfo.notebookId = request.query.id;

        await Note.create(noteInfo);
        response.redirect('back');
    } catch(error) {
        console.log(error);
        response.render('404');
    }
}