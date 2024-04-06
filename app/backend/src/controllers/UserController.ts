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

  public async findAllUsers(_req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.userService.findAllUsers();
    return res.status(statusCode(status)).json(data);
  }

  public async getUserById(req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.userService.getUserById(+req.params.id);
    return res.status(statusCode(status)).json(data);
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {
    //
    const { status, data } = await this.userService.updateUser(+req.params.id, req.body);
    return res.status(statusCode(status)).json(data);
  }

  public async deleteUser(_req: Request, res: Response): Promise<Response> {
    //
    const { id, email } = res.locals.user;
    const { status, data } = await this.userService.deleteUser(id, email);
    return res.status(statusCode(status)).json(data);
  }
}
