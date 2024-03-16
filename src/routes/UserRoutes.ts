import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import UserMiddleware from '../middlewares/UserMiddleware';
import AuthMiddleware from '../middlewares/AuthMiddleware';

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

    //
    this.router.get(
      '/',
      AuthMiddleware,
      (req: Request, res: Response) => this.userController.findAllUsers(req, res),
    );

    //
    this.router.get(
      '/:id',
      AuthMiddleware,
      (req: Request, res: Response) => this.userController.getUserById(req, res),
    );
    
    //
    this.router.put(
      '/:id',
      AuthMiddleware,
      (req: Request, res: Response) => this.userController.updateUser(req, res),
    );

    //
    this.router.delete(
      '/:id',
      AuthMiddleware,
      (req: Request, res: Response) => this.userController.deleteUser(req, res),
    );
  }
}

export default new LoginRoutes().router;