"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Engineers", [{
      Eid: 1,
      name: "employee1",
      Pid: 1
    },{
      Eid: 2,
      name: "employee2",
      Pid: 1
    },{
      Eid: 3,
      name: "employee3",
      Pid: 2
    },{
      Eid: 6,
      name: "employee6",
      Pid: null
    },{
      Eid: 5,
      name: "employee5",
      Pid: 2
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Engineers", null, {});
  }
};
