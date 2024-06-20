'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefonos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Telefonos.belongsTo(models.cuentas, {
        foreignKey: 'id_user'
      });
    }
  }
  Telefonos.init({
    name: DataTypes.STRING,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Telefonos',
  });
  return Telefonos;
};
