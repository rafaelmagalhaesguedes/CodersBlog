//
import { IPosts, IPostsCreate } from './IPosts';

export interface IPostsModel {
  create: (post: IPostsCreate, userId: number) => Promise<IPosts | null>;
  findAll: () => Promise<IPosts[] | null>;
  findById: (id: number) => Promise<IPosts | null>;
  update: (id: number, post: IPostsCreate, userId: number) => Promise<IPosts | null>;
}