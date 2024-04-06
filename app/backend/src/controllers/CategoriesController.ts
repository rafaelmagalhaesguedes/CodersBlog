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

  public async createCategory(req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.categorieService.createCategory(req.body);
    return res.status(statusCode(status)).json(data);
  }

  public async updateCategory(req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.categorieService.updateCategory(+req.params.id, req.body);
    return res.status(statusCode(status)).json(data);
  }

  public async deleteCategory(req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.categorieService.deleteCategory(+req.params.id);
    return res.status(statusCode(status)).json(data);
  }
}

export default CategoriesController;