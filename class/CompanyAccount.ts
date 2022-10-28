import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, balance: number, accountNumber: number) {
    super(name, balance, accountNumber);
  }

  public getLoan(loanValue: number): void {
    if (this.status) {
      this.balance += loanValue;

      console.log(
        `Empréstimo de R$ ${loanValue.toFixed(2)} realizado com sucesso!`
      );

      return;
    }

    console.log("Não foi possível realizar o empréstimo");
  }
}
