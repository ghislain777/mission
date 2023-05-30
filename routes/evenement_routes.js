
const evenementRoutes = require('express').Router();
const Evenement = require('../models/evenement').Evenement
const evenementController = require('../controllers/evenement_controller');
evenementRoutes.get('/', async (req, res) =>  evenementController.getAll(req, res))
evenementRoutes.post('/', async (req, res) =>  evenementController.add(req, res))
evenementRoutes.put('/:id', async (req, res) =>  evenementController.update(req, res))
evenementRoutes.delete('/:id', async (req, res) =>  evenementController.delete(req, res))
evenementRoutes.get('/:id', async (req, res) =>  evenementController.getById(req, res))
evenementRoutes.post('/getby', async (req, res) =>  evenementController.getBy(req, res))
module.exports = evenementRoutes
