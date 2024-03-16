//
import { Request, Response } from 'express';
import CategoriesService from '../services/CategoriesService';
import statusCode from '../utils/StatusCode';

class CategoriesController {
  //
  constructor(private categorieService = new CategoriesService()) { }

  public async findAllCategories(_req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.categorieService.findAllCategories();
    return res.status(statusCode(status)).json(data);
  }
}

export default CategoriesController;