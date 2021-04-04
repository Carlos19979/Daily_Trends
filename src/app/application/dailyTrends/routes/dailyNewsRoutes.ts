import express, { Router } from 'express';
import { asyncHandler } from '../../shared/framework/utils/asyncHandler';
import { ScrapingController } from '../controllers/news/scrapingController';
import { Request, Response } from 'express';
import { GetNewsController } from '../controllers/news/getNewsController';

const router: Router = express.Router();

router.post('/scrap', asyncHandler((req: Request, res: Response) => {
  const scrapController: ScrapingController = new ScrapingController();

  return scrapController.run(req, res);
}));

router.get('/news', asyncHandler((req: Request, res: Response) => {
  const getNewsController: GetNewsController = new GetNewsController();

  return getNewsController.run(req, res);
}));

export default router;
