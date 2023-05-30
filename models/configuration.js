'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Configuration extends Model {
    static associate(models) {
      // Définir les associations ici
    }
  }

  Configuration.init(
    {
      parametre: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Paramètre',
      },
      valeur: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Valeur',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Description',
      },
    },
    {
      sequelize,
      modelName: 'Configuration',
      tableName: 'configuration',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Configuration;
};
