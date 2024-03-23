//
import { IPosts, IPostsCreate } from '../interfaces/Posts/IPosts';
import PostsModel from '../models/PostsModel';
import CategoriesModel from '../models/CategoriesModel';
import { ServiceResponse } from '../utils/ServiceResponse';

export default class PostsService {
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

  public async getPosts(): Promise<ServiceResponse<IPosts[]>> {
    //
    const posts = await this.postsModel.findAll();

    if (!posts) {
      return { status: 'NOT_FOUND', data: { message: 'Posts not found!' } };
    }

    return { status: 'SUCCESSFUL', data: posts };
  }

  public async getPostById(id: number): Promise<ServiceResponse<IPosts>> {
    //
    const post = await this.postsModel.findById(id);

    if (!post) {
      return { status: 'NOT_FOUND', data: { message: 'Post not found!' } };
    }

    return { status: 'SUCCESSFUL', data: post };
  }

  public async getPostsByUser(userId: number): Promise<ServiceResponse<IPosts[]>> {
    //
    const posts = await this.postsModel.findPostsByUser(userId);

    if (!posts) {
      return { status: 'NOT_FOUND', data: { message: 'Posts not found!' } };
    }

    return { status: 'SUCCESSFUL', data: posts };
  }

  public async updatePost(id: number, data: IPostsCreate, userId: number): Promise<ServiceResponse<IPosts>> {
    //
    const post = await this.postsModel.findById(id);
    
    if (post?.userId !== userId) {
      return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
    }

    if (!post) {
      return { status: 'NOT_FOUND', data: { message: 'Post not found!' } };
    }

    const updatedPost = await this.postsModel.update(id, data, userId);

    if (!updatedPost) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Post not updated!' } };
    }

    return { status: 'SUCCESSFUL', data: updatedPost };
  }

  public async deletePost(id: number, userId: number): Promise<ServiceResponse<boolean>> {
    //
    const post = await this.postsModel.findById(id);

    if (post?.userId !== userId) {
      return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
    }

    if (!post) {
      return { status: 'NOT_FOUND', data: { message: 'Post not found!' } };
    }

    const deleted = await this.postsModel.delete(id);

    return { status: 'SUCCESSFUL', data: deleted };
  }

  public async searchPosts(search: string): Promise<ServiceResponse<IPosts[]>> {
    //
    if (search === '') return this.getPosts();

    const posts = await this.postsModel.search(search);

    if (!posts) {
      return { status: 'NOT_FOUND', data: { message: 'Posts not found!' } };
    }

    return { status: 'SUCCESSFUL', data: posts };
  }
}
