import { Application, Request, Response } from 'express';
import personalTrainerRoutes from './personalTrainerRoutes';

export default (app: Application, prefix: string): void => {
  app.get(prefix, (req: Request, res: Response) => res.send({ message: `Wellcome to '${prefix}' routes` }));
  app.use(prefix, personalTrainerRoutes);
};
