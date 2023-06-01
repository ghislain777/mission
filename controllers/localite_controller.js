
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Localite } = require('../models');
const localiteController = {}

localiteController.includeLocalite = [

]


localiteController.add = async (req, res) => {
    try {
        const response = await Localite.create(req.body)

const retour = await Localite.findOne({
    where:{
        id:response.id
    },
    include:localiteController.includeLocalite
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

localiteController.getAll = async (req, res) => {
    const page = req.query.page? +req.query.page : 1
    const itemsPerPage = req.query.itemsPerPage? +req.query.itemsPerPage : 30
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
       

        const resultat = await Localite.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: localiteController.includeLocalite,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

localiteController.update = async (req, res) => {
    try {
        const response = await Localite.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const localite = await Localite.findOne({
            where: { id: req.params.id },
            include: localiteController.includeLocalite
        })
        res.status(200).send(localite)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

localiteController.delete = async (req, res) => {
    try {
        const response = await Localite.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Localite supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

localiteController.getById = async (req, res) => {
    try {
        const response = await Localite.findOne({
            where: { id: request.params.id },
            include: localiteController.includeLocalite
        })
        if (response == null) {
            res.status(404).send('Localite non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


localiteController.getBy = async (req, res) => {
    try {
      const  response = await Localite.findAndCountAll({
            where: req.body,
            include:localiteController.includeLocalite
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = localiteController

