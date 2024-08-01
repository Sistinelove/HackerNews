import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/db';

class News extends Model {
  public id!: number;
  public title!: string;
  public points!: number | null;
  public user!: string | null;
  public time!: Date;
  public time_ago!: Date;
  public comments_count!: number;
  public type!: string;
  public url!: string | null;
  public domain!: string | null;
}

News.init(
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time_ago: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    comments_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'news',
    timestamps: false,
  },
);

export default News;
