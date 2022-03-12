import { Router } from "express";
import { login, register } from 'endpoints/auth'
import passport from 'passport'


const AuthRouter = Router();

AuthRouter.post('/login',
    passport.authenticate('local', { failureMessage: true }),
    login
)

AuthRouter.post('/register', register)

export default AuthRouter;