import { Router } from "express";
import { read, create, update } from 'endpoints/user'

const userRouter = Router();

userRouter.get('/:userId', read);
userRouter.post('/create', create);
userRouter.get('/update', update);

export default userRouter;