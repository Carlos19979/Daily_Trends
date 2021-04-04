import express, { Router } from "express";
import { asyncHandler } from "../../shared/framework/utils/asyncHandler";
import { scrapingController } from "../controllers/news/scrapingController";
import { Request, Response } from 'express';


const router: Router = express.Router();

router.post('/scrap', asyncHandler((req: Request, res: Response) => {
  const scrapController: scrapingController = new scrapingController();

  return scrapController.run(req, res);
}));

export default router;
