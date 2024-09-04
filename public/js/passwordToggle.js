const passwordToggleImg = document.getElementById('password-toggle-img');
const passwordInput = document.getElementById('password');

passwordToggleImg.addEventListener('click', (event) => {
    event.preventDefault();

    if(passwordToggleImg.src.includes('eyeOpen')) {
        passwordToggleImg.src = '/img/eyeClose.png';
        passwordInput.type = 'password';
    } else {
        passwordToggleImg.src = '/img/eyeOpen.png';
        passwordInput.type = 'text';
    }
});
