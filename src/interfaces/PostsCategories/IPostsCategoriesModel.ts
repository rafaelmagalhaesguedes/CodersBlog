//
export interface IPostsCategoriesModel {
  create: (postId: number, categoryId: number[]) => Promise<boolean | null>;
}