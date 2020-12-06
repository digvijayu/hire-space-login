import express from "express";
import bodyParser from "body-parser";

import loginRouter from "./apis/login";
import plansRouter from "./apis/plans";

const PORT = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/login", loginRouter);
app.use("/plans", plansRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at: ${PORT}`);
});
