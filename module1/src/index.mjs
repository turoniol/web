import express from 'express';
import config from './config/config.mjs';
import bodyParser from 'body-parser';

import usersRouter from './routers/users.mjs';
import authRouter from './routers/auth.mjs';

const app = express();
const port = config.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
