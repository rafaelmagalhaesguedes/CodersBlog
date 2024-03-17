//
import SequelizeCategories from '../../database/models/SequelizeCategories';
import { Identifiable } from '..';
import SequelizeUser from '../../database/models/SequelizeUser';

export interface IPosts extends Identifiable {
  title: string;
  content: string;
  image: string;
  userId: number;
  published: Date;
  updated: Date;
  categories?: SequelizeCategories[];
  users?: SequelizeUser;
}

export interface IPostsCreate extends Omit<IPosts, 'id'>{
  title: string;
  content: string;
  image: string;
  categoryIds: number[];
}