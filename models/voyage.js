'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Voyage extends Model {
        static associate(models) {
            this.belongsTo(models.Localite, {
                foreignKey: { name: 'origine',  field: "origine", allowNull: true },
                as:'Origine'
            })
            models.Localite.hasMany(this, {
                foreignKey: { name: "origine", field: "origine", allowNull: true }
            })

            this.belongsTo(models.Localite, {
                foreignKey: { name: 'destination', field: "destination", allowNull: true },
                as:"Destination"
            })
            models.Localite.hasMany(this, {
                foreignKey: { name: "destination", field: "destination", allowNull: true }
            })

            // Définir les associations ici
        }
    }

    Voyage.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                comment: "ID"
            },

            distance: {
                type: DataTypes.FLOAT,
                allowNull: true,
                comment: "Distance en km"
            },
            datedepart: {
                type: DataTypes.DATE,
                allowNull: true,
                comment: "Date de départ"
            },
            datearrivee: {
                type: DataTypes.DATE,
                allowNull: true,
                comment: "Date d'arrivée"
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "Description"
            },
            consommationcarburant: {
                type: DataTypes.FLOAT,
                allowNull: true,
                comment: "Consommation de carburant"
            },
        },
        {
            sequelize,
            modelName: 'Voyage',
            tableName: "voyage",
            freezeTableName: true,
            timestamps: false
        }
    );

    return Voyage;
};
