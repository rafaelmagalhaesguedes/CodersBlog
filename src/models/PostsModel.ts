//
import SequelizePosts from '../database/models/SequelizePosts';
import { IPostsModel } from '../interfaces/Posts/IPostsModel';
import { IPosts, IPostsCreate } from '../interfaces/Posts/IPosts';
import PostsCategoriesModel from './PostsCategoriesModel';

class PostsModel implements IPostsModel {
  //
  constructor(
    private postsModel = SequelizePosts,
    private postsCategoriesModel = new PostsCategoriesModel(),
  ) { }

  public async create(post: IPostsCreate, userId: number): Promise<IPosts | null> {
    //
    const newPost = await this.postsModel.create({
      ...post, userId, published: new Date(), updated: new Date(),
    });
    if (!newPost) return null;

    const newPostCategories = await this.postsCategoriesModel.create(
      newPost.id, post.categoryIds,
    );
    if (!newPostCategories) return null;

    return newPost;
  }
}

export default PostsModel;