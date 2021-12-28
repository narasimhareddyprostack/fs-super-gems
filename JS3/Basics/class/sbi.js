class Sbi_Bank {
  min_Bal = 500;
  open_Account() {
    console.log("Account Opened Successfully");
  }
  get_Balance() {
    return this.min_Bal + 100;
  }
}
let c1 = new Sbi_Bank();
console.log(c1.min_Bal);
let amount = c1.get_Balance();
console.log(amount);

console.log(c1.get_Balance());
c1.open_Account();
