import { Feed } from "../aggregates/feed";

export interface DailyTrendsRepository {

    getNews(): Promise<Feed[]>;
    postNew(): Promise<void>;


}