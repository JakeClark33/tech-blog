"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          passwordHash: "$2b$12$wm8Dorzgjk1OXwe2G1vt0uagpi3G7fElAxRtt9Vv01OrnFnJgrQma", // abc123
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
