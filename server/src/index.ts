import express from "express";

const PORT = 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("test response");
});

app.listen(PORT, () => {
  console.log(`Server is listening at: ${PORT}`);
});
