const express = require("express");
const Router = express.Router();

Router.use("/contacts", require("./contacts"));

module.exports = Router;
