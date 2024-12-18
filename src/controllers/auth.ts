import { Request, Response } from "express";

import { registerUser, loginUser } from "../services/auth";

const tokenCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export const register = async (req: Request, res: Response) => {
  try {
    const token = await registerUser(req.body);

    res.cookie("token", token, tokenCookieOptions);

    res.status(201).send(token);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);
    res.cookie("token", token, tokenCookieOptions);

    res.status(201).send(token);
  } catch (err) {
    res.status(401).send(err);
  }
};
