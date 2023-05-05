const express = require('express')
const Router = express.Router()

const contactsController = require('../controllers/contacts')

Router.get('/', contactsController.getAll)
Router.get('/:id', contactsController.getSingle)
module.exports = Router