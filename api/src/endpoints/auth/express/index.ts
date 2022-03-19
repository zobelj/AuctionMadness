import { Router } from "express";
import { info, login } from 'endpoints/auth'
import passport from 'passport'


const AuthRouter = Router();

AuthRouter.post('/login',
    passport.authenticate('local', { failureMessage: true }),
    login
)

AuthRouter.get('/user',
    (req, res, next) => {
        // @ts-ignore
        if (req.user)
            return next();
        return res.status(401).json({ message: "unauthorized" })
    },
    info
)

export default AuthRouter;