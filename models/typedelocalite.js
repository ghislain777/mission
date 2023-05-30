'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Typedelocalite extends Model {
    
    static associate(models) {
     
     
    }
  }
  Typedelocalite.init({
    id: {
          type:DataTypes.INTEGER,
          autoIncrement:true, 
          primaryKey: true,
          comment:"ID"
        },
    nom: {
      type:DataTypes.STRING,
      allowNull:false,
      comment:"Nom"
    },
    description: {
      type:DataTypes.STRING,
      allowNull:true,
      comment:'Description'
    },
  }, {
    sequelize,
    modelName: 'Typedelocalite',
    tableName:"typedelocalite",
    freezeTableName:true,
    timestamps:false
  });
  return Typedelocalite;
};