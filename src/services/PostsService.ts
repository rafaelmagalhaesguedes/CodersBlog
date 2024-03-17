//
import { IPosts, IPostsCreate } from '../interfaces/Posts/IPosts';
import PostsModel from '../models/PostsModel';
import CategoriesModel from '../models/CategoriesModel';
import { ServiceResponse } from '../utils/ServiceResponse';

export default class LoginService {
  //
  constructor(
    private categoriesModel = new CategoriesModel(),
    private postsModel = new PostsModel(),
  ) { }
  
  public async createPost(data: IPostsCreate, userId: number): Promise<ServiceResponse<IPosts>> {
    //
    const category = await this.categoriesModel.findCategory(data.categoryIds);
    if (!category) {
      return { status: 'NOT_FOUND', data: { message: 'Category not found!' } };
    }
    
    const post = await this.postsModel.create(data, userId);
    if (!post) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Post not created!' } };
    }

    return { status: 'CREATED', data: post };
  }
}
