import { PasswordNotValid } from '../exceptions/passwordNotValid';

export class BasePassword {

  protected value: string;

  constructor(value: string) {
    this.ensurePasswordSecurity(value);
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  private ensurePasswordSecurity(password: string): void {
    const passwordSecurity = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // ex: H3lloworld
    const isSecure = passwordSecurity.test(password);

    if (!isSecure) {
      throw new PasswordNotValid();
    }
  }

}
