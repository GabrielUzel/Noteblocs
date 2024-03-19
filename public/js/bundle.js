/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
var navButton = document.getElementById('nav-button');
var addNotebookSection = document.getElementById('add-notebook-section');
var newNotebookForm = document.getElementById('new-notebook-form');
var closeFormButton = document.getElementById('closeFormButton');
navButton.addEventListener('click', function () {
  addNotebookSection.style.setProperty('visibility', 'visible');
});
closeFormButton.addEventListener('click', function () {
  addNotebookSection.style.setProperty('visibility', 'hidden');
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map