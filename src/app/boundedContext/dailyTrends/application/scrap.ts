import { ScrapingRepository } from "../domain/contracts/scrapingRepository";

export class Scrap{


  constructor(
    private scrapingRepositoryImpl:ScrapingRepository
    ){}


  public async run(): Promise<void> {

    await this.scrapingRepositoryImpl.scrap()
    

  }
    


}