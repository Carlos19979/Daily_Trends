import { EmailNotValid } from '../exceptions/emailNotValid';

export class BaseEmail {

    protected value: string;

    constructor(value: string) {
      this.ensureEmailSecurity(value);
      this.value = value;
    }

    getValue(): string {
      return this.value;
    }

    toString(): string {
      return this.getValue().toString();
    }

    private ensureEmailSecurity(email: string): void {
      const emailSecurity = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isSecure = emailSecurity.test(email);

      if (!isSecure) {
        throw new EmailNotValid(email);
      }
    }

}
