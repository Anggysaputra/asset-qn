"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class m_role_access extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.m_role_access.belongsTo(models.m_role, {
        foreignKey: "m_role_id",
      });
      models.m_role_access.belongsTo(models.m_action, {
        foreignKey: "m_action_id",
      });
    }
  }
  m_role_access.init(
    {
      m_role_id: DataTypes.INTEGER,
      m_action_id: DataTypes.INTEGER,
      createdBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
      flag_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
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
      modelName: "m_role_access",
      tableName: "m_role_access",
    }
  );
  return m_role_access;
};
