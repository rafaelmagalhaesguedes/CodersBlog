//
import { IPosts, IPostsCreate, IPostsUpdate } from './IPosts';

export interface IPostsModel {
  create: (post: IPostsCreate, userId: number) => Promise<IPosts | null>;
  findAll: () => Promise<IPosts[] | null>;
  findById: (id: number) => Promise<IPosts | null>;
  update: (id: number, post: IPostsUpdate, userId: number) => Promise<IPosts | null>;
}