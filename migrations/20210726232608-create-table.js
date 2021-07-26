'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email:{
        type: Sequelize.STRING,
        allowNull: true
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING,
        validate: {
          isNumeric: true
        }
      }
    });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Customers');
  }
};
