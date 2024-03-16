//
import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeCategories extends Model<InferAttributes<SequelizeCategories>,
InferCreationAttributes<SequelizeCategories>> {
  declare id: CreationOptional<number>;

  declare name: string;
}

SequelizeCategories.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    sequelize: db,
    modelName: 'categories',
    timestamps: false,
});

export default SequelizeCategories;