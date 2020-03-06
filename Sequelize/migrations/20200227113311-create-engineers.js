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
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Projects",
          key: "Pid",
        },
        onDelete: "CASCADE",
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