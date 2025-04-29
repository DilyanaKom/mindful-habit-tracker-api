const { hashPassword, verifyPassword } = require('./password.js');
const { generateToken } = require('../../utils/token-generator.js');

const { PrismaClient } = require('../../../generated/prisma')

const prisma = new PrismaClient()

const authService = {
    async register(email, password, name) {
        const userExists = await prisma.user.findUnique({
            where: { email }
        });

        if (userExists) {
            throw new Error('User already exists');
        }

        const hashedPassword = await hashPassword(password);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            },
            select: {
                id: true,
                email: true,
                name: true,
            }
        });

        const token = generateToken(user);
        return { user, token };
    },
    async login(email, password){
        const user = await prisma.user.findUnique({
            where: {email}

        });

        if(!user){
            throw new Error('Invalid email or password!');
        }
        const isValid = await verifyPassword(password, user.password);
        if(!isValid){
            throw new Error('Invalid email or password!');
        }
        const token = generateToken(user);
        return token;
    },

};

module.exports = authService;