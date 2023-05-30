'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class District extends Model {
        static associate(models) {
            this.belongsTo(models.Commune, {
                foreignKey: { name: 'commune', field: "commune", allowNull: true }
            })
            models.Commune.hasMany(this, {
                foreignKey: { name: "commune", field: "commune", allowNull: true }
            })
            // Définir les associations ici
        }
    }

    District.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                comment: "ID"
            },
            nom: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "Nom"
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "Description"
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
            modelName: 'District',
            tableName: "district",
            freezeTableName: true,
            timestamps: false
        }
    );

    District.afterCreate("hookAC", async (district, options) => {
   
        //on cree une localite à chaque creation de prefecture
     const typeDistrict =   await sequelize.models.Typedelocalite.findOne({
            where: {
                nom:"District"
            }
        })
        await sequelize.models.Localite.create({
            nom: `District de ${district.nom}`,
            typedelocalite: typeDistrict.id
        })
       
      })

    return District;
};
