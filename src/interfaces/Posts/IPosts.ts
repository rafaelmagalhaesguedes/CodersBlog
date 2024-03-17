//
import { Identifiable } from '..';

export interface IPosts extends Identifiable {
  title: string;
  content: string;
  image: string;
  userId: number;
  published: Date;
  updated: Date;
}

export interface IPostsCreate extends Omit<IPosts, 'id'>{
  title: string;
  content: string;
  categoryIds: number[];
}