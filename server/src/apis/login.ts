import { Router } from "express";

import { authenticateUser } from "./../middleware/auth";

const loginRouter = Router();

loginRouter.route("/").post(authenticateUser);

export default loginRouter;
