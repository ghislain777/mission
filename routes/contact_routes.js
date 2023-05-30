
const contactRoutes = require('express').Router();
const Contact = require('../models/contact').Contact
const contactController = require('../controllers/contact_controller');
contactRoutes.get('/', async (req, res) =>  contactController.getAll(req, res))
contactRoutes.post('/', async (req, res) =>  contactController.add(req, res))
contactRoutes.put('/:id', async (req, res) =>  contactController.update(req, res))
contactRoutes.delete('/:id', async (req, res) =>  contactController.delete(req, res))
contactRoutes.get('/:id', async (req, res) =>  contactController.getById(req, res))
contactRoutes.post('/getby', async (req, res) =>  contactController.getBy(req, res))
module.exports = contactRoutes
