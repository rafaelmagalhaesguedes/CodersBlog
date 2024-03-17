//
import { IPosts, IPostsCreate } from './IPosts';

export interface IPostsModel {
  create: (post: IPostsCreate, userId: number) => Promise<IPosts | null>;
}