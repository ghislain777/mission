
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  District, Commune } = require('../models');
const districtController = {}

districtController.includeDistrict = [
    Commune

]


districtController.add = async (req, res) => {
    try {
        const response = await District.create(req.body)

const retour = await District.findOne({
    where:{
        id:response.id
    },
    include:districtController.includeDistrict
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

districtController.getAll = async (req, res) => {
    const  itemsPerPage = parseInt(req.query.itemsPerPage ??= 30)
    const page = parseInt(req.query.page ??= 1)
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
       

        const resultat = await District.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: districtController.includeDistrict,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

districtController.update = async (req, res) => {
    try {
        const response = await District.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const district = District.findOne({
            where: { id: req.params.id },
            include: districtController.includeDistrict
        })
        res.status(200).send(district)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

districtController.delete = async (req, res) => {
    try {
        const response = await District.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('District supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

districtController.getById = async (req, res) => {
    try {
        const response = await District.findOne({
            where: { id: request.params.id },
            include: districtController.includeDistrict
        })
        if (response == null) {
            res.status(404).send('District non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


districtController.getBy = async (req, res) => {
    try {
      const  response = await District.findAndCountAll({
            where: req.body,
            include:districtController.includeDistrict
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = districtController

