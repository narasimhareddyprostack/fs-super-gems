const bcrypt = require('bcryptjs')
let user = {
    name: "Rahul Gandhi",
    email: "Rahul@pm.com",
    cc: '1234 5678 ',
    password: "ILoveMoney"
}
let salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.password, salt);
let new_CC = bcrypt.hashSync(user.cc, salt);
/* console.log(user.password)
console.log(newPassword)
console.log(new_CC) */
let new_User = { ...user, password: newPassword, cc: new_CC }
console.log(user);
console.log(new_User)

let result = bcrypt.compareSync("ILoveIndia", new_User.password)

result? console.log("Login Success"):console.log("Login Failure")