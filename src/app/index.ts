import dotenv from 'dotenv';
import helmet from 'helmet';
import express, { Application, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import daylitrends from './application/dailyTrends/routes';
import { exceptionHandler } from './application/shared/middlewares/exceptionHandler';

dotenv.config({ path: __dirname + '/../../.env' });

createConnection('daylitrends');

const app: Application = express();
const port = process.env.NODE_PORT;

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

daylitrends(app, '/daylitrends');

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  exceptionHandler(error, res);
  next();
});

app.listen(port);

export default app;
