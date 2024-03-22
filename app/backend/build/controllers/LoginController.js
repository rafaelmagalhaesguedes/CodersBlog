"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginService_1 = require("../services/LoginService");
const StatusCode_1 = require("../utils/StatusCode");
class LoginController {
    //
    constructor(loginService = new LoginService_1.default()) {
        this.loginService = loginService;
    }
    async signUp(req, res) {
        //
        const { status, data } = await this.loginService.signUp(req.body);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async getUserRole(_req, res) {
        //
        const { status, data } = await this.loginService.getRole(res.locals.user.email);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map