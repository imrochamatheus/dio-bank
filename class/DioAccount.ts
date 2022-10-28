export abstract class DioAccount {
  private _status!: boolean;
  private _balance!: number;
  private readonly _name!: string;
  private readonly _accountNumber!: number;

  constructor(name: string, balance: number = 0, accountNumber: number) {
    this._name = name;
    this._status = true;
    this._balance = balance;
    this._accountNumber = accountNumber;
  }

  public get name(): string {
    return this._name;
  }

  public get status(): boolean {
    return this._status;
  }

  public set status(value: boolean) {
    this._status = value;
  }

  public get balance(): number {
    return this._balance;
  }

  public set balance(value: number) {
    this._balance = value;
  }

  public get accountNumber(): number {
    return this._accountNumber;
  }

  private checkIfHaveBalance(withdrawalAmount: number): boolean {
    return this._balance >= withdrawalAmount || false;
  }

  public deposit(value: number): void {
    this._balance += value;

    console.log(`Foram depositados R$ ${value.toFixed(2)} reais na sua conta`);
  }

  public withdraw(value: number): void {
    if (this.checkIfHaveBalance(value) && this._status) {
      this._balance -= value;

      console.log(
        `Saque de R$ ${value.toFixed(2)} reais realizado com sucesso!`
      );
      return;
    }

    console.log("Você não possui saldo suficiente ou sua conta está inativa");
  }
}
