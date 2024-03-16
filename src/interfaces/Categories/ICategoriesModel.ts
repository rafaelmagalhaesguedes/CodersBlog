//
import { ICategories } from './ICategories';

export interface ICategoriesModel {
  findAll: () => Promise<ICategories[] | null>;
  findById: (id: number) => Promise<ICategories | null>;
  findByName: (name: string) => Promise<ICategories | null>;
  create: (category: ICategories) => Promise<ICategories | null>;
}