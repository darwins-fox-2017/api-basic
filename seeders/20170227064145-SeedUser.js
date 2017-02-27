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
    return queryInterface.bulkInsert('Users',
    [
      {
        firstname: 'Isumi',
        lastname: 'Karina',
        email: 'isumi.karina72@gmail.com',
        phone: '08159070289',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Aiko',
        lastname: 'Diandra',
        email: 'aiko.diandra@gmail.com',
        phone: '08159070289',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  return queryInterface.bulkDelete('Users', null);
  }
};
