const express = require("express");
const Router = express.Router();
Router.use('/', require ('./swagger' ));
Router.use("/contacts", require("./contacts"));

module.exports = Router;
