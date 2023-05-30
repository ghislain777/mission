
const prefectureRoutes = require('express').Router();
const Prefecture = require('../models/prefecture').Prefecture
const prefectureController = require('../controllers/prefecture_controller');
prefectureRoutes.get('/', async (req, res) =>  prefectureController.getAll(req, res))
prefectureRoutes.post('/', async (req, res) =>  prefectureController.add(req, res))
prefectureRoutes.put('/:id', async (req, res) =>  prefectureController.update(req, res))
prefectureRoutes.delete('/:id', async (req, res) =>  prefectureController.delete(req, res))
prefectureRoutes.get('/:id', async (req, res) =>  prefectureController.getById(req, res))
prefectureRoutes.post('/getby', async (req, res) =>  prefectureController.getBy(req, res))
module.exports = prefectureRoutes
