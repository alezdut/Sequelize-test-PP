'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('benefits_clients', {
      id_benefits_client: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      client_id_personal: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      provider_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('benefits_clients');
  }
};