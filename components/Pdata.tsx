export class Pdata {
  private id: any;
  private balance: any;
  private totalS: any;
  private transaction: any;
  private tags: any;

  constructor(data) {
    this.totalS = data.total_spent;
    this.balance = data.balance;
    this.id = data.user;
    this.transaction = data.transaction;
    this.tags = data.tags;
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
  getTags() {
    return this.tags
  }
}