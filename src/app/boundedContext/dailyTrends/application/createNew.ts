import { Feed } from '../domain/aggregates/feed';
import { DailyTrendsRepository } from '../domain/contracts/dailyTrendsRepository';

export class CreateNew {

  constructor(private dailyTrendsRepositoryImpl:DailyTrendsRepository) {}

   public async run(feed:Feed): Promise<void> {
   await this.dailyTrendsRepositoryImpl.createNew(feed);
  }

}
