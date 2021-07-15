'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('benefits_coupons', {
      id_coupon: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_benefits_client:{
        type:Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'benefits_clients',
          },
          key: 'id_benefits_client'
        },
        allowNull: false
      },
      coupon_code: {
        type: Sequelize.STRING(30)
      },
      discount_id: {
        type: Sequelize.STRING(60)
      },
      discount_name: {
        type: Sequelize.STRING(60)
      },
      discount_partner: {
        type: Sequelize.STRING(60)
      },
      client_id_personal: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      discount_valid_to: {
        allowNull: false,
        type: Sequelize.DATE
      },
      provider_name: {
        type: Sequelize.STRING(30),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('benefits_coupons');
  }
};