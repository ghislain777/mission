
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Contact, Localite } = require('../models');
const contactController = {}

contactController.includeContact = [
    Localite
]


contactController.add = async (req, res) => {
    try {
        const response = await Contact.create(req.body)

const retour = await Contact.findOne({
    where:{
        id:response.id
    },
    include:contactController.includeContact
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

contactController.getAll = async (req, res) => {
    const  itemsPerPage = parseInt(req.query.itemsPerPage ??= 30)
    const page = parseInt(req.query.page ??= 1)
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
       

        const resultat = await Contact.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: contactController.includeContact,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

contactController.update = async (req, res) => {
    try {
        const response = await Contact.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const contact = await Contact.findOne({
            where: { id: req.params.id },
            include: contactController.includeContact
        })
        res.status(200).send(contact)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

contactController.delete = async (req, res) => {
    try {
        const response = await Contact.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Contact supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

contactController.getById = async (req, res) => {
    try {
        const response = await Contact.findOne({
            where: { id: request.params.id },
            include: contactController.includeContact
        })
        if (response == null) {
            res.status(404).send('Contact non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


contactController.getBy = async (req, res) => {
    try {
      const  response = await Contact.findAndCountAll({
            where: req.body,
            include:contactController.includeContact
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = contactController

