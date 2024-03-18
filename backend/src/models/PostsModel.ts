//
import PostsCategoriesModel from './PostsCategoriesModel';
import SequelizeUser from '../database/models/SequelizeUser';
import { IPostsModel } from '../interfaces/Posts/IPostsModel';
import SequelizePosts from '../database/models/SequelizePosts';
import { IPosts, IPostsCreate, IPostsUpdate } from '../interfaces/Posts/IPosts';
import SequelizeCategories from '../database/models/SequelizeCategories';
import { Op } from 'sequelize';

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

  public async findAll(): Promise<IPosts[] | null> {
    //
    const posts = await this.postsModel.findAll({
      include: [
        { 
          model: SequelizeUser, as: 'user', attributes: { exclude: ['password', 'role'] },
        },
        {
          model: SequelizeCategories, as: 'categories', through: { attributes: [] },
        },
      ],
    });

    if (!posts) return null;

    return posts;
  }

  public async findById(id: number): Promise<IPosts | null> {
    //
    const post = await this.postsModel.findByPk(id, {
      include: [
        { 
          model: SequelizeUser, as: 'user', attributes: { exclude: ['password', 'role'] },
        },
        {
          model: SequelizeCategories, as: 'categories', through: { attributes: [] },
        },
      ],
    });

    if (!post) return null;

    return post;
  }

  public async findPosts(userId: number): Promise<IPosts[] | null> {
    //
    const posts = await this.postsModel.findAll({ where: { userId } });

    if (!posts) return null;

    return posts;
  }

  public async update(id: number, data: IPostsUpdate, userId: number): Promise<IPosts | null> {
    //
    const post = await this.postsModel.update({ ...data, updated: new Date() }, { where: { id } });

    if (!post) return null;

    const updatedPost = await this.findById(userId);

    if (!updatedPost) return null;

    return updatedPost;
  }

  public async delete(id: number): Promise<boolean> {
    //
    const destroyCategory = await this.postsCategoriesModel.delete(id);
    
    if (!destroyCategory) return false;

    const destroyPost = await this.postsModel.destroy({ where: { id: id } });

    return !!destroyPost;
  }

  public async deleteUserPosts(userId: number): Promise<boolean> {
    //
    const destroyPost = await this.postsModel.destroy({ where: { userId: userId } });

    return !!destroyPost;
  }

  public async search(search: string): Promise<IPosts[] | null> {
    //
    const posts = await this.postsModel.findAll({
      where: {
        title: { [Op.like]: `%${search}%` },
        content: { [Op.like]: `%${search}%` },
      },
      include: [
        { 
          model: SequelizeUser, as: 'user', attributes: { exclude: ['password', 'role'] },
        },
        {
          model: SequelizeCategories, as: 'categories', through: { attributes: [] },
        },
      ],
    });

    if (!posts) return null;

    return posts;
  }
}

export default PostsModel;