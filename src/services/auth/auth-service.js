const { PrismaClient } = require('@prisma/client');
const { hashPassword, verifyPassword } = require('./password.js');
const { generateToken } = require('../../utils/token-generator.js');

const prisma = new PrismaClient();

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
};

module.exports = authService;