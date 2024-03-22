"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const Joi = require("joi");
class PostUpdateValidator {
    static validateUpdatePost(req, res, next) {
        //
        const { error } = PostUpdateValidator.getSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    }
    ;
}
//
PostUpdateValidator.getSchema = Joi.object({
    //
    title: Joi.string().max(100).required().messages({
        'string.base': '"title" must be a string',
        'string.empty': '"title" is required',
        'any.required': '"title" is required',
        'string.max': '"title" length must be less than or equal to 100 characters long',
    }),
    content: Joi.string().max(5000).required().messages({
        'string.base': '"content" must be a string',
        'string.empty': '"content" is required',
        'any.required': '"content" is required',
        'string.max': '"content" length must be less than or equal to 2500 characters long',
    }),
    image: Joi.string().uri().required().messages({
        'string.base': '"image" must be a string',
        'string.uri': '"image" must be a valid uri',
    }),
});
exports.default = PostUpdateValidator.validateUpdatePost;
//# sourceMappingURL=PostUpdateMiddleware.js.map