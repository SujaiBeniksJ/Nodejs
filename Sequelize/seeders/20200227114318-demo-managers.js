"use strict";

module.exports = {
  up: (queryInterface) => {
      return queryInterface.bulkInsert("Managers", [{
        Mid: 1,
        name: "Manager1",
        Pid: 1
      },{
        Mid: 2,
        name: "Manager2",
        Pid: 2
      }], {});
  },

  down: (queryInterface) => {
      return queryInterface.bulkDelete("Managers", null, {});
  }
};
