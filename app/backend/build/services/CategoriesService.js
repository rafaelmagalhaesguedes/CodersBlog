"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const CategoriesModel_1 = require("../models/CategoriesModel");
class CategoriesService {
    //
    constructor(categoriesModel = new CategoriesModel_1.default()) {
        this.categoriesModel = categoriesModel;
    }
    async findAllCategories() {
        //
        const categories = await this.categoriesModel.findAll();
        if (categories === null) {
            return { status: 'NOT_FOUND', data: { message: 'Categories not found!' } };
        }
        return { status: 'SUCCESSFUL', data: categories };
    }
    async createCategory(category) {
        //
        const categoryExists = await this.categoriesModel.findByName(category.name);
        if (categoryExists) {
            return { status: 'CONFLICT', data: { message: 'Category already exists!' } };
        }
        const newCategory = await this.categoriesModel.create(category);
        if (newCategory === null) {
            return { status: 'INTERNAL_ERROR', data: { message: 'Category not created!' } };
        }
        return { status: 'CREATED', data: newCategory };
    }
}
exports.default = CategoriesService;
//# sourceMappingURL=CategoriesService.js.map