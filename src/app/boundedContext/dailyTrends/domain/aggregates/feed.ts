import { FeedDescription } from '../valueObjects/feedDescription';
import { FeedImage } from '../valueObjects/feedImage';
import { FeedNewsPaper } from '../valueObjects/feedNewsPaper';
import { FeedId } from '../valueObjects/feedNumber';
import { FeedSource } from '../valueObjects/feedSource';
import { FeedTittle } from '../valueObjects/feedTittle';

export class Feed {

  constructor(
    private tittle: FeedTittle,
    private description: FeedDescription,
    private source: FeedSource,
    private image: FeedImage,
    private newspaper: FeedNewsPaper,
    private id?: FeedId
  ) {}

  public getValueTittle(): string {
    return this.tittle.getValue();
  }
  public getValueId(): number {
    return this.id!.getValue();
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
    return this.newspaper.getValue();
  }

  public feedToModelDB() {
    return {
      tittle: this.getValueTittle(),
      description: this.getValueDescription(),
      source: this.getValueSource(),
      image: this.getValueImage(),
      newspaper: this.getValueNewsPaper()
    };
  }

}
