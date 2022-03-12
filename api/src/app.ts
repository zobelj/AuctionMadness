import express from 'express';
import mongoose from 'mongoose'
import passport from 'passport'
import session from 'express-session'
import bodyParser from 'body-parser'

import AuthRouter from 'endpoints/auth/express'
import UserRouter from 'endpoints/user/express'

import PassportStrategy from 'middleware/auth/passport'


const app = express();
const port = 3030;

mongoose.connect('mongodb://localhost:27017/auctionmadness');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'djakldjaskldjaskdal', maxAge: null })); //session secret
app.use(passport.initialize());
app.use(passport.session());
PassportStrategy(passport);

app.use('/auth', AuthRouter);
app.use('/user', UserRouter);

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

