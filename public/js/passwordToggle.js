const passwordToggleImg = document.querySelector('.password-toggle-img');
const passwordInput = document.getElementById('password');

passwordToggleImg.addEventListener('mouseover', (event) => {
    event.preventDefault();
    passwordToggleImg.src = '/img/eyeOpen.png';
    passwordInput.type = 'text';
});

passwordToggleImg.addEventListener('mouseout', (event) => {
    event.preventDefault();
    passwordToggleImg.src = '/img/eyeClose.png';
    passwordInput.type = 'password';
});