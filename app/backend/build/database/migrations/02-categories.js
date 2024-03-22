"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('categories');
    }
};
//# sourceMappingURL=02-categories.js.map