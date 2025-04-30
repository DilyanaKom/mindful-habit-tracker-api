const {verifyToken} = require("../utils/token-util.js");

const auth = (req, res, next) => {
    const token = req.cookies['auth'];
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({message: "Forbidden"});
    }
}

module.exports = auth;