/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
var navButton = document.getElementById('nav-button');
var addSection = document.getElementById('add-section');
var editItemButton = Array.from(document.querySelectorAll('.edit-item-button'));
var editSection = Array.from(document.querySelectorAll('.edit-section'));
var newNotebookForm = document.getElementById('new-notebook-form');
var closeFormButton = Array.from(document.querySelectorAll('.closeFormButton'));
var markImages = Array.from(document.querySelectorAll('.check-mark-img'));
var wallpaperImages = Array.from(document.querySelectorAll('.wallpapers'));
var itemEntriesLi = Array.from(document.querySelectorAll('.entrie'));
var kebabButton = Array.from(document.querySelectorAll('.kebab-button'));
var itemNav = Array.from(document.querySelectorAll('.item-nav'));
if (window.innerWidth > 1250) {
  itemEntriesLi.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      kebabButton.map(function (button) {
        if (kebabButton.indexOf(button) === itemEntriesLi.indexOf(item)) {
          button.style.setProperty('display', 'block');
        }
      });
    });
  });
  itemEntriesLi.forEach(function (item) {
    item.addEventListener('mouseout', function () {
      kebabButton.map(function (button) {
        if (kebabButton.indexOf(button) === itemEntriesLi.indexOf(item)) {
          button.style.setProperty('display', 'none');
        }
      });
    });
  });
} else {
  document.body.addEventListener('click', function (event) {
    if (event.target.tagName !== "SPAN") {
      itemNav.forEach(function (nav) {
        nav.style.setProperty('display', 'none');
      });
    }
  });
}
kebabButton.forEach(function (button) {
  button.addEventListener('click', function () {
    itemNav.map(function (nav) {
      if (kebabButton.indexOf(button) === itemNav.indexOf(nav)) {
        nav.style.setProperty('display', 'block');
      } else {
        nav.style.setProperty('display', 'none');
      }
    });
  });
});
navButton.addEventListener('click', function () {
  addSection.style.setProperty('visibility', 'visible');
});
editItemButton.forEach(function (button) {
  button.addEventListener('click', function () {
    editSection.map(function (section) {
      if (editItemButton.indexOf(button) === editSection.indexOf(section)) {
        section.style.setProperty('visibility', 'visible');
      }
    });
  });
});
closeFormButton.forEach(function (button) {
  button.addEventListener('click', function () {
    addSection.style.setProperty('visibility', 'hidden');
    editSection.map(function (section) {
      section.style.setProperty('visibility', 'hidden');
    });
    markImages.map(function (checkMark) {
      checkMark.style.setProperty('visibility', 'hidden');
    });
    wallpaperImages.map(function (wallpaper) {
      wallpaper.classList.remove('selected');
    });
  });
});
wallpaperImages.forEach(function (wallpaperIndex1) {
  wallpaperIndex1.addEventListener('click', function () {
    if (!wallpaperIndex1.classList.contains('selected')) {
      wallpaperIndex1.classList.add('selected');
      wallpaperImages.map(function (wallpaperIndex2) {
        if (wallpaperImages.indexOf(wallpaperIndex1) !== wallpaperImages.indexOf(wallpaperIndex2)) {
          wallpaperIndex2.classList.remove('selected');
        }
      });
      markImages.map(function (checkMark) {
        if (wallpaperImages.indexOf(wallpaperIndex1) === markImages.indexOf(checkMark)) {
          checkMark.style.setProperty('visibility', 'visible');
        } else {
          checkMark.style.setProperty('visibility', 'hidden');
        }
      });
    }
  });
});
itemNav.forEach(function (nav) {
  nav.addEventListener('mouseleave', function () {
    nav.style.setProperty('display', 'none');
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map