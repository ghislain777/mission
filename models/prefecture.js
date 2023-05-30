'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Prefecture extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
           
        }
    }
    Prefecture.init({

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },

        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Nom"
        },

    }, {
        sequelize,
        modelName: 'Prefecture',
        tableName: 'prefecture',
        timestamps: false
    });


Prefecture.afterCreate("hookAC", async (prefecture, options) => {
   
    //on cree une localite à chaque creation de prefecture
 const typePrefecture =   await sequelize.models.Typedelocalite.findOne({
        where: {
            nom:"Prefecture"
        }
    })
    await sequelize.models.Localite.create({
        nom: ` Prefecture de ${prefecture.nom}`,
        typedelocalite: typePrefecture.id
    })
   
  })

    return Prefecture;
};