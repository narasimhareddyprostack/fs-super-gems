let state = { counter: 1, product: { id: 11110, name: "Iphone 5s" } }

console.log(state.counter)
console.log(state.product.name)
let { counter, product } = state;  // Object Destructuring
console.log(counter)
console.log(product.name)