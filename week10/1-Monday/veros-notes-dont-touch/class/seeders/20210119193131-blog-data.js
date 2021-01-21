'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    //[{}]

    await queryInterface.bulkInsert('blogs', [

      {
        title: 'Promises',
        body: 'sdflskjdfsldjfl;sk', 
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Prototypes',
        body: 's,djs;lkdfjslkdjf', 
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Sequelize',
        body: 'slkdjfsldfj', 
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'PG Promise',
        body: 'sdkjfslkdf', 
        userID: 4,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'React',
        body: 'sldkfjsldkjfs', 
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Redux',
        body: 'slkfjsl;kdjflsdf', 
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Bootstrap',
        body: 'lskjdflsk', 
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'JQuery',
        body: 'slkjdf;slkdjfls', 
        userID: 4,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Alogrithms',
        body: 'lskjfs;lkdf', 
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Houston - Htown',
        body: 'sldkfjls', 
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Atlanta - ATL',
        body: 'sdjfslkjdfs', 
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Santa Barbara',
        body: 'lsdkjflskdf', 
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Seattle- Emerald City',
        body: 'sldkfjslkdfj', 
        userID: 4,
        createdAt: new Date(),
        updatedAt: new Date() 

      }
    ], {});

    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
