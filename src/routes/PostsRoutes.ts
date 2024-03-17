import { Request, Router, Response } from 'express';
import Authenticate from '../middlewares/AuthMiddleware';
import PostsController from '../controllers/PostsController';
import PostValidator from '../middlewares/PostsMiddleware';
import PostUpdateValidator from '../middlewares/PostUpdateMiddleware';

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

    this.router.get(
      '/',
      Authenticate,
      (req: Request, res: Response) => this.postsController.getPosts(req, res),
    );

    this.router.get(
      '/:id',
      Authenticate,
      (req: Request, res: Response) => this.postsController.getPostById(req, res),
    );

    this.router.put(
      '/:id',
      Authenticate, PostUpdateValidator,
      (req: Request, res: Response) => this.postsController.updatePost(req, res),
    );

    this.router.delete(
      '/:id',
      Authenticate,
      (req: Request, res: Response) => this.postsController.deletePost(req, res),
    );
  }
}

export default new PostsRoutes().router;