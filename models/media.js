'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Media extends Model {
        static associate(models) {

            this.belongsTo(models.Voyage, {
                foreignKey: { name: 'voyage', field: "voyage", allowNull: true }
            })
            models.Voyage.hasMany(this, {
                foreignKey: { name: "voyage", field: "voyage", allowNull: true }
            })

            this.belongsTo(models.Evenement, {
                foreignKey: { name: 'evenement', field: "evenement", allowNull: true }
            })
            models.Evenement.hasMany(this, {
                foreignKey: { name: "evenement", field: "evenement", allowNull: true }
            })

            this.belongsTo(models.Contact, {
                foreignKey: { name: 'contact', field: "contact", allowNull: true }
            })
            models.Contact.hasMany(this, {
                foreignKey: { name: "contact", field: "contact", allowNull: true }
            })

        }
    }
    Media.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Nom",
            defaultValue: ""
        },
        modele: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "produit",
            comment: 'Modele'
        },
        champ: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "photo",
            comment: 'Collone'
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "image",
            comment: 'type de media'
        },
        fichier: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "fichier"
        },
    }, {
        sequelize,
        modelName: 'Media',
        tableName: "media",
        freezeTableName: true,
        timestamps: false
    });
    return Media;
};