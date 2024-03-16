//
import { ICategories } from './ICategories';

export interface ICategoriesModel {
  findAll: () => Promise<ICategories[] | null>;
}