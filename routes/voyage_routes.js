
const voyageRoutes = require('express').Router();
const Voyage = require('../models/voyage').Voyage
const voyageController = require('../controllers/voyage_controller');
voyageRoutes.get('/', async (req, res) =>  voyageController.getAll(req, res))
voyageRoutes.post('/', async (req, res) =>  voyageController.add(req, res))
voyageRoutes.put('/:id', async (req, res) =>  voyageController.update(req, res))
voyageRoutes.delete('/:id', async (req, res) =>  voyageController.delete(req, res))
voyageRoutes.get('/:id', async (req, res) =>  voyageController.getById(req, res))
voyageRoutes.post('/getby', async (req, res) =>  voyageController.getBy(req, res))
module.exports = voyageRoutes
