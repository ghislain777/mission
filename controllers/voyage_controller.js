
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Voyage, Localite, Typedelocalite } = require('../models');
const voyageController = {}

voyageController.includeVoyage = [
    {model:Localite, as:"Origine", include:[Typedelocalite]},
    {model:Localite, as:"Destination", include:[Typedelocalite]}

]


voyageController.add = async (req, res) => {
    try {
        const response = await Voyage.create(req.body)

const retour = await Voyage.findOne({
    where:{
        id:response.id
    },
    include:voyageController.includeVoyage
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

voyageController.getAll = async (req, res) => {
    const page = req.query.page? +req.query.page : 1
    const itemsPerPage = req.query.itemsPerPage? +req.query.itemsPerPage : 30
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
       

        const resultat = await Voyage.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: voyageController.includeVoyage,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

voyageController.update = async (req, res) => {
    try {
        const response = await Voyage.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const voyage = await Voyage.findOne({
            where: { id: req.params.id },
            include: voyageController.includeVoyage
        })
        res.status(200).send(voyage)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

voyageController.delete = async (req, res) => {
    try {
        const response = await Voyage.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Voyage supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

voyageController.getById = async (req, res) => {
    try {
        const response = await Voyage.findOne({
            where: { id: request.params.id },
            include: voyageController.includeVoyage
        })
        if (response == null) {
            res.status(404).send('Voyage non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


voyageController.getBy = async (req, res) => {
    try {
      const  response = await Voyage.findAndCountAll({
            where: req.body,
            include:voyageController.includeVoyage
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = voyageController

