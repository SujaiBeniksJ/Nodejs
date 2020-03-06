const Sequelize = require("sequelize");
const sequelize = require("../connection.js");
const ProjectTable = require("./ProjectModel.js");

const EngineerTable = sequelize.define("Engineers", {
  Eid: {
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

EngineerTable.associate = function() {
  ProjectTable.hasMany(EngineerTable, {foreignKey: "Pid"});
};

module.exports = EngineerTable;