import { Sequelize } from 'sequelize-typescript';
import NewsItem from "../model/NewsItem";

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'Sergey',
  password: '123123',
  database: 'postgres',
  models: [NewsItem],
});

export default sequelize;
