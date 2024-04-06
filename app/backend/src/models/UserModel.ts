//
import PostsModel from './PostsModel';
import IUser from '../interfaces/User/IUser';
import { IUserModel } from '../interfaces/User/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';
import SequelizePostsCategories from '../database/models/SequelizePostsCategories';

class UserModel implements IUserModel {
  //
  constructor(
    private userModel = SequelizeUser,
    private categoryModel = SequelizePostsCategories,
    private postModel = new PostsModel(),
  ) { }

  public async findAll(): Promise<IUser[] | null> {
    //
    const users = await this.userModel.findAll({ attributes: { exclude: ['password'] } });

    if (!users) {
      return null;
    }

    return users;
  }


  public async create(user: IUser): Promise<IUser | null> {
    //
    const newUser = await this.userModel.create(user);

    if (!newUser) {
      return null;
    }

    return newUser;
  }


  public async getById(id: number): Promise<IUser | null> {
    //
    const user = await this.userModel.findByPk(id, { attributes: { exclude: ['password'] } });

    if (!user) {
      return null;
    }

    return user;
  }


  public async getByEmail(email: string): Promise<IUser | null> {
    //
    const user = await this.userModel.findOne({ where: { email } });
    
    if (!user) {
      return null;
    }

    return user;
  }


  public async update(id: number, user: IUser): Promise<IUser | null> {
    //
    const userUpdate = await this.userModel.update({ ...user }, { where: { id } });

    if (!userUpdate) return null;

    const updatedUser = await this.getById(id);

    if (!updatedUser) return null;

    return updatedUser;
  }


  public async delete(id: number, email: string): Promise<boolean> {
    //
    const postsExists = await this.postModel.findPosts(id);

    if (!postsExists) return false;

    try {
      //
      await Promise.all(postsExists.map((post) =>
        this.categoryModel.destroy({ where: { postId: post.id } })));
      
      await this.postModel.deleteUserPosts(id);
      
      await this.userModel.destroy({ where: { email } });

      return true;
      
    } catch (error) {
      //
      return false;
    }
  }

}

export default UserModel;