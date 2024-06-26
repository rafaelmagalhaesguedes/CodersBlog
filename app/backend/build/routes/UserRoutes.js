"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserMiddleware_1 = require("../middlewares/UserMiddleware");
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
class LoginRoutes {
    constructor() {
        //
        this.router = (0, express_1.Router)();
        this.userController = new UserController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        //
        this.router.post('/', UserMiddleware_1.default, (req, res) => this.userController.createUser(req, res));
        //
        this.router.get('/', (req, res) => this.userController.findAllUsers(req, res));
        //
        this.router.get('/:id', AuthMiddleware_1.default, (req, res) => this.userController.getUserById(req, res));
        //
        this.router.put('/:id', (req, res) => this.userController.updateUser(req, res));
        //
        this.router.delete('/me', AuthMiddleware_1.default, (req, res) => this.userController.deleteUser(req, res));
    }
}
exports.default = new LoginRoutes().router;
//# sourceMappingURL=UserRoutes.js.map