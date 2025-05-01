const habitService = require("../services/habit/habit-service.js");

const createHabit = async (req, res) => {
    try {
        console.log(req.body);
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }
        const habit = await habitService.createHabit(req.user.id, req.body);
        res.status(201).json(habit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateHabit = async (req, res) => {
    try {
        const habitId = parseInt(req.params.id);
        const habit = await habitService.updateHabit(habitId, req.user.id, req.body);
        res.status(200).json(habit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteHabit = async (req, res) => {
    try {
        const habitId = parseInt(req.params.id);
        const result = await habitService.deleteHabit(habitId, req.user.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getHabit = async (req, res) => {
    try {
        const habitId = parseInt(req.params.id);
        const habit = await habitService.getHabit(habitId, req.user.id);
        res.status(200).json(habit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUserHabits = async (req, res) => {
    try {
        const habits = await habitService.getUserHabits(req.user.id);
        res.status(200).json(habits);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createHabit,
    updateHabit,
    deleteHabit,
    getHabit,
    getUserHabits
};