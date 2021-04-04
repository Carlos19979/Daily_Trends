import { EntityManager, getConnection } from "typeorm";
import { Feed } from "../../domain/aggregates/feed";
import { DailyTrendsRepository } from "../../domain/contracts/dailyTrendsRepository";
import { FeedModel } from "../../domain/models/feedModel";
import { FeedDescription } from "../../domain/valueObjects/feedDescription";
import { FeedImage } from "../../domain/valueObjects/feedImage";
import { FeedNewsPaper } from "../../domain/valueObjects/feedNewsPaper";
import { FeedSource } from "../../domain/valueObjects/feedSource";
import { FeedTittle } from "../../domain/valueObjects/feedTittle";
import { FeedEntity } from "./typeORM/feedEntity";

export class DailyTrendsRepositoryOrm implements DailyTrendsRepository {
    async getNews(): Promise<Feed[]> {
        const entityManager: EntityManager = getConnection('daily_trends').manager;
        const models = await entityManager.find(FeedEntity);
        return this.getFeedByModel(...models)
    }
    async createNew(feed:Feed): Promise<void> {
        const entityManager: EntityManager = getConnection('daily_trends').manager;
        entityManager.save(FeedEntity,feed.feedToModelDB())
    }


    private getFeedByModel(...feedModel:FeedModel[]):Feed[] {

        return feedModel.map((feedModelDb:FeedModel) => new Feed(new FeedTittle(feedModelDb.tittle),new FeedDescription(feedModelDb.description), new FeedSource(feedModelDb.source),
        new FeedImage(feedModelDb.image),new FeedNewsPaper(feedModelDb.newspaper)
        ))


    }
}