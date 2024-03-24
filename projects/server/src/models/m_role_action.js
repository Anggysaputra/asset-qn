'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class m_role_action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  m_role_action.init({
    m_role_id: DataTypes.INTEGER,
    m_menu_id: DataTypes.INTEGER,
    m_sub_menu: DataTypes.INTEGER,
    m_action: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'm_role_action',
  });
  return m_role_action;
};