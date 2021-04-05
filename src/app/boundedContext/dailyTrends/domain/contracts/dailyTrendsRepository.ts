import { Feed } from "../aggregates/feed";
import { FeedId } from "../valueObjects/feedNumber";

export interface DailyTrendsRepository {

    getNews(): Promise<Feed[]>;
    createNew(feed:Feed): Promise<void>;
    deleteNew(feedId:FeedId): Promise<void>;



}