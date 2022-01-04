class Component {
  constructor(country) {
    this.country = country;
  }
  render() {
    console.log("UI Execution!");
  }
}

class App extends Component {
  constructor(a, b, c, d) {
    super(d);
    this.id = a;
    this.name = b;
    this.city = c;
  }
  render() {
    console.log("In App - Render Method");
  }
}
let a = new App(101, "Rahul Gandhi", "New Delhi", "Sidney");
console.log(a);
a.render();
