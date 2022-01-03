class Bank {
  min_Bal = 500;
  /* acc_id;
  acc_Name;
  acc_Amount; */
  constructor(id, name, amount) {
    this.acc_id = id;
    this.acc_Name = name;
    this.acc_Amount = amount;
  }
  open_Account() {}
  deposit() {}
  withdrawl() {}
  get_Statement() {}
  get_Bal() {
    return this.acc_Amount - this.min_Bal;
  }
  close_Account() {}
}
let c1 = new Bank(9591, "Chandan", 50000);
let c2 = new Bank(145, "Raj", 100000);
console.log(c1.get_Bal());
console.log(c2.get_Bal());
