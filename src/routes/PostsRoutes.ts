import { Request, Router, Response } from 'express';
import Authenticate from '../middlewares/AuthMiddleware';
import PostsController from '../controllers/PostsController';
import PostValidator from '../middlewares/PostsMiddleware';

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
      Authenticate, PostValidator,
      (req: Request, res: Response) => this.postsController.createPost(req, res),
    );
  }
}

export default new PostsRoutes().router;