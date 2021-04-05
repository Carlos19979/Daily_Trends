import { Feed } from '../domain/aggregates/feed';
import { DailyTrendsRepository } from '../domain/contracts/dailyTrendsRepository';
import { ScrapingRepository } from '../domain/contracts/scrapingRepository';
import { FeedId } from '../domain/valueObjects/feedNumber';

export class DeleteNew {

  constructor(private dailyTrendsRepositoryImpl:DailyTrendsRepository) {}

  public async run(feedId:FeedId): Promise<void> {
   await this.dailyTrendsRepositoryImpl.deleteNew(feedId);
  }

}
