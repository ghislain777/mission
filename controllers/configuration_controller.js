
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Configuration } = require('../models');
const configurationController = {}

configurationController.includeConfiguration = [

]


configurationController.add = async (req, res) => {
    try {
        const response = await Configuration.create(req.body)

const retour = await Configuration.findOne({
    where:{
        id:response.id
    },
    include:configurationController.includeConfiguration
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

configurationController.getAll = async (req, res) => {
    const page = req.query.page? +req.query.page : 1
    const itemsPerPage = req.query.itemsPerPage? +req.query.itemsPerPage : 30
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
       

        const resultat = await Configuration.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: configurationController.includeConfiguration,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

configurationController.update = async (req, res) => {
    try {
        const response = await Configuration.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const configuration = Configuration.findOne({
            where: { id: req.params.id },
            include: configurationController.includeConfiguration
        })
        res.status(200).send(configuration)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

configurationController.delete = async (req, res) => {
    try {
        const response = await Configuration.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Configuration supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

configurationController.getById = async (req, res) => {
    try {
        const response = await Configuration.findOne({
            where: { id: request.params.id },
            include: configurationController.includeConfiguration
        })
        if (response == null) {
            res.status(404).send('Configuration non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


configurationController.getBy = async (req, res) => {
    try {
      const  response = await Configuration.findAndCountAll({
            where: req.body,
            include:configurationController.includeConfiguration
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = configurationController

