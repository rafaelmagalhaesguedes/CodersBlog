"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const PostsCategoriesModel_1 = require("./PostsCategoriesModel");
const SequelizeUser_1 = require("../database/models/SequelizeUser");
const SequelizePosts_1 = require("../database/models/SequelizePosts");
const SequelizeCategories_1 = require("../database/models/SequelizeCategories");
const SequelizePostsCategories_1 = require("../database/models/SequelizePostsCategories");
const sequelize_1 = require("sequelize");
class PostsModel {
    //
    constructor(postsModel = SequelizePosts_1.default, modelCategories = SequelizePostsCategories_1.default, postsCategoriesModel = new PostsCategoriesModel_1.default()) {
        this.postsModel = postsModel;
        this.modelCategories = modelCategories;
        this.postsCategoriesModel = postsCategoriesModel;
    }
    async create(post, userId) {
        //
        const newPost = await this.postsModel.create({
            ...post, userId, published: new Date(), updated: new Date(),
        });
        if (!newPost)
            return null;
        const newPostCategories = await this.postsCategoriesModel.create(newPost.id, post.categoryIds);
        if (!newPostCategories)
            return null;
        return newPost;
    }
    async findAll() {
        //
        const posts = await this.postsModel.findAll({
            include: [
                {
                    model: SequelizeUser_1.default, as: 'user', attributes: { exclude: ['password', 'role'] },
                },
                {
                    model: SequelizeCategories_1.default, as: 'categories', through: { attributes: [] },
                },
            ],
        });
        if (!posts)
            return null;
        return posts;
    }
    async findById(id) {
        //
        const post = await this.postsModel.findByPk(id, {
            include: [
                {
                    model: SequelizeUser_1.default, as: 'user', attributes: { exclude: ['password', 'role'] },
                },
                {
                    model: SequelizeCategories_1.default, as: 'categories', through: { attributes: [] },
                },
            ],
        });
        if (!post)
            return null;
        return post;
    }
    async findPosts(userId) {
        //
        const posts = await this.postsModel.findAll({ where: { userId } });
        if (!posts)
            return null;
        return posts;
    }
    async findPostsByUser(userId) {
        //
        const posts = await this.postsModel.findAll({
            where: { userId },
            include: [
                {
                    model: SequelizeUser_1.default, as: 'user', attributes: { exclude: ['password', 'role'] },
                },
                {
                    model: SequelizeCategories_1.default, as: 'categories', through: { attributes: [] },
                },
            ],
        });
        if (!posts)
            return null;
        return posts;
    }
    async update(id, data, userId) {
        //
        const post = await this.postsModel.update({ ...data, updated: new Date() }, { where: { id } });
        if (!post)
            return null;
        const updatedPost = await this.findById(userId);
        if (!updatedPost)
            return null;
        return updatedPost;
    }
    async delete(id) {
        //
        await this.modelCategories.destroy({ where: { postId: id } });
        await this.postsModel.destroy({ where: { id: id } });
        return true;
    }
    async deleteUserPosts(userId) {
        //
        const destroyPost = await this.postsModel.destroy({ where: { userId: userId } });
        return !!destroyPost;
    }
    async search(search) {
        //
        const posts = await this.postsModel.findAll({
            where: {
                title: { [sequelize_1.Op.like]: `%${search}%` },
                content: { [sequelize_1.Op.like]: `%${search}%` },
            },
            include: [
                {
                    model: SequelizeUser_1.default, as: 'user', attributes: { exclude: ['password', 'role'] },
                },
                {
                    model: SequelizeCategories_1.default, as: 'categories', through: { attributes: [] },
                },
            ],
        });
        if (!posts)
            return null;
        return posts;
    }
}
exports.default = PostsModel;
//# sourceMappingURL=PostsModel.js.map