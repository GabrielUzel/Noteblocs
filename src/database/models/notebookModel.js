const mongoose = require('mongoose');

const notebookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    wallpaperId: {
        type: Number,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Notebook', notebookSchema);