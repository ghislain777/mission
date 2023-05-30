'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Evenement extends Model {
        static associate(models) {

            this.belongsTo(models.Localite, {
                foreignKey: { name: 'localite', field: "localite", allowNull: true }
            })
            models.Localite.hasMany(this, {
                foreignKey: { name: "localite", field: "localite", allowNull: true }
            })

            // Définir les associations ici
        }
    }

    Evenement.init(
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
            rapport: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "Rapport"
            },
            typedevenement: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "type de levenement"
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                comment: "Date"
            },
            photo: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "Photo"
            },
            commentaire: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "Commentaire"
            },
        },
        {
            sequelize,
            modelName: 'Evenement',
            tableName: "evenement",
            freezeTableName: true,
            timestamps: true
        }
    );

    return Evenement;
};
