import { EntitySchema } from 'typeorm';
import { FeedModel } from '../../../domain/models/feedModel';

export const FeedEntity = new EntitySchema<FeedModel>({
  name: 'feeds',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true
    },
    tittle: {
      type: String,
      nullable: false
    },
    description: {
      type: String,
      nullable: false
    },
    image: {
      type: Date,
      nullable: false
    },
    source: {
      type: String,
      nullable: false
    },
    newspapper: {
      type: String,
      nullable: false
    }
  }
});
