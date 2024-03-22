"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
class UserValidator {
    static validateUser(req, res, next) {
        //
        const { error } = UserValidator.userSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ status: 'INVALID_VALUE', message: error.details[0].message });
        }
        next();
    }
}
//
UserValidator.userSchema = Joi.object({
    username: Joi.string().min(8).required().messages({
        'string.min': '"username" length must be at least 8 characters long',
    }),
    role: Joi.string().valid('admin', 'user').required().messages({
        'string.base': '"role" must be a string',
        'any.only': '"role" must be "admin" or "user"',
    }),
    email: Joi.string().email().required().messages({
        'string.email': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
    }),
    image: Joi.string().required().messages({
        'string.base': '"image" must be a string',
    }),
});
exports.default = UserValidator.validateUser;
//# sourceMappingURL=UserMiddleware.js.map