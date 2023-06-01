
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Village, Prefecture } = require('../models');
const villageController = {}

villageController.includeVillage = [
Prefecture
]


villageController.add = async (req, res) => {
    try {
        const response = await Village.create(req.body)

const retour = await Village.findOne({
    where:{
        id:response.id
    },
    include:villageController.includeVillage
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

villageController.getAll = async (req, res) => {
    const page = req.query.page? +req.query.page : 1
    const itemsPerPage = req.query.itemsPerPage? +req.query.itemsPerPage : 30
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
      //  const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Village.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: villageController.includeVillage,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

villageController.update = async (req, res) => {
    try {
        const response = await Village.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const village = Village.findOne({
            where: { id: req.params.id },
            include: villageController.includeVillage
        })
        res.status(200).send(village)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

villageController.delete = async (req, res) => {
    try {
        const response = await Village.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Village supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

villageController.getById = async (req, res) => {
    try {
        const response = await Village.findOne({
            where: { id: request.params.id },
            include: villageController.includeVillage
        })
        if (response == null) {
            res.status(404).send('Village non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


villageController.getBy = async (req, res) => {
    try {
      const  response = await Village.findAndCountAll({
            where: req.body,
            include:villageController.includeVillage
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = villageController

