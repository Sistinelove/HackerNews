import sequelize from '../db/db';
import { faker } from '@faker-js/faker';
import NewsItem from "../model/NewsItem";

const initDb = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced!');

  for (let i = 0; i < 100; i++) {
    await NewsItem.create({
      title: faker.internet.userName(),
      points: faker.datatype.number({ min: 0, max: 1000 }),
      user: faker.internet.userName(),
      time: Math.floor(faker.date.past().getTime() / 1000),
      time_ago: faker.date.recent().toISOString(),
      comments_count: faker.datatype.number({ min: 0, max: 100 }),
      type: faker.random.word(), // Тип в виде строки
      url: faker.internet.url(),
      domain: faker.internet.domainName()
    });
  }
  console.log('Data generated!');
};

export default initDb;
