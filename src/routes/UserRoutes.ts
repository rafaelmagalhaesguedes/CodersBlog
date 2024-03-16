import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import UserMiddleware from '../middlewares/UserMiddleware';

class LoginRoutes {
  //
  public router: Router;
  
  private userController: UserController;

  constructor() {
    //
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //
    this.router.post(
      '/',
      UserMiddleware,
      (req: Request, res: Response) => this.userController.createUser(req, res),
    );
  }
}

export default new LoginRoutes().router;