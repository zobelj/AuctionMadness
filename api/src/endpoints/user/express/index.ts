import { Router } from "express";
import { read, create, update } from 'endpoints/user'

const UserRouter = Router();

UserRouter.get('/:userId', read);
UserRouter.post('/create', create);
UserRouter.get('/update', update);

export default UserRouter;