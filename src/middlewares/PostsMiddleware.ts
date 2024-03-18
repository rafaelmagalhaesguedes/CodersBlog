//
import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

class PostValidator {
  //
  private static getSchema = Joi.object({
    //
    title: Joi.string().max(150).required().messages({
      'string.base': '"title" must be a string',
      'string.empty': '"title" is required',
      'any.required': '"title" is required',
      'string.max': '"title" length must be less than or equal to 150 characters long',
    }),
    content: Joi.string().max(2500).required().messages({
      'string.base': '"content" must be a string',
      'string.empty': '"content" is required',
      'any.required': '"content" is required',
      'string.max': '"content" length must be less than or equal to 2500 characters long',
    }),
    image: Joi.string().uri().required().messages({
      'string.base': '"image" must be a string',
      'string.empty': '"image" is required',
      'any.required': '"image" is required',
      'string.uri': '"image" must be a valid uri',
    }),
    categoryIds: Joi.array().items(Joi.number()).required().messages({
      'array.base': '"categoryIds" must be an array',
      'array.empty': '"categoryIds" is required',
      'any.required': '"categoryIds" is required',
    }),
  });

  public static validatePost(req: Request, res: Response, next: NextFunction) {
    //
    const { error } = PostValidator.getSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    next();
  };
}

export default PostValidator.validatePost;