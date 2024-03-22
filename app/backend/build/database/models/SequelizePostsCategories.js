"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const sequelize_1 = require("sequelize");
const _1 = require(".");
const SequelizeCategories_1 = require("./SequelizeCategories");
const SequelizePosts_1 = require("./SequelizePosts");
class SequelizePostsCategories extends sequelize_1.Model {
}
SequelizePostsCategories.init({
    postId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false, // Ensure postId is not null
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false, // Ensure categoryId is not null
    },
}, {
    sequelize: _1.default,
    modelName: 'posts_categories',
    underscored: true,
    timestamps: false,
});
SequelizePosts_1.default.belongsToMany(SequelizeCategories_1.default, { through: SequelizePostsCategories, as: 'categories' });
SequelizeCategories_1.default.belongsToMany(SequelizePosts_1.default, { through: SequelizePostsCategories, as: 'posts' });
exports.default = SequelizePostsCategories;
//# sourceMappingURL=SequelizePostsCategories.js.map