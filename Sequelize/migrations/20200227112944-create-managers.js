"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("Managers", {
    Mid: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
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
  }),
  down: (queryInterface) => {
    return queryInterface.dropTable("Managers");
  }
};