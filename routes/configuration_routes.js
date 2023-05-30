
const configurationRoutes = require('express').Router();
const Configuration = require('../models/configuration').Configuration
const configurationController = require('../controllers/configuration_controller');
configurationRoutes.get('/', async (req, res) =>  configurationController.getAll(req, res))
configurationRoutes.post('/', async (req, res) =>  configurationController.add(req, res))
configurationRoutes.put('/:id', async (req, res) =>  configurationController.update(req, res))
configurationRoutes.delete('/:id', async (req, res) =>  configurationController.delete(req, res))
configurationRoutes.get('/:id', async (req, res) =>  configurationController.getById(req, res))
configurationRoutes.post('/getby', async (req, res) =>  configurationController.getBy(req, res))
module.exports = configurationRoutes
