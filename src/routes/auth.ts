import { Router } from "express";

import { register, login } from "../controllers/auth";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/", (req, res) => {
  res.send("Hello from the Auth Service!");
});

export default router;
