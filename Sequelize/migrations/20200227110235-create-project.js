"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Projects", {
      Pid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("Projects");
  }
};