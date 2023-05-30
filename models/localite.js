'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Localite extends Model {
        static associate(models) {
            this.belongsTo(models.Typedelocalite, {
                foreignKey: { name: 'typedelocalite', field: "typedelocalite", allowNull: true }
            })
            models.Typedelocalite.hasMany(this, {
                foreignKey: { name: "typedelocalite", field: "typedelocalite", allowNull: true }
            })

        }
    }
    Localite.init({
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
            comment: 'Description'
        },
    }, {
        sequelize,
        modelName: 'Localite',
        tableName: "localite",
        freezeTableName: true,
        timestamps: false
    });
    return Localite;
};