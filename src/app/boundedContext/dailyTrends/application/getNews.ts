import { Feed } from '../domain/aggregates/feed';
import { DailyTrendsRepository } from '../domain/contracts/dailyTrendsRepository';
import { ScrapingRepository } from '../domain/contracts/scrapingRepository';

export class GetNews {

  constructor(private dailyTrendsRepositoryImpl:DailyTrendsRepository) {}

  public async run(): Promise<Feed[]> {
   const news = await this.dailyTrendsRepositoryImpl.getNews();
   return news;
  }

}
