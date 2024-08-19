export class Pdata {
  private id: any;
  private balance: any;
  private totalS: any;
  private transaction: any;

  constructor(data) {
    this.totalS = data.total_spent;
    this.balance = data.balance;
    this.id = data.user;
    this.transaction = data.transaction;

  }
  getBalance() {
    return this.balance
  }
  getTotalS() {
    return this.totalS
  }
  getTransaction() {
    return this.transaction
  }
  getUid() {
    return this.id
  }
}