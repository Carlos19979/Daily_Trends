import express, { Router } from 'express';
import { asyncHandler } from '../../shared/framework/utils/asyncHandler';
import { ScrapingController } from '../controllers/news/scrapingController';
import { Request, Response } from 'express';

const router: Router = express.Router();

router.post('/scrap', asyncHandler((req: Request, res: Response) => {
  const scrapController: ScrapingController = new ScrapingController();

  return scrapController.run(req, res);
}));

export default router;
