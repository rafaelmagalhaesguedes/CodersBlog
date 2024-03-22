"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const sequelize_1 = require("sequelize");
const _1 = require(".");
class SequelizeCategories extends sequelize_1.Model {
}
SequelizeCategories.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'categories',
    timestamps: false,
    underscored: true,
});
exports.default = SequelizeCategories;
//# sourceMappingURL=SequelizeCategories.js.map