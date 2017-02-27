'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        name: 'irwin',
        email: 'irwin@gmail.com',
        phone: '08123454634',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'endy',
        email: 'endy@gmail.com',
        phone: '018231412142',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'isumi',
        email: 'isumi@gmail.com',
        phone: '08123476543',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
