import { Scrap } from "../../../../boundedContext/dailyTrends/application/scrap";
import { ScrapingNewsRepository } from "../../../../boundedContext/dailyTrends/infrastructure/scraping/scrapingRepositoryOrm";
import { HTTP_STATUS } from "../../../shared/constants/http_codes";
import { Request, Response } from 'express';

export class ScrapingController {


private scrapingRepositoryImpl: ScrapingNewsRepository;
private scrap: Scrap;

    constructor(){
        this.scrapingRepositoryImpl = new ScrapingNewsRepository()
        this.scrap = new Scrap(this.scrapingRepositoryImpl)
    }

    public async run(req: Request, res: Response){
        await this.scrap.run()
        res.status(HTTP_STATUS.CREATED);
    }

}