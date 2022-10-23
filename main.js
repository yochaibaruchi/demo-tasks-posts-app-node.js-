const express = require('express');
const userRouter = require('./routers/usersRouter');
const cors = require('cors');
require("./config/database");
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.listen(2300);
console.log("app is running");

