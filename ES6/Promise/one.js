let doTask = (success, failure) => {
    //writing business logic
    let flag = false;
    if (flag) {
        success("Data Inserted Successfully")
    } else {
        failure("Not Successfull!")
    }
}
//doTask(()=>{},()=>{})
doTask((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})