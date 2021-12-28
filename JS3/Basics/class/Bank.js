class Bank {
  min_Bal = 500;
  open_Account() {
    console.log("Account Opened Successfully");
  }
}
let c1 = new Bank();
console.log(c1);
console.log(c1.min_Bal);
c1.open_Account();
/* console.log(new Bank().min_Bal);
console.log(new Bank().min_Bal); */
