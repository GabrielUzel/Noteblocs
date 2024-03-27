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
var itemEntriesLi = document.querySelectorAll('.entrie');
var kebabButton = document.querySelectorAll('.kebab-button');
var itemNav = document.querySelectorAll('.item-nav');
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
itemEntriesLi.forEach(function (item) {
  item.addEventListener('mouseover', function () {
    Array.prototype.map.call(kebabButton, function (button) {
      if (Array.prototype.indexOf.call(kebabButton, button) === Array.prototype.indexOf.call(itemEntriesLi, item)) {
        button.style.display = 'block';
      }
    });
  });
});
itemEntriesLi.forEach(function (item) {
  item.addEventListener('mouseout', function () {
    Array.prototype.map.call(kebabButton, function (button) {
      if (Array.prototype.indexOf.call(kebabButton, button) === Array.prototype.indexOf.call(itemEntriesLi, item)) {
        button.style.display = 'none';
      }
    });
  });
});
kebabButton.forEach(function (item) {
  item.addEventListener('click', function () {
    Array.prototype.map.call(itemNav, function (nav) {
      if (Array.prototype.indexOf.call(kebabButton, item) === Array.prototype.indexOf.call(itemNav, nav)) {
        nav.style.display = 'block';
      }
    });
  });
});
itemNav.forEach(function (item) {
  item.addEventListener('mouseleave', function () {
    item.style.display = 'none';
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map