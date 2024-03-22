"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            title: {
                type: sequelize_1.DataTypes.STRING
            },
            content: {
                type: sequelize_1.DataTypes.TEXT
            },
            image: {
                type: sequelize_1.DataTypes.STRING
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                field: 'user_id'
            },
            published: {
                type: sequelize_1.DataTypes.DATE
            },
            updated: {
                type: sequelize_1.DataTypes.DATE
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('posts');
    }
};
//# sourceMappingURL=03-posts.js.map