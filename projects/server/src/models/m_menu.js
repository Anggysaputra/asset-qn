"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class m_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.m_menu.hasMany(models.m_action, {
        foreignKey: "m_menu_id",
      });
      m_menu.hasMany(models.m_sub_menu, {
        foreignKey: "m_menu_name",
        sourceKey: "name",
      });
    }
  }
  m_menu.init(
    {
      name: DataTypes.STRING,
      icon: DataTypes.STRING,
      path: DataTypes.STRING,
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true, // Izinkan nilai NULL untuk kolom updatedAt
      },
    },
    {
      sequelize,
      modelName: "m_menu",
      tableName: "m_menu",
    }
  );
  return m_menu;
};
