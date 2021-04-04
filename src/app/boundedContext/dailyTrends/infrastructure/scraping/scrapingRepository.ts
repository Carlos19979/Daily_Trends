import { ScrapingRepository } from "../../domain/contracts/scrapingRepository";
import cheerio from 'cheerio';
import axios from 'axios';
import { Feed } from "../../domain/aggregates/feed";
import { FeedTittle } from "../../domain/valueObjects/feedTittle";
import { FeedDescription } from "../../domain/valueObjects/feedDescription";
import { FeedImage } from "../../domain/valueObjects/feedImage";
import { FeedNewsPaper } from "../../domain/valueObjects/feedNewsPaper";
import { FeedSource } from "../../domain/valueObjects/feedSource";
import { title } from "node:process";
import { EntityManager, getConnection } from "typeorm";
import { PersonalTrainerEntity } from "../persistence/typeORM/personalTrainerEntity";
import { FeedEntity } from "../persistence/typeORM/feedEntity";


export class ScrapingNewsRepository implements ScrapingRepository {


  async scrap(): Promise<void> {
    const entityManager: EntityManager = getConnection('daily_trends').manager;
    const url = 'https://www.elmundo.es/';
    const url2 = 'https://elpais.com/';
    const classe = '.ue-c-cover-content__link';
    const classe2 = '.headline';
    let elPais = [];
    let elMundo = [];
    let feeds = [];

    elPais = await this.newsLinkScrapper(url2,classe2);
    elMundo = await this.newsLinkScrapper(url,classe);

    for(var i = 0; i < 5; i++){
     feeds.push(await this.getFeedsElPais(elPais[i]));
     feeds.push(await this.getFeedsElMundo(elMundo[i]));
    }
   
    await entityManager.save(FeedEntity,feeds[0].toModelDB());
    

  }

  private async getFeedsElMundo(url:any): Promise<Feed>{
    const AxiosInstance = axios.create();

      const result = await AxiosInstance.get(url).then(response => {
      const html = response.data; 
      const $ = cheerio.load(html);
    
      const tittle = $('h1').text();
      const body = $('div[class="ue-l-article__body ue-c-article__body"]').find('p').text()
      const img = $('picture').find('img').attr('src')
      const source = $('.ue-c-article__byline-name').find('a').text()
      const newsPaper = 'El Mundo';
      let feed:Feed;

      return feed = new Feed(new FeedTittle(tittle),new FeedDescription(body),new FeedSource(source),new FeedImage(img!),new FeedNewsPaper(newsPaper));
      
    })

   return result;
  
  }

  private async getFeedsElPais(url:any): Promise<Feed>{
    const AxiosInstance = axios.create();

      const result = await AxiosInstance.get(url).then(response => {
      const html = response.data; 
      const $ = cheerio.load(html);
    
      const tittle = $('h1').text();
      const body = $('div[id="ctn_article_body"]').find('p').text();
      const img = $('.lead_art').find('img').attr('src');
      const source = $('.a_aut_n').text();
      const newsPaper = 'El pais';
      let feed:Feed;
      
      return feed = new Feed(new FeedTittle(tittle),new FeedDescription(body),new FeedSource(source),new FeedImage(img!),new FeedNewsPaper(newsPaper));
      
    })
  
   return result;
  
  }

  private async newsLinkScrapper(url:string,classe:string): Promise<string[]>{
    const anchors: string[] = [];
    const AxiosInstance = axios.create();

      await AxiosInstance.get(url).then(response => {
        const html = response.data; 
        const $ = cheerio.load(html);
        
        if(url.localeCompare('https://elpais.com/') === 0){
          $(classe).find('a').each((index, elem)=>{
            if(index < 5){
              anchors.push(url+$(elem).attr('href'));
            }
          });
        }else {
          $(classe).each((index, elem)=>{
            if(index < 5){
              anchors.push($(elem).attr('href')!); 
            }
          });

        }
      })
      return anchors;
    }
 
}

