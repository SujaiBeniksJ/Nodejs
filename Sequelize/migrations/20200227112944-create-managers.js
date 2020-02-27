"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Managers", {
      Mid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("Managers");
  }
};