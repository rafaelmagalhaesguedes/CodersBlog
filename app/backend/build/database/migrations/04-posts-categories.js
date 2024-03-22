"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('posts_categories', {
            postId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'posts',
                    key: 'id'
                },
                field: 'post_id'
            },
            categoryId: {
                type: sequelize_1.DataTypes.INTEGER,
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
    down(queryInterface) {
        return queryInterface.dropTable('posts_categories');
    }
};
//# sourceMappingURL=04-posts-categories.js.map