//
import SequelizePostsCategories from '../database/models/SequelizePostsCategories';
import { IPostsCategoriesModel } from '../interfaces/PostsCategories/IPostsCategoriesModel';

class PostsCategoriesModel implements IPostsCategoriesModel {
  //
  constructor(private model = SequelizePostsCategories) { }

  public async create(postId: number, categoryId: number[]): Promise<boolean> {
    //
    const postsCategories = categoryId.map((id) => {
      return { postId, categoryId: id };
    });

    const created = await this.model.bulkCreate(postsCategories);

    return !!created;
  }

  public async delete(id: number): Promise<boolean> {
    //
    const deleted = await this.model.destroy({ where: { postId: id } });

    return !!deleted;
  }
}

export default PostsCategoriesModel;