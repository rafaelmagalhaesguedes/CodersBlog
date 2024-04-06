"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriesService_1 = require("../services/CategoriesService");
const StatusCode_1 = require("../utils/StatusCode");
class CategoriesController {
    //
    constructor(categorieService = new CategoriesService_1.default()) {
        this.categorieService = categorieService;
    }
    async findAllCategories(_req, res) {
        //
        const { status, data } = await this.categorieService.findAllCategories();
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async createCategory(req, res) {
        //
        const { status, data } = await this.categorieService.createCategory(req.body);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async updateCategory(req, res) {
        //
        const { status, data } = await this.categorieService.updateCategory(+req.params.id, req.body);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async deleteCategory(req, res) {
        //
        const { status, data } = await this.categorieService.deleteCategory(+req.params.id);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
}
exports.default = CategoriesController;
//# sourceMappingURL=CategoriesController.js.map