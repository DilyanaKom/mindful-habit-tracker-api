const express = require('express');
const habitController = require('../controllers/habit-controller.js');
const auth = require('../middlewares/auth-middleware.js');

const habitRouter = express.Router();

habitRouter.use(auth);

habitRouter.post('/', habitController.createHabit);
habitRouter.get('/', habitController.getUserHabits);
habitRouter.get('/:id', habitController.getHabit);
habitRouter.put('/:id', habitController.updateHabit);
habitRouter.delete('/:id', habitController.deleteHabit);

module.exports = habitRouter;