"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../services/UserService");
const StatusCode_1 = require("../utils/StatusCode");
class LoginController {
    //
    constructor(userService = new UserService_1.default()) {
        this.userService = userService;
    }
    async createUser(req, res) {
        //
        const { status, data } = await this.userService.createUser(req.body);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async findAllUsers(_req, res) {
        //
        const { status, data } = await this.userService.findAllUsers();
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async getUserById(req, res) {
        //
        const { status, data } = await this.userService.getUserById(+req.params.id);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async deleteUser(_req, res) {
        //
        const { id, email } = res.locals.user;
        const { status, data } = await this.userService.deleteUser(id, email);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
}
exports.default = LoginController;
//# sourceMappingURL=UserController.js.map