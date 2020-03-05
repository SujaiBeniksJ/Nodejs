"use strict";
const ProjectTable = require("../models/ProjectModel");
module.exports = {
  up: (queryInterface, Sequelize) => {
    const ManagerTable = queryInterface.createTable("Managers", {
      Mid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      Pid: {
        type: Sequelize.INTEGER
      }
    });
    ManagerTable.associate = function() {
      ProjectTable.hasOne(ManagerTable, {foreignKey: "Pid"});
    };
    return ManagerTable;
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("Managers");
  }
};