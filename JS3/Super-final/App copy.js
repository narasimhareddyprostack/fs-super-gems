class Component {
  render() {
    console.log("UI Execution!");
  }
}

class App extends Component {
  constructor(a, b, c) {
    super();
    this.id = a;
    this.name = b;
    this.city = c;
  }
}
let a = new App(101, "Rahul Gandhi", "New Delhi");
console.log(a);
