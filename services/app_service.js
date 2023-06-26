
const {Localite,Prefecture, Contact, Media, Evenement, Voyage,  Commune, District, Typedelocalite} = require('../models')


const appService = {}
appService.getdashboard = () => {

return new  Promise((resolve, reject) => {

const retour = {}

const promiseLocalites = Localite.findAll(
    {include: [Typedelocalite]}
)
// const promisePrefecture = Prefecture.findAll()
// const PromiseCommune = Commune.findAll()
// const PromiseDistrict = District.findAll()
const promiseVoyage= Voyage.findAll({
    include:[Media, {model:Localite, as:"Origine", include:[Typedelocalite]}, {model:Localite, as:"Destination", include:[Typedelocalite]}]
})
const promiseContact = Contact.findAll({
    include: [Localite, Media]
})
const PromiseEvenement = Evenement.findAll({
    include:[Localite, Media]
})

Promise.all([
    promiseLocalites,
   // promisePrefecture,
  //  PromiseCommune,
  //  PromiseDistrict,
    promiseVoyage,
    promiseContact,
    PromiseEvenement

    ]).then((data)=>{
        //retour.prefectures = data[1]
        ///retour.communes = data[2]
        // retour.district = data[3]
        retour.voyages = data[1]
        retour.contacts = data[2]
        retour.evenements = data[3]
        retour.localites = data[0]
    resolve(retour)
})
})  
}

module.exports = appService