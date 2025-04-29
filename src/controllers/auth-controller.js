const authService = require("../services/auth/auth-service.js");
const { setAuthCookie } = require("../services/auth/auth-cookie.js");

const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        const result = await authService.register(email, password, name);
        setAuthCookie(res, result.token)
        return res.status(201).json(result);
        
        
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        const result = await authService.login(email, password);
        setAuthCookie(res, result)
        return res.status(200).json(result);
       
        
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    register,
    login
};