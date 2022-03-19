import { Router } from "express";
import { login, signup } from 'endpoints/auth'
import passport from 'passport'


const AuthRouter = Router();

AuthRouter.post('/login',
    passport.authenticate('local', { failureMessage: true }),
    login
)

AuthRouter.post('/signup', signup)

export default AuthRouter;