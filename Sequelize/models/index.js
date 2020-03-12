// module.exports = {
//   EngineerModel: require("./EngineerModel"),
//   ManagerModel: require("./MangerModel"),
//   ProjectModel: require("./ProjectModel")
// };
const globalConfig = require("../config");

const Sequelize = require("sequelize");

class DBManager extends Sequelize {
  constructor(config){
    config = config || {};
    config.dialect = globalConfig.db;
    config.host = globalConfig.host;
    config.port = globalConfig.port;
    super(
      globalConfig.dbName,
      globalConfig.username,
      globalConfig.password,
      config
    );
    this.setup();
  }
  setup() {
    this.import("EngineerModel", require("./EngineerModel"));
    this.import("MangerModel", require("./MangerModel"));
    this.import("ProjectModel", require("./ProjectModel"));
  }
}

module.exports = DBManager;