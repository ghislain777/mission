
const districtRoutes = require('express').Router();
const District = require('../models/district').District
const districtController = require('../controllers/district_controller');
districtRoutes.get('/', async (req, res) =>  districtController.getAll(req, res))
districtRoutes.post('/', async (req, res) =>  districtController.add(req, res))
districtRoutes.put('/:id', async (req, res) =>  districtController.update(req, res))
districtRoutes.delete('/:id', async (req, res) =>  districtController.delete(req, res))
districtRoutes.get('/:id', async (req, res) =>  districtController.getById(req, res))
districtRoutes.post('/getby', async (req, res) =>  districtController.getBy(req, res))
module.exports = districtRoutes
