import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Optional } from 'sequelize';

export interface INews {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

type NewsCreationAttributes = Optional<INews, 'id'>;

@Table({
  underscored: true,
  paranoid: true,
  timestamps: false,
  tableName: "NewsItem",
})
export default class NewsItem extends Model<INews, NewsCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column(DataType.STRING)
  declare title: string;

  @AllowNull
  @Column(DataType.INTEGER)
  declare points: number | null;

  @AllowNull
  @Column(DataType.STRING)
  declare user: string | null;

  @Column(DataType.INTEGER)
  declare time: number;

  @Column(DataType.STRING)
  declare time_ago: string;

  @Column(DataType.INTEGER)
  declare comments_count: number;

  @Column(DataType.STRING)
  declare type: string;

  @AllowNull
  @Column(DataType.STRING)
  declare url: string;

  @AllowNull
  @Column(DataType.STRING)
  declare domain: string;
}
