//
import IUser from './IUser';

export interface IUserModel {
  getByEmail(email: IUser['email']): Promise<IUser | null>;
  create(user: IUser): Promise<IUser | null>;
}