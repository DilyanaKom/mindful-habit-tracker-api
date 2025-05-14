const habitLogService = require('../services/habitlog-service.js');

const createHabitLog = async (req, res) => {
    try {
        const { habitId, date, completed } = req.body;
        if (!habitId || !date || typeof completed !== 'boolean') {
            return res.status(400).json({ error: 'habitId, date, and completed are required' });
        }
        const log = await habitLogService.createHabitLog(habitId, date, completed);
        res.status(201).json(log);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateHabitLog = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { completed } = req.body;
        const log = await habitLogService.updateHabitLog(id, completed);
        res.status(200).json(log);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getHabitLogsByHabit = async (req, res) => {
    try {
        const habitId = parseInt(req.params.habitId);
        const logs = await habitLogService.getHabitLogsByHabit(habitId);
        res.status(200).json(logs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getHabitLogById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const log = await habitLogService.getHabitLogById(id);
        res.status(200).json(log);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteHabitLog = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await habitLogService.deleteHabitLog(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createHabitLog,
    updateHabitLog,
    getHabitLogsByHabit,
    getHabitLogById,
    deleteHabitLog
};
