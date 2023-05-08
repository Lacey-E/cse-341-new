const express = require("express");
const Router = express.Router();

const contactsController = require("../controllers/contacts");

Router.get("/", contactsController.getAll);

Router.get("/:id", contactsController.getSingle);

Router.post("/", contactsController.createContact);

Router.put("/:id", contactsController.updateContact);

Router.delete("/:id", contactsController.deleteContact);

module.exports = Router;
