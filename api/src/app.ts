import express from 'express';

import userRouter from './endpoints/user/express'

const app = express();
const port = 3030;

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

