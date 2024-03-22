"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const bcript = require("bcrypt");
const UserModel_1 = require("../models/UserModel");
const JwtService_1 = require("../utils/JwtService");
class LoginService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
        //
        this.errorMessage = 'Invalid email or password';
    }
    async signUp(data) {
        //
        const user = await this.userModel.getByEmail(data.email);
        if (!user || !bcript.compareSync(data.password, user.password)) {
            return { status: 'UNAUTHORIZED', data: { message: this.errorMessage } };
        }
        const token = JwtService_1.default.createToken({ id: user.id, email: user.email });
        if (!token) {
            return { status: 'INTERNAL_ERROR', data: { message: 'Internal error!' } };
        }
        return { status: 'SUCCESSFUL', data: { token } };
    }
    async getRole(email) {
        //
        const user = await this.userModel.getByEmail(email);
        if (!user)
            return { status: 'UNAUTHORIZED', data: { message: this.errorMessage } };
        return { status: 'SUCCESSFUL', data: { role: user.role } };
    }
}
exports.default = LoginService;
//# sourceMappingURL=LoginService.js.map