import { BasePassword } from '../../../shared/domain/valueObjects/basePassword';
import { PersonalTrainerPasswordNotValid } from '../exceptions/personalTrainerPasswordNotValid';

export class PersonalTrainerPassword extends BasePassword {

  constructor(password: string) {
    try {
      super(password);
    } catch (error) {
      throw new PersonalTrainerPasswordNotValid(password);
    }
  }

}
