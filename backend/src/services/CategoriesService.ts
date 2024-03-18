//
import CategoriesModel from '../models/CategoriesModel';
import { ServiceResponse } from '../utils/ServiceResponse';
import { ICategories } from '../interfaces/Categories/ICategories';

class CategoriesService {
  //
  constructor(private categoriesModel = new CategoriesModel()) { }

  public async findAllCategories(): Promise<ServiceResponse<ICategories[]>> {
    //
    const categories = await this.categoriesModel.findAll();
    if (categories === null) {
      return { status: 'NOT_FOUND', data: { message: 'Categories not found!' } };
    }

    return { status: 'SUCCESSFUL', data: categories };
  }

  public async createCategory(category: ICategories): Promise<ServiceResponse<ICategories>> {
    //
    const categoryExists = await this.categoriesModel.findByName(category.name);
    if (categoryExists) {
      return { status: 'CONFLICT', data: { message: 'Category already exists!' } };
    }

    const newCategory = await this.categoriesModel.create(category);
    if (newCategory === null) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Category not created!' } };
    }

    return { status: 'CREATED', data: newCategory };
  }
}

export default CategoriesService;