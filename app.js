const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

const errorController = require("./src/controllers/error");

const adminRoutes = require("./src/routes/admin");
const shopRoutes = require("./src/routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.notFound);

app.listen(3001);
