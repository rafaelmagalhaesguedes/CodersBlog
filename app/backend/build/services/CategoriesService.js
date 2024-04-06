"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const CategoriesModel_1 = require("../models/CategoriesModel");
// Constants
const CREATED = 'CREATED';
const CONFLICT = 'CONFLICT';
const NOT_FOUND = 'NOT_FOUND';
const SUCCESSFUL = 'SUCCESSFUL';
const INTERNAL_ERROR = 'INTERNAL_ERROR';
const CATEGORY_NOT_FOUND = 'Category not found!';
const CATEGORIES_NOT_FOUND = 'Categories not found!';
const CATEGORY_NOT_CREATED = 'Category not created!';
const CATEGORY_NOT_UPDATED = 'Category not updated!';
const CATEGORY_NOT_DELETED = 'Category not deleted!';
const CATEGORY_ALREADY_EXISTS = 'Category already exists!';
class CategoriesService {
    constructor(categoriesModel = new CategoriesModel_1.default()) {
        this.categoriesModel = categoriesModel;
    }
    async findAllCategories() {
        const categories = await this.categoriesModel.findAll();
        if (categories === null) {
            return { status: NOT_FOUND, data: { message: CATEGORIES_NOT_FOUND } };
        }
        return { status: SUCCESSFUL, data: categories };
    }
    async createCategory(category) {
        const categoryExists = await this.categoriesModel.findByName(category.name);
        if (categoryExists) {
            return { status: CONFLICT, data: { message: CATEGORY_ALREADY_EXISTS } };
        }
        const newCategory = await this.categoriesModel.create(category);
        if (newCategory === null) {
            return { status: INTERNAL_ERROR, data: { message: CATEGORY_NOT_CREATED } };
        }
        return { status: CREATED, data: newCategory };
    }
    async updateCategory(id, category) {
        const categoryExists = await this.categoriesModel.findById(id);
        if (categoryExists === null) {
            return { status: NOT_FOUND, data: { message: CATEGORY_NOT_FOUND } };
        }
        const updatedCategory = await this.categoriesModel.update(id, category);
        if (updatedCategory === null) {
            return { status: NOT_FOUND, data: { message: CATEGORY_NOT_UPDATED } };
        }
        return { status: SUCCESSFUL, data: updatedCategory };
    }
    async deleteCategory(id) {
        const categoryExists = await this.categoriesModel.findById(id);
        if (categoryExists === null) {
            return { status: NOT_FOUND, data: { message: CATEGORY_NOT_FOUND } };
        }
        const deletedCategory = await this.categoriesModel.delete(id);
        if (deletedCategory === null) {
            return { status: INTERNAL_ERROR, data: { message: CATEGORY_NOT_DELETED } };
        }
        return { status: SUCCESSFUL, data: deletedCategory };
    }
}
exports.default = CategoriesService;
//# sourceMappingURL=CategoriesService.js.map