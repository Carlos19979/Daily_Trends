import { CreateNew } from "../../../../../app/boundedContext/dailyTrends/application/createNew";
import { DeleteNew } from "../../../../../app/boundedContext/dailyTrends/application/deleteNews";
import { Feed } from "../../../../../app/boundedContext/dailyTrends/domain/aggregates/feed";
import { FeedDescription } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedDescription";
import { FeedImage } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedImage";
import { FeedNewsPaper } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedNewsPaper";
import { FeedId } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedNumber";
import { FeedSource } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedSource";
import { FeedTittle } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedTittle";
import { DailyRepositoryInMemory } from "../persistence/dailyTrendsRepositoryInMemory";

describe('Unit test to feed deleteNew Application service', () => {
    let deleteNew: DeleteNew;
    let dailyRepositoryInMemory: DailyRepositoryInMemory;
  
    beforeEach(() => {
      dailyRepositoryInMemory = new DailyRepositoryInMemory();
      deleteNew = new DeleteNew(dailyRepositoryInMemory);
    });
  
    test('Should delete feed when not exist in database or update if it exsist', async () => {
      const feed = new Feed(new FeedTittle('titulo'),new FeedDescription('descripcion'), new FeedSource('source'),
      new FeedImage('default.jpg'),new FeedNewsPaper('EL Pais'),new FeedId(1));
  
      expect(await deleteNew.run(new FeedId(feed.getValueId())));
    });
  });