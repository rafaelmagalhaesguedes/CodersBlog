//
import CategoriesModel from '../models/CategoriesModel';
import { ServiceResponse } from '../utils/ServiceResponse';
import { ICategories } from '../interfaces/Categories/ICategories';

// Constants
const CREATED = 'CREATED';
const CONFLICT = 'CONFLICT';
const NOT_FOUND = 'NOT_FOUND';
const SUCCESSFUL = 'SUCCESSFUL';
const INTERNAL_ERROR = 'INTERNAL_ERROR';

const CATEGORY_NOT_FOUND = 'Category not found!';
const CATEGORIES_NOT_FOUND = 'Categories not found!';
const CATEGORY_NOT_CREATED = 'Category not created!';
const CATEGORY_NOT_UPDATED = 'Category not updated!';
const CATEGORY_NOT_DELETED = 'Category not deleted!';
const CATEGORY_ALREADY_EXISTS = 'Category already exists!';

class CategoriesService {
  constructor(private categoriesModel = new CategoriesModel()) { }

  public async findAllCategories(): Promise<ServiceResponse<ICategories[]>> {
    
    const categories = await this.categoriesModel.findAll();
    
    if (categories === null) {
      return { status: NOT_FOUND, data: { message: CATEGORIES_NOT_FOUND } };
    }

    return { status: SUCCESSFUL, data: categories };
  }


  public async createCategory(category: ICategories): Promise<ServiceResponse<ICategories>> {
    
    const categoryExists = await this.categoriesModel.findByName(category.name);

    if (categoryExists) {
      return { status: CONFLICT, data: { message: CATEGORY_ALREADY_EXISTS } };
    }

    const newCategory = await this.categoriesModel.create(category);
    
    if (newCategory === null) {
      return { status: INTERNAL_ERROR, data: { message: CATEGORY_NOT_CREATED } };
    }

    return { status: CREATED, data: newCategory };
  }


  public async updateCategory(id: number, category: ICategories): Promise<ServiceResponse<ICategories>> {
    
    const categoryExists = await this.categoriesModel.findById(id);
    
    if (categoryExists === null) {
      return { status: NOT_FOUND, data: { message: CATEGORY_NOT_FOUND } };
    }

    const updatedCategory = await this.categoriesModel.update(id, category);
    
    if (updatedCategory === null) {
      return { status: NOT_FOUND, data: { message: CATEGORY_NOT_UPDATED } };
    }

    return { status: SUCCESSFUL, data: updatedCategory };
  }


  public async deleteCategory(id: number): Promise<ServiceResponse<boolean>> {
    
    const categoryExists = await this.categoriesModel.findById(id);
    
    if (categoryExists === null) {
      return { status: NOT_FOUND, data: { message: CATEGORY_NOT_FOUND } };
    }

    const deletedCategory = await this.categoriesModel.delete(id);
    
    if (deletedCategory === null) {
      return { status: INTERNAL_ERROR, data: { message: CATEGORY_NOT_DELETED} };
    }

    return { status: SUCCESSFUL, data: deletedCategory };
  }
}

export default CategoriesService;