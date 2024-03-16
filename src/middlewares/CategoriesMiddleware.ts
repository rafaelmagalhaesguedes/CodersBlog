import * as Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

class CategoriesMiddleware {
  //
  private static CategoriesSchema = Joi.object({
    //
    name: Joi.string().min(2).max(15).messages({
      'string.empty': 'Category name is required!',
      'any.required': 'Category name is required!',
      'string.min': 'Name must have at least 2 characters',
      'string.max': 'Name must have a maximum of 15 characters',
    }),
  });

  public static validateCategory(req: Request, res: Response, next: NextFunction): Response | void {
    //
    const { error } = CategoriesMiddleware.CategoriesSchema.validate(req.body);
    
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    next();
  }
}

export default CategoriesMiddleware.validateCategory;
