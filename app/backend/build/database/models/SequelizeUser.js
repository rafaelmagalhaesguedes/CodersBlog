"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const sequelize_1 = require("sequelize");
const _1 = require(".");
const bcrypt = require("bcrypt");
class SequelizeUser extends sequelize_1.Model {
}
SequelizeUser.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
    underscored: true,
    hooks: {
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt();
            user.password = await bcrypt.hash(user.password, salt);
        },
        beforeUpdate: async (user) => {
            if (user.changed('password')) {
                const salt = await bcrypt.genSalt();
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
    },
});
exports.default = SequelizeUser;
//# sourceMappingURL=SequelizeUser.js.map