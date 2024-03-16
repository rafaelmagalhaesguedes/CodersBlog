//
import { ICategories } from './ICategories';

export interface ICategoriesModel {
  findAll: () => Promise<ICategories[] | null>;
  findById: (id: ICategories['id']) => Promise<ICategories | null>;
  findByName: (name: ICategories['name']) => Promise<ICategories | null>;
  create: (category: ICategories) => Promise<ICategories | null>;
}