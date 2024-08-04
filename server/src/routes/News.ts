import {Router,Request,Response } from 'express'
import NewsItem from "../model/NewsItem";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const News = await NewsItem.findAll();
  res.json(News);
});

export default router;
