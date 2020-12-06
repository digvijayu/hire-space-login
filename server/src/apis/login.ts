import { Router } from "express";

import { authenticateUser } from "./../middleware/auth";

const loginRouter = Router();

loginRouter.route("/").get(authenticateUser);

export default loginRouter;
