const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("Users page");
  res.send("<h1>Users page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Home page");
  res.send("<h1>Home page</h1>");
});

app.listen(3001);
