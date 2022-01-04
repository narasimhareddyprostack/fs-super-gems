class Address {
  constructor(houseNo, area, city) {
    this.houseNo = houseNo;
    this.area = area;
    this.city = city;
    console.log("Address Class Constrcutor");
  }
  getAddress() {
    return this.city;
  }
}
module.exports = Address;
