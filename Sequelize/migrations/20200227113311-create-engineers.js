"use strict";
const ProjectTable = require("../models/ProjectModel");
module.exports = {
  up: (queryInterface, Sequelize) => {
    const EngineerTable = queryInterface.createTable("Engineers", {
      Eid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      Pid: {
        type: Sequelize.INTEGER
      }
    });
    EngineerTable.associate = function() {
      ProjectTable.hasMany(EngineerTable, {foreignKey: "Pid"});
    };
    return EngineerTable;
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("Engineers");
  }
};