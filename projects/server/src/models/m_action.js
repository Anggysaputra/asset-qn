"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class m_action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.m_action.belongsTo(models.m_menu, {
        foreignKey: "m_menu_id",
      });
      models.m_action.belongsTo(models.m_sub_menu, {
        foreignKey: "m_sub_menu_id",
      });
      models.m_action.hasMany(models.m_role_access, {
        foreignKey: "m_action_id",
      });
    }
  }
  m_action.init(
    {
      action: DataTypes.STRING,
      path: DataTypes.STRING,
      m_menu_id: DataTypes.INTEGER,
      m_sub_menu_id: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.CURRENT_TIMESTAMP, // Menetapkan nilai default ke waktu saat ini
        allowNull: false, // Pastikan tidak ada nilai NULL yang diperbolehkan
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true, // Izinkan nilai NULL untuk kolom updatedAt
      },
    },
    {
      sequelize,
      modelName: "m_action",
      tableName: "m_action",
    }
  );
  return m_action;
};
