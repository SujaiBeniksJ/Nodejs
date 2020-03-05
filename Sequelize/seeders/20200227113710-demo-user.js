"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Projects", [{
      Pid: 1,
      name: "Project1"
    },{
      Pid: 2,
      name: "Project2",
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Projects", null, {});
  }
};
