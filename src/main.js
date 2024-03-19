const navButton = document.getElementById('nav-button');
const addNotebookSection = document.getElementById('add-notebook-section');
const newNotebookForm = document.getElementById('new-notebook-form');

navButton.addEventListener('click', () => {
    addNotebookSection.style.setProperty('visibility', 'visible');
});