let emp = {
  id: 101,
  name: "Rahul Gandhi",
  salary: 45000,
  getName: function () {
    return this.name;
  },
  getSalary: function () {
    console.log("Salary not Credited");
  },
};
emp.getSalary();
emp.getLoc();
