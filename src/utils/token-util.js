const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants.js');

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '48h' });
    return token;
}

function verifyToken(token){
    return decoded = jwt.verify(token, JWT_SECRET);
}

module.exports = { generateToken, verifyToken };