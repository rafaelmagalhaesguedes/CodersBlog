"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const bcript = require("bcrypt");
const UserModel_1 = require("../models/UserModel");
class UserService {
    //
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async createUser(data) {
        //
        const user = await this.userModel.getByEmail(data.email);
        if (user) {
            return { status: 'CONFLICT', data: { message: 'User already exists!' } };
        }
        const salt = bcript.genSaltSync(10);
        data.password = bcript.hashSync(data.password, salt);
        const newUser = await this.userModel.create(data);
        if (!newUser) {
            return { status: 'INTERNAL_ERROR', data: { message: 'User not created!' } };
        }
        return { status: 'CREATED', data: { message: 'User created!' } };
    }
    async findAllUsers() {
        //
        const users = await this.userModel.findAll();
        if (!users) {
            return { status: 'NOT_FOUND', data: { message: 'Users not found!' } };
        }
        return { status: 'SUCCESSFUL', data: users };
    }
    async getUserById(id) {
        //
        const user = await this.userModel.getById(id);
        if (!user) {
            return { status: 'NOT_FOUND', data: { message: 'User not found!' } };
        }
        return { status: 'SUCCESSFUL', data: user };
    }
    async deleteUser(id, email) {
        //
        if (!id || !email) {
            return { status: 'INVALID_DATA', data: { message: 'Invalid id or email' } };
        }
        const deleteUser = await this.userModel.delete(id, email);
        if (!deleteUser) {
            return { status: 'INTERNAL_ERROR', data: { message: 'User not deleted!' } };
        }
        return { status: 'SUCCESSFUL', data: { message: 'User deleted!' } };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map