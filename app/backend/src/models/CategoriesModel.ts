//
import { ICategories } from '../interfaces/Categories/ICategories';
import SequelizeCategories from '../database/models/SequelizeCategories';
import { ICategoriesModel } from '../interfaces/Categories/ICategoriesModel';
import { Op } from 'sequelize';

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

  public async findById(id: number): Promise<ICategories | null> {
    //
    const category = await this.categoriesModel.findOne({ where: { id } });

    if (!category) {
      return null;
    }

    return category;
  }

  public async findByName(name: string): Promise<ICategories | null> {
    //
    const category = await this.categoriesModel.findOne({ where: { name } });

    if (!category) {
      return null;
    }

    return category;
  }

  public async findCategory(categoryIds: number[]): Promise<boolean> {
    //
    const { count } = await this.categoriesModel.findAndCountAll({
      where: {
        id: {
          [Op.in]: categoryIds,
        },
      },
    });
    
    return count === categoryIds.length;
  };

  public async create(category: ICategories): Promise<ICategories | null> {
    //
    const newCategory = await this.categoriesModel.create(category);

    if (!newCategory) {
      return null;
    }

    return newCategory;
  }
}

export default CategoriesModel;