"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostsModel_1 = require("../models/PostsModel");
const CategoriesModel_1 = require("../models/CategoriesModel");
class PostsService {
    //
    constructor(categoriesModel = new CategoriesModel_1.default(), postsModel = new PostsModel_1.default()) {
        this.categoriesModel = categoriesModel;
        this.postsModel = postsModel;
    }
    async createPost(data, userId) {
        //
        const category = await this.categoriesModel.findCategory(data.categoryIds);
        if (!category) {
            return { status: 'NOT_FOUND', data: { message: 'Category not found!' } };
        }
        const post = await this.postsModel.create(data, userId);
        if (!post) {
            return { status: 'INTERNAL_ERROR', data: { message: 'Post not created!' } };
        }
        return { status: 'CREATED', data: post };
    }
    async getPosts() {
        //
        const posts = await this.postsModel.findAll();
        if (!posts) {
            return { status: 'NOT_FOUND', data: { message: 'Posts not found!' } };
        }
        return { status: 'SUCCESSFUL', data: posts };
    }
    async getPostById(id) {
        //
        const post = await this.postsModel.findById(id);
        if (!post) {
            return { status: 'NOT_FOUND', data: { message: 'Post not found!' } };
        }
        return { status: 'SUCCESSFUL', data: post };
    }
    async getPostsByUser(userId) {
        //
        const posts = await this.postsModel.findPostsByUser(userId);
        if (!posts) {
            return { status: 'NOT_FOUND', data: { message: 'Posts not found!' } };
        }
        return { status: 'SUCCESSFUL', data: posts };
    }
    async updatePost(id, data, userId) {
        //
        const post = await this.postsModel.findById(id);
        if ((post === null || post === void 0 ? void 0 : post.userId) !== userId) {
            return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
        }
        if (!post) {
            return { status: 'NOT_FOUND', data: { message: 'Post not found!' } };
        }
        const updatedPost = await this.postsModel.update(id, data, userId);
        if (!updatedPost) {
            return { status: 'INTERNAL_ERROR', data: { message: 'Post not updated!' } };
        }
        return { status: 'SUCCESSFUL', data: updatedPost };
    }
    async deletePost(id, userId) {
        //
        const post = await this.postsModel.findById(id);
        if ((post === null || post === void 0 ? void 0 : post.userId) !== userId) {
            return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
        }
        if (!post) {
            return { status: 'NOT_FOUND', data: { message: 'Post not found!' } };
        }
        const deleted = await this.postsModel.delete(id);
        return { status: 'SUCCESSFUL', data: deleted };
    }
    async searchPosts(search) {
        //
        const posts = await this.postsModel.search(search);
        if (!posts) {
            return { status: 'NOT_FOUND', data: { message: 'Posts not found!' } };
        }
        return { status: 'SUCCESSFUL', data: posts };
    }
}
exports.default = PostsService;
//# sourceMappingURL=PostsService.js.map