import express from 'express';
import { sequelize } from './db/db';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/news', newsRouter);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Backend started at http://localhost:${port}`);
});
