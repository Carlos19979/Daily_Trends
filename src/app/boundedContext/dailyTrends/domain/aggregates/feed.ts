import { FeedDescription } from "../valueObjects/feedDescription";
import { FeedImage } from "../valueObjects/feedImage";
import { FeedNewsPaper } from "../valueObjects/feedNewsPaper";
import { FeedSource } from "../valueObjects/feedSource";
import { FeedTittle } from "../valueObjects/feedTittle";


export class Feed {

  constructor(
    private tittle: FeedTittle,
    private description: FeedDescription,
    private source: FeedSource,
    private image: FeedImage,
    private newsPaper: FeedNewsPaper,
  ) {}

  public getValueTittle(): string {
    return this.tittle.getValue();
  }
  public getValueDescription(): string {
    return this.description.getValue();
  }
  public getValueSource(): string {
    return this.source.getValue();
  }
  public getValueImage(): string {
    return this.image.getValue();
  }
  public getValueNewsPaper(): string {
    return this.newsPaper.getValue();
  }
 
  public feedToModel(){
      return () =>{
          
      }
  }

}
