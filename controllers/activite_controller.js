const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require("sequelize");
const fonctions = require('../fonctions');
const { Activite, Menu, Privilege, Role } = require("../models");

const activiteController = {}
activiteController.add = async (req, res) => {
    try {
        const response = await Activite.create(req.body)

        // on cree aussi les privileges pour tous les roles de la base de données

        var listeRoles = await Role.findAll()
        listeRoles.forEach(async role => {
            const r = await Privilege.create({
                role: role.id,
                activite: response.id,
                actif: true,
                description: `privilège du rôle ${role.nom} sur l'activité ${response.nom}` 
            })

        });
        res.status(201).send(response)
    } catch (err) {
        console.log(err.stack)
        res.status(500).send(err.stack)
    }
}

activiteController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Activite.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                where: {
                    ...parametresRequete
                 //   ...parametres,
                    //    nom: {
                    //        [Op.like]: '%' + parametres.nom + '%'
                    //    }
                },
               // include: [Menu]
                include:[{all:true}]

            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

activiteController.update = async (req, res) => {
    try {
        const response = await Activite.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

activiteController.delete = async (req, res) => {
    try {
        const response = await Activite.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send("Item deleted successfully")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

activiteController.getById = async (req, res) => {
    try {
        const response = await Activite.findByPk(req.params.id)
        if (response == null) {
            res.status(402).send("Item not found")
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


activiteController.getBy = async (req, res) => {
    try {
        response = await Activite.findAll({
            where: req.body
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = activiteController

