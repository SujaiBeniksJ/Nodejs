const Sequelize = require("sequelize");
const sequelize = require("../connection.js");
const ProjectTable = require("./ProjectModel");

const ManagerTable = sequelize.define("Managers", {
  Mid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
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
},
{
  timestamps: false
});

ManagerTable.associate = function() {
  ManagerTable.hasOne(ProjectTable, {foreignKey: "Pid"});
};

module.exports = ManagerTable;