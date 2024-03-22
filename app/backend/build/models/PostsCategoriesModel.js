"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const SequelizePostsCategories_1 = require("../database/models/SequelizePostsCategories");
class PostsCategoriesModel {
    //
    constructor(model = SequelizePostsCategories_1.default) {
        this.model = model;
    }
    async create(postId, categoryId) {
        //
        const postsCategories = categoryId.map((id) => {
            return { postId, categoryId: id };
        });
        const created = await this.model.bulkCreate(postsCategories);
        return !!created;
    }
    async delete(id) {
        //
        const deleted = await this.model.destroy({ where: { postId: id } });
        return !!deleted;
    }
}
exports.default = PostsCategoriesModel;
//# sourceMappingURL=PostsCategoriesModel.js.map