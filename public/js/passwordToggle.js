const passwordToggleImg = Array.from(document.querySelectorAll('.password-toggle-img'));
const passwordInput = Array.from(document.querySelectorAll('.password-input'));

passwordToggleImg.forEach((img) => {
    img.addEventListener('mouseover', (event) => {
        event.preventDefault();
        img.src = '/img/eyeOpen.png';
        passwordInput[passwordToggleImg.indexOf(img)].type = 'text';
    });
});

passwordToggleImg.forEach((img) => {
    img.addEventListener('mouseout', (event) => {
        event.preventDefault();
        img.src = '/img/eyeOpen.png';
        passwordInput[passwordToggleImg.indexOf(img)].type = 'password';
    });
});
