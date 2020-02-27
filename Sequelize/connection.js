const Sequelize = require("sequelize");

const sequelize = new Sequelize("migrateddb", "root", "root",{
    host: "localhost",
    dialect: "postgres"
});

module.exports = sequelize;