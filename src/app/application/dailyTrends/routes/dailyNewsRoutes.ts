import express, { Router } from 'express';
import { asyncHandler } from '../../shared/framework/utils/asyncHandler';
import { ScrapingController } from '../controllers/news/scrapingController';
import { Request, Response } from 'express';
import { GetNewsController } from '../controllers/news/getNewsController';
import { CreateNewController } from '../controllers/news/createNewController';
import { DeleteNewController } from '../controllers/news/deleteNewController';

const router: Router = express.Router();

router.post('/scrap', asyncHandler((req: Request, res: Response) => {
  const scrapController: ScrapingController = new ScrapingController();

  return scrapController.run(req, res);
}));

router.get('/news', asyncHandler((req: Request, res: Response) => {
  const getNewsController: GetNewsController = new GetNewsController();

  return getNewsController.run(req, res);
}));

router.post('/new', asyncHandler((req: Request, res: Response) => {
  const createNewController: CreateNewController = new CreateNewController();

  return createNewController.run(req, res);
}));

router.delete('/new/:id', asyncHandler((req: Request, res: Response) => {
  const deleteNewController: DeleteNewController = new DeleteNewController();

  return deleteNewController.run(req, res);
}));

export default router;
