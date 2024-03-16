//
import * as bcript from 'bcrypt';
import UserModel from '../models/UserModel';
import { IUserModel } from '../interfaces/User/IUserModel';
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';
import IUser from '../interfaces/User/IUser';

export default class LoginService {
  //
  constructor(private userModel: IUserModel = new UserModel()) { }

  public async createUser(data: IUser): Promise<ServiceResponse<ServiceMessage>> {
    //
    const user = await this.userModel.getByEmail(data.email);
    if (user) {
      return { status: 'CONFLICT', data: { message: 'User already exists!' } };
    }

    const salt = bcript.genSaltSync(10);
    data.password = bcript.hashSync(data.password, salt);

    const newUser = await this.userModel.create(data);
    if (!newUser) {
      return { status: 'INTERNAL_ERROR', data: { message: 'User not created!' } };
    }

    return { status: 'CREATED', data: { message: 'User created!' } };
  }

  public async findAllUsers(): Promise<ServiceResponse<IUser[]>> {
    //
    const users = await this.userModel.findAll();
    if (!users) {
      return { status: 'NOT_FOUND', data: { message: 'Users not found!' } };
    }

    return { status: 'SUCCESSFUL', data: users };
  }

  public async getUserById(id: number): Promise<ServiceResponse<IUser>> {
    //
    const user = await this.userModel.getById(id);
    if (!user) {
      return { status: 'NOT_FOUND', data: { message: 'User not found!' } };
    }

    return { status: 'SUCCESSFUL', data: user };
  }

  public async updateUser(id: number, data: IUser): Promise<ServiceResponse<ServiceMessage>> {
    //
    const user = await this.userModel.getById(id);
    if (!user) {
      return { status: 'NOT_FOUND', data: { message: 'User not found!' } };
    }

    const updated = await this.userModel.update(id, data);
    if (!updated) {
      return { status: 'INTERNAL_ERROR', data: { message: 'User not updated!' } };
    }

    return { status: 'SUCCESSFUL', data: { message: 'User updated!' } };
  }

  public async deleteUser(id: number): Promise<ServiceResponse<ServiceMessage>> {
    //
    const user = await this.userModel.getById(id);
    if(!user) {
      return { status: 'NOT_FOUND', data: { message: 'User not found!' } };
    }

    const deleted = await this.userModel.delete(id);
    if (!deleted) {
      return { status: 'INTERNAL_ERROR', data: { message: 'User not deleted!' } };
    }

    return { status: 'SUCCESSFUL', data: { message: 'User deleted!' } };
  }
}
