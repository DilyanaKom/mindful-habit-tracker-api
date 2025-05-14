const express = require('express');
const habitLogController = require('../controllers/habitlog-controller.js');
const auth = require('../middlewares/auth-middleware.js');

const habitLogRouter = express.Router();

habitLogRouter.use(auth);

habitLogRouter.post('/', habitLogController.createHabitLog);
habitLogRouter.get('/habit/:habitId', habitLogController.getHabitLogsByHabit);
habitLogRouter.get('/:id', habitLogController.getHabitLogById);
habitLogRouter.put('/:id', habitLogController.updateHabitLog);
habitLogRouter.delete('/:id', habitLogController.deleteHabitLog);

module.exports = habitLogRouter;
