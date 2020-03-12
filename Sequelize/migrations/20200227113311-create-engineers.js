"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("Engineers", {
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
  }),
  down: (queryInterface) => {
    return queryInterface.dropTable("Engineers");
  }
};