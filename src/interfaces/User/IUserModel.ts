//
import IUser from './IUser';

export interface IUserModel {
  findAll(): Promise<IUser[] | null>;
  create(user: IUser): Promise<IUser | null>;
  update(id: IUser['id'], user: IUser): Promise<boolean>;
  delete(id: IUser['id']): Promise<boolean>;
  getById(id: IUser['id']): Promise<IUser | null>;
  getByEmail(email: IUser['email']): Promise<IUser | null>;
}