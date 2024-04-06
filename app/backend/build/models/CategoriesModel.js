"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeCategories_1 = require("../database/models/SequelizeCategories");
const sequelize_1 = require("sequelize");
class CategoriesModel {
    //
    constructor(categoriesModel = SequelizeCategories_1.default) {
        this.categoriesModel = categoriesModel;
    }
    async findAll() {
        //
        const categories = await this.categoriesModel.findAll();
        if (!categories) {
            return null;
        }
        return categories;
    }
    async findById(id) {
        const category = await this.categoriesModel.findOne({ where: { id } });
        if (!category) {
            return null;
        }
        return category;
    }
    async findByName(name) {
        const category = await this.categoriesModel.findOne({ where: { name } });
        if (!category) {
            return null;
        }
        return category;
    }
    async findCategory(categoryIds) {
        const { count } = await this.categoriesModel.findAndCountAll({
            where: {
                id: {
                    [sequelize_1.Op.in]: categoryIds,
                },
            },
        });
        return count === categoryIds.length;
    }
    ;
    async create(category) {
        const newCategory = await this.categoriesModel.create(category);
        if (!newCategory) {
            return null;
        }
        return newCategory;
    }
    async update(id, category) {
        const categoryUpdate = await this.categoriesModel.update({ ...category }, { where: { id } });
        if (!categoryUpdate)
            return null;
        const updatedCategory = await this.findById(id);
        if (!updatedCategory)
            return null;
        return updatedCategory;
    }
    async delete(id) {
        const category = await this.categoriesModel.findOne({ where: { id } });
        if (!category)
            return false;
        await this.categoriesModel.destroy({ where: { id } });
        return true;
    }
}
exports.default = CategoriesModel;
//# sourceMappingURL=CategoriesModel.js.map