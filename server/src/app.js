const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongooseConnection = require("./config/mongooseConnection.config");

const app = express();

const index = require("./route/index");
const userRoutes = require("./route/user.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());

app.set("mongoose connection", mongooseConnection);

app.use(index);
app.use("/api/v1/", userRoutes);

module.exports = app;
