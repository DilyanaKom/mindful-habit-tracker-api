const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth-routes.js');
const habitRouter = require('./routes/habit-routes.js');
const habitLogRouter = require('./routes/habitlog-routes.js');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/habits', habitRouter);
app.use('/api/habitlogs', habitLogRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server is listening on http://localhost:3001...'));

