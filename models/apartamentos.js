'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apartamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Apartamentos.belongsTo(models.cuentas, {
        foreignKey: 'id_user',
      });
    }
  }
  Apartamentos.init({
    name: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    direction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Apartamentos',
  });
  return Apartamentos;
};