import { Request, Router, Response } from 'express';
import CategoriesController from '../controllers/CategoriesController';
import Authenticate from '../middlewares/AuthMiddleware';

class LoginRoutes {
  //
  public router: Router;
  
  private categoriesController: CategoriesController;

  constructor() {
    //
    this.router = Router();
    this.categoriesController = new CategoriesController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //
    this.router.get(
      '/',
      Authenticate,
      (req: Request, res: Response) => this.categoriesController.findAllCategories(req, res),
    );
  }
}

export default new LoginRoutes().router;