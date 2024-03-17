//
import { Request, Response } from 'express';
import PostsService from '../services/PostsService';
import statusCode from '../utils/StatusCode';

export default class PostsController {
  //
  constructor(private postsService = new PostsService()) { }

  public async createPost(req: Request, res: Response): Promise<Response> {
    //
    const userId = res.locals.user.id;
    const { status, data } = await this.postsService.createPost(req.body, userId);
    return res.status(statusCode(status)).json(data);
  }

  public async getPosts(req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.postsService.getPosts();
    return res.status(statusCode(status)).json(data);
  }
}
