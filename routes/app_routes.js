

const appRoutes = require('express').Router();
const appController = require('../controllers/app_controller');
appRoutes.get('/dashboard', async (req, res) =>  appController.dashboard(req, res))

module.exports = appRoutes
