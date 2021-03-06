import express from 'express';
import mongoose from 'mongoose'
import passport from 'passport'
import session from 'express-session'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import enableWs from 'express-ws'

import AuthRouter from 'endpoints/auth/express'
import UserRouter from 'endpoints/user/express'

import PassportStrategy from 'middleware/auth/passport'


const app = express();
const port = 3030;

enableWs(app);

mongoose.connect('mongodb+srv://james:wYRsm3eeHhenzJm7@cluster0.tucj3.mongodb.net/AuctionMadness?retryWrites=true&w=majority');

app.use(morgan(':method :status :url :response-time'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use(session({ secret: 'djakldjaskldjaskdal', maxAge: null })); //session secret
app.use(passport.initialize());
app.use(passport.session());
PassportStrategy(passport);

app.use('/auth', AuthRouter);
app.use('/user', UserRouter);

// @ts-ignore
app.ws('/echo', (ws, req) => {
  ws.on('message', msg => {
    ws.send(msg)
  })

  ws.on('close', () => {
    console.log('WebSocket was closed')
  })
})

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

