import { Request, Router, Response } from 'express';
import PostsController from '../controllers/PostsController';
import Authenticate from '../middlewares/AuthMiddleware';

class PostsRoutes {
  //
  public router: Router;
  
  private postsController: PostsController;

  constructor() {
    //
    this.router = Router();
    this.postsController = new PostsController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //
    this.router.post(
      '/',
      Authenticate,
      (req: Request, res: Response) => this.postsController.createPost(req, res),
    );
  }
}

export default new PostsRoutes().router;