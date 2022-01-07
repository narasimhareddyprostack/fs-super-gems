let user = { id: 101, name: "Rahul", email: "Rahul@gmail.com" }
let details = { email: "Rahul@ibm.com", sal: 45000 }
let a = { ...user, ...details }
console.log(a)