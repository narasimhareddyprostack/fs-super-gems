let employees = [{ id: 101 }, { id: 102 }, { id: 103 }]
let result = employees.map((emp) => {
    console.log(emp.id)
    return emp.id
})
console.log(result)