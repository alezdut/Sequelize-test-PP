'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class benefits_client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.benefits_client.hasMany(models.benefits_coupon)// define association here
    }
  };
  benefits_client.init({
    id_benefits_client:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    client_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    client_id_personal: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    provider_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'benefits_client',
  });
  return benefits_client;
};