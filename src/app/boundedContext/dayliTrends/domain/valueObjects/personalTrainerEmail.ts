import { BaseEmail } from '../../../shared/domain/valueObjects/baseEmail';
import { PersonalTrainerEmailNotValid } from '../exceptions/personalTrainerEmailNotValid';

export class PersonalTrainerEmail extends BaseEmail {

  constructor(value: string) {
    try {
      super(value);
    } catch (error) {
      throw new PersonalTrainerEmailNotValid(value);
    }
  }

}
