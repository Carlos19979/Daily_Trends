
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
import { Request, Response } from 'express';
import { DailyTrendsRepositoryOrm } from '../../../../boundedContext/dailyTrends/infrastructure/persistence/dailyTrendsRepositoryOrm';
import { Feed } from '../../../../boundedContext/dailyTrends/domain/aggregates/feed';
import { CreateNew } from '../../../../boundedContext/dailyTrends/application/createNew';
import { FeedTittle } from '../../../../boundedContext/dailyTrends/domain/valueObjects/feedTittle';
import { FeedDescription } from '../../../../boundedContext/dailyTrends/domain/valueObjects/feedDescription';
import { FeedSource } from '../../../../boundedContext/dailyTrends/domain/valueObjects/feedSource';
import { FeedImage } from '../../../../boundedContext/dailyTrends/domain/valueObjects/feedImage';
import { FeedNewsPaper } from '../../../../boundedContext/dailyTrends/domain/valueObjects/feedNewsPaper';

export class CreateNewController {

private dailyTrensRepositoryImpl: DailyTrendsRepositoryOrm;
private createNew: CreateNew;

constructor() {
  this.dailyTrensRepositoryImpl = new DailyTrendsRepositoryOrm();
  this.createNew = new CreateNew (this.dailyTrensRepositoryImpl);
}

public async run(req: Request, res: Response):Promise<void> {
  
  await this.createNew.run(new Feed(new FeedTittle(req.body.tittle),new FeedDescription(req.body.description), new FeedSource(req.body.source),
  new FeedImage(req.body.image),new FeedNewsPaper(req.body.newspaper)));

  res.status(HTTP_STATUS.CREATED).send();
}

}
