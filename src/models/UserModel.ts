//
import { IUserModel } from '../interfaces/User/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';
import IUser from '../interfaces/User/IUser';

class UserModel implements IUserModel {
  //
  constructor(private userModel = SequelizeUser) { }

  public async getByEmail(email: string): Promise<IUser | null> {
    //
    const user = await this.userModel.findOne({ where: { email } });
    
    if (!user) {
      return null;
    }

    const { id, username, password, role, image } = user;

    return { id, username, email, password, role, image };
  }

  public async create(user: IUser): Promise<IUser | null> {
    //
    const newUser = await this.userModel.create(user);

    if (!newUser) {
      return null;
    }

    const { id, username, email, password, role, image } = newUser;

    return { id, username, email, password, role, image };
  }
}

export default UserModel;