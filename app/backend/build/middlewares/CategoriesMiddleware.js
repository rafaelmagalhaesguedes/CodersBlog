"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
class CategoriesMiddleware {
    static validateCategory(req, res, next) {
        //
        const { error } = CategoriesMiddleware.CategoriesSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        next();
    }
}
//
CategoriesMiddleware.CategoriesSchema = Joi.object({
    //
    name: Joi.string().min(2).max(15).messages({
        'string.empty': 'Category name is required!',
        'any.required': 'Category name is required!',
        'string.min': 'Name must have at least 2 characters',
        'string.max': 'Name must have a maximum of 15 characters',
    }),
});
exports.default = CategoriesMiddleware.validateCategory;
//# sourceMappingURL=CategoriesMiddleware.js.map