import { Sequelize } from 'sequelize-typescript';
import News from '../model/models';

export const sequelize = new Sequelize('HackerNews', 'postgres', 'Xaker7564321', {
  host: 'localhost',
  dialect: 'postgres',
  models: [News],
});

export default sequelize;
