"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
// Constants
const SUCCESSFUL = 'SUCCESSFUL';
const CREATED = 'CREATED';
const NOT_FOUND = 'NOT_FOUND';
const INTERNAL_ERROR = 'INTERNAL_ERROR';
const CONFLICT = 'CONFLICT';
const INVALID_DATA = 'INVALID_DATA';
const USER_ALREADY_EXISTS = 'User already exists!';
const USER_CREATED = 'User created!';
const USER_UPDATED = 'User updated!';
const USER_DELETED = 'User deleted!';
const USER_NOT_CREATED = 'User not created!';
const USERS_NOT_FOUND = 'Users not found!';
const USER_NOT_FOUND = 'User not found!';
const USER_NOT_UPDATED = 'User not updated!';
const USER_NOT_DELETED = 'User not deleted!';
const INVALID_ID_OR_EMAIL = 'Invalid id or email';
class UserService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async createUser(data) {
        const user = await this.userModel.getByEmail(data.email);
        if (user) {
            return { status: CONFLICT, data: { message: USER_ALREADY_EXISTS } };
        }
        const newUser = await this.userModel.create(data);
        if (!newUser) {
            return { status: INTERNAL_ERROR, data: { message: USER_NOT_CREATED } };
        }
        return { status: CREATED, data: { message: USER_CREATED } };
    }
    async findAllUsers() {
        const users = await this.userModel.findAll();
        if (!users) {
            return { status: NOT_FOUND, data: { message: USERS_NOT_FOUND } };
        }
        return { status: SUCCESSFUL, data: users };
    }
    async getUserById(id) {
        const user = await this.userModel.getById(id);
        if (!user) {
            return { status: NOT_FOUND, data: { message: USER_NOT_FOUND } };
        }
        return { status: SUCCESSFUL, data: user };
    }
    async updateUser(id, data) {
        const user = await this.userModel.getById(id);
        if (!user) {
            return { status: NOT_FOUND, data: { message: USER_NOT_FOUND } };
        }
        const updateUser = await this.userModel.update(id, data);
        if (!updateUser) {
            return { status: INTERNAL_ERROR, data: { message: USER_NOT_UPDATED } };
        }
        return { status: SUCCESSFUL, data: { message: USER_UPDATED } };
    }
    async deleteUser(id, email) {
        if (!id || !email) {
            return { status: INVALID_DATA, data: { message: INVALID_ID_OR_EMAIL } };
        }
        const deleteUser = await this.userModel.delete(id, email);
        if (!deleteUser) {
            return { status: INTERNAL_ERROR, data: { message: USER_NOT_DELETED } };
        }
        return { status: SUCCESSFUL, data: { message: USER_DELETED } };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map