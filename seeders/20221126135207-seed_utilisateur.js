'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Utilisateur',[

{
  nom: "KEPNIA",
  prenom: "Ghislain", 
  telephone: "0101323228",
  email:"admin@zentchnologies.net",
  motdepasse: "123", 
  actif: true,
  role:1
  
},

{
  nom: "Tchakounte",
  prenom: "costa", 
  telephone: "664222527",
  email:"tghislain@gmaail.com",
  motdepasse: "abc", 
  actif: true,
  role:1

}

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
