let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
{ id: 102, name: "Sonai Gandhi", sal: 55000 }
]
let creatEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        let flag = true;
        setTimeout(() => {
            employees.push(emp);
            flag ? resolve("Inserted Successfully") : reject("Not Inserted Successfully")
        }, 3000)

    })
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
creatEmployee({ id: 103, name: "Priyanka", sal: 56000 })
    .then((msg) => {
        console.log(msg);
        getEmployee();
    })
    .catch((err) => {
        console.log(err)
    })

creatEmployee().then().catch()