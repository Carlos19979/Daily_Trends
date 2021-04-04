import { BaseString } from '../../../shared/domain/valueObjects/baseString';
import { TokenModel } from '../models/tokenModel';

export class Token extends BaseString {

  constructor(token: string) {
    super(token);
  }

  public toModel(): TokenModel {
    return {
      token: this.getValue()
    };
  }

}
