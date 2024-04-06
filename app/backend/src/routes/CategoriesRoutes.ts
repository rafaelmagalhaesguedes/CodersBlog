import { Request, Router, Response } from 'express';
import CategoriesController from '../controllers/CategoriesController';
import Authenticate from '../middlewares/AuthMiddleware';
import CategoriesMiddleware from '../middlewares/CategoriesMiddleware';

class LoginRoutes {
  //
  public router: Router;
  
  private categoriesController: CategoriesController;

  constructor() {
    this.router = Router();
    this.categoriesController = new CategoriesController();
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      '/',
      Authenticate,
      (req: Request, res: Response) => this.categoriesController.findAllCategories(req, res),
    );

    this.router.post(
      '/',
      Authenticate, CategoriesMiddleware,
      (req: Request, res: Response) => this.categoriesController.createCategory(req, res),
    );

    this.router.put(
      '/:id',
      (req: Request, res: Response) => this.categoriesController.updateCategory(req, res),
    );

    this.router.delete(
      '/:id',
      (req: Request, res: Response) => this.categoriesController.deleteCategory(req, res),
    );
  }
}

export default new LoginRoutes().router;