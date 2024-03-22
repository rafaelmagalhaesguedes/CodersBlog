"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const sequelize_1 = require("sequelize");
const _1 = require(".");
const SequelizeUser_1 = require("./SequelizeUser");
class SequelizePosts extends sequelize_1.Model {
}
SequelizePosts.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
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
        field: 'user_id'
    },
    published: {
        type: sequelize_1.DataTypes.DATE
    },
    updated: {
        type: sequelize_1.DataTypes.DATE
    },
}, {
    sequelize: _1.default,
    modelName: 'posts',
    underscored: true,
    timestamps: false,
});
SequelizePosts.belongsTo(SequelizeUser_1.default, { foreignKey: 'userId', as: 'user' });
SequelizeUser_1.default.hasMany(SequelizePosts, { foreignKey: 'userId', as: 'posts', });
exports.default = SequelizePosts;
//# sourceMappingURL=SequelizePosts.js.map