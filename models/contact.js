'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Contact extends Model {
        static associate(models) {
            this.belongsTo(models.Localite, {
                foreignKey: { name: 'localite', field: "localite", allowNull: true }
            })
            models.Localite.hasMany(this, {
                foreignKey: { name: "localite", field: "localite", allowNull: true }
            })
        }
    }

    Contact.init(
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
            prenom: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "Prénom"
            },
            telephone: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "Téléphone"
            },
            typedecontact: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "Type de contact"
            },
            fonction: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "Fonction"
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
            modelName: 'Contact',
            tableName: "contact",
            freezeTableName: true,
            timestamps: false
        }
    );

    return Contact;
};
