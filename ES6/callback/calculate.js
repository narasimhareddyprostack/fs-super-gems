let calculate = (a, b, operation) => {
    if (operation == "sum") {
        return a + b
    }
    if (operation == "sub") {
        return a - b
    }
}

let result = calculate(10, 20, "sum")
console.log(result)
result = calculate(200, 100, "sub")
console.log(result)