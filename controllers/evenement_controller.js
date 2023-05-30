
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Evenement, Localite } = require('../models');
const evenementController = {}

evenementController.includeEvenement = [
Localite
]


evenementController.add = async (req, res) => {
    try {
        const response = await Evenement.create(req.body)

const retour = await Evenement.findOne({
    where:{
        id:response.id
    },
    include:evenementController.includeEvenement
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

evenementController.getAll = async (req, res) => {
    const  itemsPerPage = parseInt(req.query.itemsPerPage ??= 30)
    const page = parseInt(req.query.page ??= 1)
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
       

        const resultat = await Evenement.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: evenementController.includeEvenement,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

evenementController.update = async (req, res) => {
    try {
        const response = await Evenement.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const evenement = await Evenement.findOne({
            where: { id: req.params.id },
            include: evenementController.includeEvenement
        })
        res.status(200).send(evenement)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

evenementController.delete = async (req, res) => {
    try {
        const response = await Evenement.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Evenement supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

evenementController.getById = async (req, res) => {
    try {
        const response = await Evenement.findOne({
            where: { id: request.params.id },
            include: evenementController.includeEvenement
        })
        if (response == null) {
            res.status(404).send('Evenement non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


evenementController.getBy = async (req, res) => {
    try {
      const  response = await Evenement.findAndCountAll({
            where: req.body,
            include:evenementController.includeEvenement
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = evenementController

