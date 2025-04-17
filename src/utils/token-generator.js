import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants.js';

export function generateToken(user){
            const payload = {
                id: user._id,
                email: user.email,
                name: user.name,
            };
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '48h'});
            return token;
}