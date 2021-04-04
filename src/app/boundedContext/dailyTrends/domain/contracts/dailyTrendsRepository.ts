import { Feed } from "../aggregates/feed";

export interface DailyTrendsRepository {

    getNews(): Promise<Feed[]>;
    createNew(feed:Feed): Promise<void>;


}