import { CompanyAccount } from "./class/CompanyAccount";
import { PersonalAccount } from "./class/PersonalAccount";

const account1 = new PersonalAccount("Matheus", 0, 1);

console.log("=====Conta 1=====");
console.log(account1.name);
console.log(account1.status);
console.log(account1.balance);
console.log(account1.accountNumber);

account1.deposit(10);
console.log(account1.balance);
account1.deposit(10);
console.log(account1.balance);
account1.withdraw(10);
console.log(account1.balance);

console.log("");
const account2 = new CompanyAccount("COELBA", 0, 2);
console.log("=====Conta 2=====");
console.log(account2.name);
console.log(account2.status);
console.log(account2.balance);
console.log(account2.accountNumber);

account2.deposit(10);
console.log(account2.balance);
account2.deposit(10);
console.log(account2.balance);
account2.withdraw(10);
console.log(account2.balance);
account2.getLoan(100);
console.log(account2.balance);
