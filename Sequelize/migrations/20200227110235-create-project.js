"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    const Project = queryInterface.createTable("Projects", {
      Pid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      }
    });
    return Project;
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("Projects");
  }
};