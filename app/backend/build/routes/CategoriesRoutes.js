"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoriesController_1 = require("../controllers/CategoriesController");
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
const CategoriesMiddleware_1 = require("../middlewares/CategoriesMiddleware");
class LoginRoutes {
    constructor() {
        //
        this.router = (0, express_1.Router)();
        this.categoriesController = new CategoriesController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        //
        this.router.get('/', AuthMiddleware_1.default, (req, res) => this.categoriesController.findAllCategories(req, res));
        this.router.post('/', AuthMiddleware_1.default, CategoriesMiddleware_1.default, (req, res) => this.categoriesController.createCategory(req, res));
    }
}
exports.default = new LoginRoutes().router;
//# sourceMappingURL=CategoriesRoutes.js.map