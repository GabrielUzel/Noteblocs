/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
var navButton = document.getElementById('nav-button');
var addItemSection = document.getElementsByClassName('add-item-section');
var newNotebookForm = document.getElementById('new-notebook-form');
var closeFormButton = document.getElementById('closeFormButton');
var markImages = document.querySelectorAll('.check-mark-img');
var wallpaperImages = document.querySelectorAll('.wallpapers');
navButton.addEventListener('click', function () {
  addItemSection[0].style.setProperty('visibility', 'visible');
});
closeFormButton.addEventListener('click', function () {
  addItemSection[0].style.setProperty('visibility', 'hidden');
  Array.prototype.map.call(markImages, function (checkMark) {
    checkMark.style.setProperty('visibility', 'hidden');
  });
  Array.prototype.map.call(wallpaperImages, function (wallpaper) {
    wallpaper.classList.remove('selected');
  });
});
wallpaperImages.forEach(function (item) {
  item.addEventListener('click', function () {
    if (!item.classList.contains('selected')) {
      item.classList.add('selected');
      Array.prototype.map.call(wallpaperImages, function (wallpaper) {
        if (Array.prototype.indexOf.call(wallpaperImages, item) !== Array.prototype.indexOf.call(wallpaperImages, wallpaper)) {
          wallpaper.classList.remove('selected');
        }
      });
      Array.prototype.map.call(markImages, function (checkMark) {
        if (Array.prototype.indexOf.call(wallpaperImages, item) === Array.prototype.indexOf.call(markImages, checkMark)) {
          checkMark.style.setProperty('visibility', 'visible');
        } else {
          checkMark.style.setProperty('visibility', 'hidden');
        }
      });
    }
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map