//
import IUser from './IUser';

export interface IUserModel {
  findAll(): Promise<IUser[] | null>;
  create(user: IUser): Promise<IUser | null>;
  getById(id: IUser['id']): Promise<IUser | null>;
  getByEmail(email: IUser['email']): Promise<IUser | null>;
  delete(id: IUser['id'], email: IUser['email']): Promise<boolean>;
}