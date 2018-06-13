class Person {
  protected name : string;
  public age : number;
  constructor(name : string) {
    this.name = name;
  }
}

class Employee extends Person {
  static someAttr = 1;
  private department : string;

  constructor(name : string, department : string) {
    super(name);
    this.department = department;
  }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.name);