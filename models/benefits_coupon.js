'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class benefits_coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.benefits_coupon.belongsTo(models.benefits_client)// define association here
    }
  };
  benefits_coupon.init({
    id_coupon: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_benefits_client: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    coupon_code: {
      type: DataTypes.STRING(30)
    },
    discount_id: {
      type: DataTypes.STRING(60)
    },
    discount_name: {
      type: DataTypes.STRING(60)
    },
    discount_valid_to:{
      type: DataTypes.DATE
    },
    discount_partner: {
      type: DataTypes.STRING(60)
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
    modelName: 'benefits_coupon',
  });
  return benefits_coupon;
};