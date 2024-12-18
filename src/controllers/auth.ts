import {Request, Response} from 'express';

import {registerUser, loginUser} from '../services/auth';

export const register = async (req: Request, res: Response) => {
    const result = await registerUser(req.body);
  res.status(result.status).send(result.data);
};

export const login = async (req: Request, res: Response) => {
    const result = await loginUser(req.body.username, req.body.password);
    res.status(result.status).send(result.data);
}