import { Feed } from '../aggregates/feed';

export interface ScrapingRepository {

    scrap(): Promise<void>;

}
