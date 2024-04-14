import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  //
  private static userSchema: Joi.Schema = Joi.object({
    username: Joi.string().min(2).required().messages({
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

  public static validateUser(req: Request, res: Response, next: NextFunction): void | Response {
    //
    const { error }: Joi.ValidationResult = UserValidator.userSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ status: 'INVALID_VALUE', message: error.details[0].message });
    }

    next();
  }
}

export default UserValidator.validateUser;