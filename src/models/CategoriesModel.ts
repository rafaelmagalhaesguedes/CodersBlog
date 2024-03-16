//
import { ICategories } from '../interfaces/Categories/ICategories';
import SequelizeCategories from '../database/models/SequelizeCategories';
import { ICategoriesModel } from '../interfaces/Categories/ICategoriesModel';

class CategoriesModel implements ICategoriesModel {
  //
  constructor(private categoriesModel = SequelizeCategories) { }

  public async findAll(): Promise<ICategories[] | null> {
    //
    const categories = await this.categoriesModel.findAll();

    if (!categories) {
      return null;
    }

    return categories;
  }
}

export default CategoriesModel;