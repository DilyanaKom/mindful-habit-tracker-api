const { PrismaClient } = require('../../../generated/prisma');

const prisma = new PrismaClient();

const habitLogService = {
    async createHabitLog(habitId, date, completed) {
        return await prisma.habitLog.create({
            data: { habitId, date, completed }
        });
    },
    async updateHabitLog(id, completed) {
        return await prisma.habitLog.update({
            where: { id },
            data: { completed }
        });
    },
    async getHabitLogsByHabit(habitId) {
        return await prisma.habitLog.findMany({
            where: { habitId },
            orderBy: { date: 'desc' }
        });
    },
    async getHabitLogById(id) {
        return await prisma.habitLog.findUnique({ where: { id } });
    },
    async deleteHabitLog(id) {
        return await prisma.habitLog.delete({ where: { id } });
    },
    async getHabitLogByHabitAndDate(habitId, date) {
        return await prisma.habitLog.findUnique({
            where: { habitId_date: { habitId, date } }
        });
    }
};

module.exports = habitLogService;
