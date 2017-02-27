'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {username: 'eri', email: 'eri@email.com', phone: '1234567890', createdAt: new Date(), updatedAt: new Date()},
      {username: 'wahyu', email: 'wahyu@email.com', phone: '1234567890', createdAt: new Date(), updatedAt: new Date()},
      {username: 'irwin', email: 'irwin@email.com', phone: '1234567890', createdAt: new Date(), updatedAt: new Date()},
      {username: 'firman', email: 'firman@email.com', phone: '1234567890', createdAt: new Date(), updatedAt: new Date()},
      {username: 'endy', email: 'endy@email.com', phone: '1234567890', createdAt: new Date(), updatedAt: new Date()},
      {username: 'adam', email: 'adam@email.com', phone: '1234567890', createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
