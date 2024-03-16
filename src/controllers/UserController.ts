//
import { Request, Response } from 'express';
import UserService from '../services/UserService';
import statusCode from '../utils/StatusCode';

export default class LoginController {
  //
  constructor(private userService = new UserService()) { }

  public async createUser(req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.userService.createUser(req.body);
    return res.status(statusCode(status)).json(data);
  }

  public async findAllUsers(req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.userService.findAllUsers();
    return res.status(statusCode(status)).json(data);
  }
}
