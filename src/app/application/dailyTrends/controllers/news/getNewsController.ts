
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
import { Request, Response } from 'express';
import { DailyTrendsRepository } from '../../../../boundedContext/dailyTrends/domain/contracts/dailyTrendsRepository';
import { DailyTrendsRepositoryOrm } from '../../../../boundedContext/dailyTrends/infrastructure/persistence/dailyTrendsRepositoryOrm';
import { GetNews } from '../../../../boundedContext/dailyTrends/application/getNews';
import { Feed } from '../../../../boundedContext/dailyTrends/domain/aggregates/feed';

export class GetNewsController {

private dailyTrensRepositoryImpl: DailyTrendsRepositoryOrm;
private getNews: GetNews;

constructor() {
  this.dailyTrensRepositoryImpl = new DailyTrendsRepositoryOrm();
  this.getNews = new GetNews (this.dailyTrensRepositoryImpl);
}

public async run(req: Request, res: Response):Promise<void> {
  const feeds  = await this.getNews.run();
  const feedsResponse = feeds.map((feed: Feed) => feed.feedToModelDB());
  res.status(HTTP_STATUS.SUCCESS).send(feedsResponse);
}

}
