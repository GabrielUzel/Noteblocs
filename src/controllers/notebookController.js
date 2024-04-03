const Note = require('../database/models/noteModel');

exports.notebookPage = async (request, response) => {
    const notesList = await Note.find({ notebookId: request.query.id });

    response.render('notebookPage', { notesList: notesList });
}

exports.notePage = (request, response) => {
    response.render('notePage');
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

exports.deleteNote = async (request, response) => {
    try {
        const noteId = request.body.id;
        await Note.deleteOne({_id: noteId});

        response.redirect('back');
    } catch(error) {
        response.render('404');
    }
}

exports.editNote = async (request, response) => {
    try {
        const formInfo = JSON.parse(JSON.stringify(request.body))
        const noteId = formInfo.id;

        delete formInfo.id;

        const currentTitle = (await Note.findById(noteId)).title;
        if(!formInfo.title) formInfo.title = currentTitle;

        await Note.findByIdAndUpdate(noteId, formInfo);
        response.redirect('back');
    } catch(error) {
        response.render('404');
    }
}
