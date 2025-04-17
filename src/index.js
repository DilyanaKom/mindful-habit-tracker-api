const express = require('express');
const authRouter = require('./routes/auth-routes.js');

const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is listening on http://localhost:3000...'));

