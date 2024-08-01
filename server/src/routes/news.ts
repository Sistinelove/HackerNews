import { Request, Response, Router } from 'express';
import News from '../model/models';

const router = Router();

router.get('/fetch', async (req: Request, res: Response) => {
  try {
    const fetchUrl = [
      'http://api.hnpwa.com/v0/news/1.json',
      'http://api.hnpwa.com/v0/news/2.json',
      'http://api.hnpwa.com/v0/news/3.json',
      'http://api.hnpwa.com/v0/news/4.json',
    ];

    const fetchPromises = fetchUrl.map((url) => fetch(url).then((response) => response.json()));
    const data = await Promise.all(fetchPromises);
    const newsItems = data.flat();

    await News.bulkCreate(newsItems, { ignoreDuplicates: true });

    res.status(200).json(newsItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch and store data' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const news = await News.findAll();
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

export default router;
