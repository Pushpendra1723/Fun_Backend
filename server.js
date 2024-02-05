const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Server is connected");
});

app.get("/my", (req, res) => {
  res.send("My name is Pushpendra kumar , this res is send by server");
});

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
