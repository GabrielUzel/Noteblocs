exports.validateCredentials = (userInfo) => {
    if(!userInfo['username'] || !userInfo['email'] || !userInfo['password']) throw new Error('Missing credentials');

    const regexUsername = /^[a-zA-Z0-9]+$/;
    if(!regexUsername.test(userInfo['username'])) throw new Error('Wrong username format');

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!regexEmail.test(userInfo['email'])) throw new Error('Wrong email format');

    const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?!.* ).{8,16}$/;
    if(!regexPassword.test(userInfo['password'])) throw new Error('Wrong password format');
}