
const { response, request } = require('express');
const multer = require('multer');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const { Media } = require('../models');
const mediaController = {}

mediaController.includeMedia = [

]


mediaController.add = async (req, res) => {
    try {
        const response = await Media.create(req.body)

        const retour = await Media.findOne({
            where: {
                id: response.id
            },
            include: mediaController.includeMedia
        })

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mediaController.getAll = async (req, res) => {
    let itemsPerPage = 30;
    let page = 1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {


        const resultat = await Media.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage * 1,
                order: [['id', 'desc']],
                where: {
                    ...parametresRequete

                },
                include: mediaController.includeMedia,

            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mediaController.update = async (req, res) => {
    try {
        const response = await Media.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const media = Media.findOne({
            where: { id: req.params.id },
            include: mediaController.includeMedia
        })
        res.status(200).send(media)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mediaController.delete = async (req, res) => {
    try {
        const response = await Media.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Media supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

mediaController.getById = async (req, res) => {
    try {
        const response = await Media.findOne({
            where: { id: request.params.id },
            include: mediaController.includeMedia
        })
        if (response == null) {
            res.status(404).send('Media non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}

mediaController.getBy = async (req, res) => {
    try {
        const response = await Media.findAndCountAll({
            where: req.body,
            include: mediaController.includeMedia
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

mediaController.uploadMedia = async (req, res) => {
    //repertoire = `${req.body.modele}/${req.body.champ}`
    var data = {
        nom: req.body.nom,
        modele: req.body.modele,
        fichier: `/fichiers/${req.file.filename}`,
        champ: req.body.champ,
        type: "image",
    }
    var where = {
        modele: req.body.modele,
        champ: req.body.champ,

    }
    if (req.body.contact != undefined) { 
        data['contact'] = +req.body.contact
        where['contact'] = +req.body.contact
    
    }
    if (req.body.voyage != undefined) {
        data['voyage'] = +req.body.voyage
        where['voyage'] = +req.body.voyage
    
    }
    if (req.body.evenement != undefined){
        data['evenement'] = +req.body.evenement
        where['evenement'] = +req.body.evenement
        
        
        }
    await Media.create(data)
    // const multerStorage = multer.diskStorage({x});
    const medias = await Media.findAll({
        where: where
    })
    res.json(medias);
}
// })


module.exports = mediaController

