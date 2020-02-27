"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Engineers", {
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
        references: {
          model: {
            tableName: "Projects",
            // schema: "schema"
          },
          key: "Pid"
        }
      }
    });
    // return Engineer;
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("Engineers");
  }
};