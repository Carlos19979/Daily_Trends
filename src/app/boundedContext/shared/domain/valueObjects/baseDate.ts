export class BaseDate {

    protected value: Date;

    constructor(value: Date) {
      this.value = value;
    }

    getValue(): Date {
      return this.value;
    }

    toString(): string {
      return this.getValue().toString();
    }

}
