import { Router } from "express";

const loginRouter = Router();

loginRouter.route("/").get((req, res) => {
  res.send("test response");
});

export default loginRouter;
