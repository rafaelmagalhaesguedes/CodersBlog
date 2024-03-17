import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('posts', [
      {
        id: 1,
        title: 'TypeScript é vida',
        content: 'Melhor post do ano',
        image: 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account',
        user_id: 1,
        published: new Date('2011-08-01T19:58:00.000Z'),
        updated: new Date('2011-08-01T19:58:51.000Z'),
      },
      {
        id: 2,
        title: 'Sequelize é vida',
        content: 'Foguete não tem ré',
        image: 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account',
        user_id: 1,
        published: new Date('2011-08-01T19:58:00.000Z'),
        updated: new Date('2011-08-01T19:58:51.000Z'),
      },
      {
        id: 3,
        title: 'Node é vida',
        content: 'Foguete não tem ré',
        image: 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account',
        user_id: 2,
        published: new Date('2011-08-01T19:58:00.000Z'),
        updated: new Date('2011-08-01T19:58:51.000Z'),
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('posts', {});
  },
}