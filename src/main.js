const navButton = document.getElementById('nav-button');
const addItemSection = document.getElementsByClassName('add-item-section');
const newNotebookForm = document.getElementById('new-notebook-form');
const closeFormButton = document.getElementById('closeFormButton');
const markImages = document.querySelectorAll('.check-mark-img');
const wallpaperImages = document.querySelectorAll('.wallpapers');
const itemEntriesLi = document.querySelectorAll('.entrie');
const kebabButton = document.querySelectorAll('.kebab-button');
const itemNav = document.querySelectorAll('.item-nav');

navButton.addEventListener('click', () => {
    addItemSection[0].style.setProperty('visibility', 'visible');
});

closeFormButton.addEventListener('click', () => {
    addItemSection[0].style.setProperty('visibility', 'hidden');

    Array.prototype.map.call(markImages, (checkMark) => {
        checkMark.style.setProperty('visibility', 'hidden');
    });

    Array.prototype.map.call(wallpaperImages, (wallpaper) => {
        wallpaper.classList.remove('selected');
    });
});

wallpaperImages.forEach((item) => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('selected')) {
            item.classList.add('selected');

            Array.prototype.map.call(wallpaperImages, (wallpaper) => {
                if(Array.prototype.indexOf.call(wallpaperImages, item) !== Array.prototype.indexOf.call(wallpaperImages, wallpaper)) {
                    wallpaper.classList.remove('selected');
                }
            });

            Array.prototype.map.call(markImages, (checkMark) => {
                if(Array.prototype.indexOf.call(wallpaperImages, item) === Array.prototype.indexOf.call(markImages, checkMark)) {
                    checkMark.style.setProperty('visibility', 'visible');
                } else {
                    checkMark.style.setProperty('visibility', 'hidden');
                }
            });
        }  
    });
});

itemEntriesLi.forEach((item) => {
    item.addEventListener('mouseover', () => {
        Array.prototype.map.call(kebabButton, (button) => {
            if(Array.prototype.indexOf.call(kebabButton, button) === Array.prototype.indexOf.call(itemEntriesLi, item)) {
                button.style.display = 'block';
            }
        });
    });
});

itemEntriesLi.forEach((item) => {
    item.addEventListener('mouseout', () => {
        Array.prototype.map.call(kebabButton, (button) => {
            if(Array.prototype.indexOf.call(kebabButton, button) === Array.prototype.indexOf.call(itemEntriesLi, item)) {
                button.style.display = 'none';
            }
        });
    });
});

kebabButton.forEach((item) => {
    item.addEventListener('click', () => {
        Array.prototype.map.call(itemNav, (nav) => {
            if(Array.prototype.indexOf.call(kebabButton, item) === Array.prototype.indexOf.call(itemNav, nav)) {
                nav.style.display = 'block';
            }
        });
    });
});

itemNav.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        item.style.display = 'none';
    });
});