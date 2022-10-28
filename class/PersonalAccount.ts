import { DioAccount } from "./DioAccount";

export class PersonalAccount extends DioAccount {
  constructor(name: string, balance: number, accountNumber: number) {
    super(name, balance, accountNumber);
  }

  public deposit(value: number): void {
    const depositValue = value + 10;

    this.balance += depositValue;

    console.log(
      `Foram depositados R$ ${depositValue.toFixed(2)} reais na sua conta`
    );
  }
}
