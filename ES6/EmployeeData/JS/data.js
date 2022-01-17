let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
{ id: 102, name: "Sonai Gandhi", sal: 55000 }
]

let createEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, 3000);
    console.log(employees)
}
let getEmployee = () => {

    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                           </tr>`
        }
        document.getElementById('tdata').innerHTML = rows
    }, 1000)

}
createEmployee({ id: 103, name: "Priyanka", sal: 67000 }, getEmployee)
