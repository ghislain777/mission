
const localiteRoutes = require('express').Router();
const Localite = require('../models/localite').Localite
const localiteController = require('../controllers/localite_controller');
localiteRoutes.get('/', async (req, res) =>  localiteController.getAll(req, res))
localiteRoutes.post('/', async (req, res) =>  localiteController.add(req, res))
localiteRoutes.put('/:id', async (req, res) =>  localiteController.update(req, res))
localiteRoutes.delete('/:id', async (req, res) =>  localiteController.delete(req, res))
localiteRoutes.get('/:id', async (req, res) =>  localiteController.getById(req, res))
localiteRoutes.post('/getby', async (req, res) =>  localiteController.getBy(req, res))
module.exports = localiteRoutes
