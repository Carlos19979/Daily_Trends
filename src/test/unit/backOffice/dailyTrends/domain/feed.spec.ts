import { Feed } from "../../../../../app/boundedContext/dailyTrends/domain/aggregates/feed";
import { FeedDescription } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedDescription";
import { FeedImage } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedImage";
import { FeedNewsPaper } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedNewsPaper";
import { FeedId } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedNumber";
import { FeedSource } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedSource";
import { FeedTittle } from "../../../../../app/boundedContext/dailyTrends/domain/valueObjects/feedTittle";

describe('Unit test to feed Updater Application Service', () => {
    const feedId: FeedId = new FeedId(1)
    const feedTittle: FeedTittle = new FeedTittle('titulo');
    const feedDescription: FeedDescription =  new FeedDescription('descripcion');
    const feedImage: FeedImage = new FeedImage('default.jpg');
    const feedSource: FeedSource = new FeedSource('source');
    const feedNewsPaper: FeedNewsPaper = new FeedNewsPaper('El Pais');
    const feed:Feed = new Feed(feedTittle,feedDescription,feedSource,feedImage,feedNewsPaper,feedId);
  
    test('Should return feedTittle value when call method getValueName()', async () => {
      expect(feed.getValueTittle()).toEqual('titulo');
    });
  
    test('Should return feedId value when call method getValueId()', async () => {
      expect(feed.getValueId()).toEqual(1);
    });

    test('Should return feed image value when call method getValueImage()', async () => {
        expect(feed.getValueImage()).toEqual('default.jpg');
      });
    
      test('Should return source value when call method getValueSource()', async () => {
        expect(feed.getValueSource()).toEqual('source');
      });


      test('Should return feedNewsPaper value when call method getValueNewsPaper()', async () => {
        expect(feed.getValueNewsPaper()).toEqual('El Pais');
      });
    
    
    
  
    test('Should return feed model when call method toModel()', async () => {
      expect(feed.feedToModelDB()).toEqual({
        tittle: 'titulo',
        description: 'descripcion',
        source:'source',
        image:'default.jpg',
        newspaper:'El Pais'
      });
    });
  });
