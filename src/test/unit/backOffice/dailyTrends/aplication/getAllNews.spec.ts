import { CreateNew } from "../../../../../app/boundedContext/dailyTrends/application/createNew";
import { GetNews } from "../../../../../app/boundedContext/dailyTrends/application/getNews";
import { Feed } from "../../../../../app/boundedContext/dailyTrends/domain/aggregates/feed";
import { FeedDescription } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedDescription";
import { FeedImage } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedImage";
import { FeedNewsPaper } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedNewsPaper";
import { FeedId } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedNumber";
import { FeedSource } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedSource";
import { FeedTittle } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedTittle";
import { DailyRepositoryInMemory } from "../persistence/dailyTrendsRepositoryInMemory";

describe('Unit test to feed getNews Application service', () => {
    let getNews: GetNews;
    let dailyRepositoryInMemory: DailyRepositoryInMemory;
  
    beforeEach(() => {
      dailyRepositoryInMemory = new DailyRepositoryInMemory();
      getNews = new GetNews(dailyRepositoryInMemory);
    });
  
    test('Should get 2 feeds when have 2', async () => {
      const feed = new Feed(new FeedTittle('titulo'),new FeedDescription('descripcion'), new FeedSource('source'),
      new FeedImage('default.jpg'),new FeedNewsPaper('EL Pais'),new FeedId(1));
      const feed1 = new Feed(new FeedTittle('titulo'),new FeedDescription('descripcion'), new FeedSource('source'),
      new FeedImage('default.jpg'),new FeedNewsPaper('EL Pais'),new FeedId(2));

      dailyRepositoryInMemory.addFeeds(feed,feed1);

      const feeds = await getNews.run();
      expect([feed,feed1]).toEqual(feeds)
    });
  });