import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('posts_categories', {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'posts',
          key: 'id'
        },
        field: 'post_id'
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id'
        },
        field: 'category_id'
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('posts_categories');
  }
};