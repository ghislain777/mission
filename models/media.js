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
            comment: "Nom"
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Model"
        },
        lien: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Lien"
        },
        idmodel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "ID model"
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
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