//
import { IUserModel } from '../interfaces/User/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';
import IUser from '../interfaces/User/IUser';

class UserModel implements IUserModel {
  //
  constructor(private userModel = SequelizeUser) { }

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
}

export default UserModel;