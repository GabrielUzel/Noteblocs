const navButton = document.getElementById('nav-button');
const addNotebookSection = document.getElementById('add-notebook-section');
const newNotebookForm = document.getElementById('new-notebook-form');
const closeFormButton = document.getElementById('closeFormButton');
const markImages = document.querySelectorAll('.check-mark-img');
const wallpaperImages = document.querySelectorAll('.wallpapers');

navButton.addEventListener('click', () => {
    addNotebookSection.style.setProperty('visibility', 'visible');
});

closeFormButton.addEventListener('click', () => {
    addNotebookSection.style.setProperty('visibility', 'hidden');

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
        
        //Array.prototype.findIndex.call(wallpaperImages, (wallpaper) => wallpaper.classList.contains('selected'));    
    });
});
