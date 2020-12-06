import { Router } from "express";

const plansRouter = Router();

plansRouter.route("/").get((req, res) => {
  res.send("test response");
});

export default plansRouter;
