"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const Joi = require("joi");
class PostValidator {
    static validatePost(req, res, next) {
        //
        const { error } = PostValidator.getSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    }
    ;
}
//
PostValidator.getSchema = Joi.object({
    //
    title: Joi.string().max(150).required().messages({
        'string.base': '"title" must be a string',
        'string.empty': '"title" is required',
        'any.required': '"title" is required',
        'string.max': '"title" length must be less than or equal to 150 characters long',
    }),
    content: Joi.string().max(5000).required().messages({
        'string.base': '"content" must be a string',
        'string.empty': '"content" is required',
        'any.required': '"content" is required',
        'string.max': '"content" length must be less than or equal to 2500 characters long',
    }),
    image: Joi.string().uri().messages({
        'string.base': '"image" must be a string',
        'string.uri': '"image" must be a valid uri',
    }),
    categoryIds: Joi.array().items(Joi.number()).messages({
        'array.base': '"categoryIds" must be an array',
    }),
});
exports.default = PostValidator.validatePost;
//# sourceMappingURL=PostsMiddleware.js.map