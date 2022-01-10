let employee = { id: "101", name: 'Rahul', sal: 45000, details: { location: "New Delhi", houseNo: 96 } }
console.log(employee.id)

//console.log(employee.details.location)
let { id, name } = employee;
console.log(id)
console.log(name)