//
import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeUser from './SequelizeUser';

class SequelizePosts extends Model<InferAttributes<SequelizePosts>,
InferCreationAttributes<SequelizePosts>> {
  //
  declare id: CreationOptional<number>;

  declare title: string;

  declare content: string;

  declare image: string;

  declare userId: number;

  declare published: Date;

  declare updated: Date;
}

SequelizePosts.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT
  },
  image: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    field: 'user_id'
  },
  published: {
    type: DataTypes.DATE
  },
  updated: {
    type: DataTypes.DATE
  },
}, {
    sequelize: db,
    modelName: '',
    timestamps: false,
});

SequelizePosts.belongsTo(SequelizeUser, { foreignKey: 'userId', as: 'user' });

export default SequelizePosts;