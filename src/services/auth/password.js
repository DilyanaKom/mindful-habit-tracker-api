const bcrypt = require('bcryptjs');

const salt = 10;

const hashPassword = async (password) => {
    return await bcrypt.hash(password, salt);
};

const verifyPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

module.exports = { hashPassword, verifyPassword };