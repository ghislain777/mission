'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Commune extends Model {
    static associate(models) {

      this.belongsTo(models.Prefecture, {
        foreignKey: { name: 'prefecture', field: "prefecture", allowNull: true }
      })
      models.Prefecture.hasMany(this, {
        foreignKey: { name: "prefecture", field: "prefecture", allowNull: true }
      })
      // Définir les associations ici
    }
  }

  Commune.init(
    {
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Nom',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Description',
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "Population"
    },
    activiteprincipale: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Activite principale"
    },
    superficie: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "Superficie"
    },
    },
    {
      sequelize,
      modelName: 'Commune',
      tableName: 'commune',
      freezeTableName: true,
      timestamps: false,
    }
  );

  Commune.afterCreate("hookAC", async (commune, options) => {
   
    //on cree une localite à chaque creation de prefecture
 const typeCommune =   await sequelize.models.Typedelocalite.findOne({
        where: {
            nom:"Commune"
        }
    })
    await sequelize.models.Localite.create({
        nom: `Commune de ${commune.nom}`,
        typedelocalite: typeCommune.id
    })
   
  })

  return Commune;
};
