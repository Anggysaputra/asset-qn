"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class m_sub_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.m_sub_menu.hasMany(models.m_action, {
        foreignKey: "m_sub_menu_id",
      });

      models.m_sub_menu.belongsTo(models.m_menu, {
        foreignKey: "m_menu_name",
        targetKey: "name",
      });
    }
  }
  m_sub_menu.init(
    {
      m_menu_name: DataTypes.STRING,
      name: DataTypes.STRING,
      path: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Menetapkan nilai default ke waktu saat ini
        allowNull: false, // Pastikan tidak ada nilai NULL yang diperbolehkan
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true, // Izinkan nilai NULL untuk kolom updatedAt
      },
    },
    {
      sequelize,
      modelName: "m_sub_menu",
      tableName: "m_sub_menu",
    }
  );
  return m_sub_menu;
};
