import { BaseString } from '../../../shared/domain/valueObjects/baseString';

export class PersonalTrainerHashedPassword extends BaseString {

  constructor(value: string) {
    super(value);
  }

}
