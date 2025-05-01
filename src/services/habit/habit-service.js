const { PrismaClient } = require('../../../generated/prisma')

const prisma = new PrismaClient();

const habitService = {
    async createHabit(userId, habitData) {
        const habit = await prisma.habit.create({
            data: {
                ...habitData,
                userId
            }
        });
        return habit;
    },

    async updateHabit(habitId, userId, habitData) {
        const existingHabit = await prisma.habit.findFirst({
            where: {
                id: habitId,
                userId: userId
            }
        });

        if (!existingHabit) {
            throw new Error('Habit not found!');
        }

        const updatedHabit = await prisma.habit.update({
            where: {
                id: habitId
            },
            data: habitData
        });

        return updatedHabit;
    },

    async deleteHabit(habitId, userId) {
        const existingHabit = await prisma.habit.findFirst({
            where: {
                id: habitId,
                userId: userId
            }
        });

        if (!existingHabit) {
            throw new Error('Habit not found!');
        }

        await prisma.habit.delete({
            where: {
                id: habitId
            }
        });

        return { message: 'Habit deleted successfully' };
    },

    async getHabit(habitId, userId) {
        const habit = await prisma.habit.findFirst({
            where: {
                id: habitId,
                userId: userId
            }
        });

        if (!habit) {
            throw new Error('Habit not found!');
        }

        return habit;
    },

    async getUserHabits(userId) {
        const habits = await prisma.habit.findMany({
            where: {
                userId: userId
            }
        });

        return habits;
    }
};

module.exports = habitService;