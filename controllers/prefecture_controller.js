
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Prefecture,  } = require('../models');
const prefectureController = {}

prefectureController.includePrefecture = [
    
]


prefectureController.add = async (req, res) => {
    try {
        const response = await Prefecture.create(req.body)

const retour = await Prefecture.findOne({
    where:{
        id:response.id
    },
    include:prefectureController.includePrefecture
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

prefectureController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Prefecture.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: prefectureController.includePrefecture,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

prefectureController.update = async (req, res) => {
    try {
        const response = await Prefecture.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const prefecture = Prefecture.findOne({
            where: { id: req.params.id },
            include: prefectureController.includePrefecture
        })
        res.status(200).send(prefecture)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

prefectureController.delete = async (req, res) => {
    try {
        const response = await Prefecture.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Prefecture supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

prefectureController.getById = async (req, res) => {
    try {
        const response = await Prefecture.findOne({
            where: { id: request.params.id },
            include: prefectureController.includePrefecture
        })
        if (response == null) {
            res.status(404).send('Prefecture non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


prefectureController.getBy = async (req, res) => {
    try {
      const  response = await Prefecture.findAndCountAll({
            where: req.body,
            include:prefectureController.includePrefecture
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = prefectureController

