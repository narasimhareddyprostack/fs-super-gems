class Parent {
  constructor() {
    console.log("Parent Class Constructor");
  }
}
class Child extends Parent {
  constructor() {
    super();
    console.log("child class - Constructor Exe - auto");
  }
}

new Child();
