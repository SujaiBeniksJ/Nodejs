module.exports = (sequelize, Sequelize) => {

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
  return EngineerTable;
};