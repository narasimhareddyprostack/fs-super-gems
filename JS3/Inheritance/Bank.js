class Address {
  get_Address() {
    console.log("Address Class - method: get_Address");
  }
}
class Saving_Acc extends Address {}
let c1 = new Saving_Acc();
c1.get_Address();
class CC_Acc extends Address {
  get_Address() {
    console.log("CC_Account - getAddress method");
  }
}
let c2 = new CC_Acc();
c2.get_Address();
c2.get_Balance();
