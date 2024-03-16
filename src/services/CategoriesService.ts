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
}

export default CategoriesService;