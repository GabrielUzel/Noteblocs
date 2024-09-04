const bcrypt = require('bcrypt');

exports.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

exports.comparePassword = (currentPassword, hashedPassword) => {
    return bcrypt.compareSync(currentPassword, hashedPassword);
}