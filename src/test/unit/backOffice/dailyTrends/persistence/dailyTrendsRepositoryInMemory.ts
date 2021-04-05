import { Feed } from "../../../../../app/boundedContext/dailyTrends/domain/aggregates/feed";
import { DailyTrendsRepository } from "../../../../../app/boundedContext/dailyTrends/domain/contracts/dailyTrendsRepository";
import { FeedId } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedNumber";

interface FeedIndexed {
    [id: string]: Feed
  }
  
  export class DailyRepositoryInMemory implements DailyTrendsRepository {

    private feeds: Feed[] = [];
    private feedsIndexed: FeedIndexed = {}

    getNews(): Promise<Feed[]> {
        return new Promise((resolve) => {
            resolve(this.feeds);
          });
    }
    createNew(feed: Feed): Promise<void> {
       return new Promise((resolve) => {
        this.addFeedsInMemory(feed);
        resolve();
      });
    }
    deleteNew(feedId: FeedId): Promise<void> {
        return new Promise((resolve) => {
            this.feeds = this.feeds.filter((feed: Feed) => feed.getValueId() !== feedId.getValue());
            delete this.feedsIndexed[feedId.getValue()];
            resolve();
          });
    }

    public addFeeds(...feeds: Feed[]): void {
        feeds.map(feed => this.addFeedsInMemory(feed));
      }
    
      private addFeedsInMemory(feed: Feed): void {
        this.feeds.push(feed);
        this.feedsIndexed[feed.getValueId()] = feed;
      }
  
  }