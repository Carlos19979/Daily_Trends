import { Uuid } from '../../../shared/domain/valueObjects/uuid';
import { PersonalTrainerUiddNotvalid } from '../exceptions/personalTrainerIdNotValid';

export class PersonalTrainerId extends Uuid {

  constructor(id: string) {
    try {
      super(id);
    } catch (error) {
      throw new PersonalTrainerUiddNotvalid(id);
    }
  }

}
