"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
class LoginMiddleware {
    static validateLoginFields(body) {
        //
        const { error } = LoginMiddleware.loginSchema.validate(body);
        if (error)
            return error.details[0].message;
    }
    static validateLogin(req, res, next) {
        //
        const message = LoginMiddleware.validateLoginFields(req.body);
        if (message) {
            if (message === LoginMiddleware.messageInvalidField) {
                return res.status(401).json({ message });
            }
            return res.status(400).json({ message });
        }
        next();
    }
}
//
LoginMiddleware.messageEmptyField = 'All fields must be filled';
LoginMiddleware.messageInvalidField = 'Invalid email or password';
LoginMiddleware.loginSchema = Joi.object({
    //
    email: Joi.string().email().required().messages({
        'string.email': LoginMiddleware.messageInvalidField,
        'string.empty': LoginMiddleware.messageEmptyField,
        'any.required': LoginMiddleware.messageEmptyField,
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': LoginMiddleware.messageInvalidField,
        'string.empty': LoginMiddleware.messageEmptyField,
        'any.required': LoginMiddleware.messageEmptyField,
    }),
});
exports.default = LoginMiddleware.validateLogin;
//# sourceMappingURL=LoginMiddleware.js.map