//
import { CategoryType } from './CategoryType';

export type SinglePostType = {
  id: number;
  title: string;
  content: string;
  published: Date;
  user: {
    username: string;
  };
  categories: CategoryType[];
};
