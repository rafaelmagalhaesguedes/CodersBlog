"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const PostsModel_1 = require("./PostsModel");
const SequelizeUser_1 = require("../database/models/SequelizeUser");
const SequelizePostsCategories_1 = require("../database/models/SequelizePostsCategories");
class UserModel {
    //
    constructor(userModel = SequelizeUser_1.default, categoryModel = SequelizePostsCategories_1.default, postModel = new PostsModel_1.default()) {
        this.userModel = userModel;
        this.categoryModel = categoryModel;
        this.postModel = postModel;
    }
    async findAll() {
        //
        const users = await this.userModel.findAll({ attributes: { exclude: ['password'] } });
        if (!users) {
            return null;
        }
        return users;
    }
    async create(user) {
        //
        const newUser = await this.userModel.create(user);
        if (!newUser) {
            return null;
        }
        return newUser;
    }
    async getById(id) {
        //
        const user = await this.userModel.findByPk(id, { attributes: { exclude: ['password'] } });
        if (!user) {
            return null;
        }
        return user;
    }
    async getByEmail(email) {
        //
        const user = await this.userModel.findOne({ where: { email } });
        if (!user) {
            return null;
        }
        return user;
    }
    async update(id, user) {
        //
        const userUpdate = await this.userModel.update({ ...user }, { where: { id } });
        if (!userUpdate)
            return null;
        const updatedUser = await this.getById(id);
        if (!updatedUser)
            return null;
        return updatedUser;
    }
    async delete(id, email) {
        //
        const postsExists = await this.postModel.findPosts(id);
        if (!postsExists)
            return false;
        try {
            //
            await Promise.all(postsExists.map((post) => this.categoryModel.destroy({ where: { postId: post.id } })));
            await this.postModel.deleteUserPosts(id);
            await this.userModel.destroy({ where: { email } });
            return true;
        }
        catch (error) {
            //
            return false;
        }
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map