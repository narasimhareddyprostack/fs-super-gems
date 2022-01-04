const Address = require("./Address");
class SBI extends Address {
  constructor(id, name, address) {
    super(96, "Marathahhli1", "Bangalore1");
    this.id = id;
    this.name = name;
    this.address = address;
  }
}
let sbi_c1 = new SBI(
  101,
  "Rahul Gandhi",
  new Address(96, "Marathahalli", "Bangalore")
);

console.log(sbi_c1);
let cityvalue = sbi_c1.getAddress();
console.log(cityvalue);
