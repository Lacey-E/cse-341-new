
const routes = require('express').Router();

const myController = require('../controllers');


routes.get('/', myController.awesomeFunction);

routes.get('/even', myController.nameAwesomeFunction);



module.exports = routes;