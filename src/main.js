const navButton = document.getElementById('nav-button');
const addSection = document.getElementById('add-section');
const editItemButton = Array.from(document.querySelectorAll('.edit-item-button'));
const editSection = Array.from(document.querySelectorAll('.edit-section'));
const newNotebookForm = document.getElementById('new-notebook-form');
const closeFormButton = Array.from(document.querySelectorAll('.closeFormButton'));
const markImages = Array.from(document.querySelectorAll('.check-mark-img'));
const wallpaperImages = Array.from(document.querySelectorAll('.wallpapers'));
const itemEntriesLi = Array.from(document.querySelectorAll('.entrie'));
const kebabButton = Array.from(document.querySelectorAll('.kebab-button'));
const itemNav = Array.from(document.querySelectorAll('.item-nav'));

if(window.innerWidth > 1250) {
    itemEntriesLi.forEach((item) => {
        item.addEventListener('mouseover', () => {
            kebabButton.map((button) => {
                if(kebabButton.indexOf(button) === itemEntriesLi.indexOf(item)) {
                    button.style.setProperty('display', 'block');
                }
            });
        });
    });
    
    itemEntriesLi.forEach((item) => {
        item.addEventListener('mouseout', () => {
            kebabButton.map((button) => {
                if(kebabButton.indexOf(button) === itemEntriesLi.indexOf(item)) {
                    button.style.setProperty('display', 'none');
                }
            });
        });
    });
} else {
    document.body.addEventListener('click', (event) => {
        if(event.target.tagName !== "SPAN") {
            itemNav.forEach((nav) => {
                nav.style.setProperty('display', 'none');
            });
        } 
    });
}

kebabButton.forEach((button) => {
    button.addEventListener('click', () => {
        itemNav.map((nav) => {
            if(kebabButton.indexOf(button) === itemNav.indexOf(nav)) {
                nav.style.setProperty('display', 'block');
            } else {
                nav.style.setProperty('display', 'none');
            }
        });
    });
});

navButton.addEventListener('click', () => {
    addSection.style.setProperty('visibility', 'visible');
});

editItemButton.forEach((button) => {
    button.addEventListener('click', () => {
        editSection.map((section) => {
            if(editItemButton.indexOf(button) === editSection.indexOf(section)) {
                section.style.setProperty('visibility', 'visible');
            } 
        });
    });
});

closeFormButton.forEach((button) => {
    button.addEventListener('click', () => {
        addSection.style.setProperty('visibility', 'hidden');
    
        editSection.map((section) => {
            section.style.setProperty('visibility', 'hidden');
        });

        markImages.map((checkMark) => {
            checkMark.style.setProperty('visibility', 'hidden');
        });
    
        wallpaperImages.map((wallpaper) => {
            wallpaper.classList.remove('selected');
        });
    });    
});

wallpaperImages.forEach((wallpaperIndex1) => {
    wallpaperIndex1.addEventListener('click', () => {
        if(!wallpaperIndex1.classList.contains('selected')) {
            wallpaperIndex1.classList.add('selected');

            wallpaperImages.map((wallpaperIndex2) => {
                if(wallpaperImages.indexOf(wallpaperIndex1) !== wallpaperImages.indexOf(wallpaperIndex2)) {
                    wallpaperIndex2.classList.remove('selected');
                }
            });

            markImages.map((checkMark) => {
                if(wallpaperImages.indexOf(wallpaperIndex1) === markImages.indexOf(checkMark)) {
                    checkMark.style.setProperty('visibility', 'visible');
                } else {
                    checkMark.style.setProperty('visibility', 'hidden');
                }
            });
        }  
    });
});

itemNav.forEach((nav) => {
    nav.addEventListener('mouseleave', () => {
        nav.style.setProperty('display', 'none');
    });
});