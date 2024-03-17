//
import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import SequelizeCategories from './SequelizeCategories';
import SequelizePosts from './SequelizePosts';

class SequelizePostsCategories extends Model<InferAttributes<SequelizePostsCategories>,
InferCreationAttributes<SequelizePostsCategories>> {
  //
  declare postId: number;

  declare categoryId: number;
}

SequelizePostsCategories.init({
  postId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false, // Ensure postId is not null
  },
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false, // Ensure categoryId is not null
  },
}, {
    sequelize: db,
    modelName: 'posts_categories',
    underscored: true,
    timestamps: false,
});

SequelizePosts.belongsToMany(SequelizeCategories, { through: SequelizePostsCategories, as: 'categories' });

SequelizeCategories.belongsToMany(SequelizePosts, { through: SequelizePostsCategories, as: 'posts' });

export default SequelizePostsCategories;