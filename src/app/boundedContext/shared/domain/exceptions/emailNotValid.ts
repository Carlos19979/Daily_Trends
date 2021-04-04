import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from './base';

export class EmailNotValid extends BaseException {

  constructor(email: string) {
    const message = `error ${email} is not a user valid email`;
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
