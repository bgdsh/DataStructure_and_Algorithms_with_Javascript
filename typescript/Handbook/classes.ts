/**
 * Created by bgd on 16/3/21.
 */
/** 不用等ES6支持 **/
class Greeter {
    greeting:string;

    constructor(message:string) {
        this.greeting = message;
    }

    greet() {
        return "Hello," + this.greeting;
    }
}
var greeter = new Greeter("world");
console.log(greeter.greet());
/** 继承 **/
class Animal {
    private name:string;

    constructor(theName:string) {
        this.name = theName;
    }

    move(meters:number = 0) {
        console.log(this.name + " moved " + meters + " m.");
    }
}
class Snake extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(meters = 5) {
        console.log("Slithering");
        super.move(meters);
    }

}
class Horse extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(meters = 45) {
        console.log("Galloping....");
        super.move(meters);
    }
}
var sam = new Snake("Sammy the Python");
var tom:Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);

class Animal1 {
    private name:string;

    constructor(theName:string) {
        this.name = theName;
    }
}
class Rhino extends Animal1 {
    constructor() {
        super('Rhino');
    }
}
class Employee {
    private name:string;

    constructor(theName:string) {
        this.name = theName;
    }
}
var animal = new Animal1("Goat");
var rhino = new Rhino();
animal = rhino;
//animal=new Employee("Bob"); //employee 和 rhino源于不同的类,虽然结构一样,也不能赋值.

class Animal2 {
    constructor(private name:string) {//参数和属性写在一起

    }

    move(meters:number) {
        console.log(this.name + " moved " + meters + " m.");
    }
}
var passcode = "secret passcode";
class Employee1 {
    //fullName:string;
    private _fullName:string;
    get fullName():string {
        return this._fullName;
    }

    set fullName(newName:string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("Error:")
        }
    }
}
var employee = new Employee1();
employee.fullName = "白不菜";
if (employee.fullName) {
    console.log(employee.fullName);
}

class Grid {
    static origin = {x: 0, y: 0};

    caculateDistanceFromOrigin(point:{x:number,y:number}) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale:number) {

    }
}

var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.caculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.caculateDistanceFromOrigin({x: 10, y: 10}));
var gridMaker:typeof Grid=Grid;
gridMaker.origin={x:5,y:5};
var grid3=new gridMaker(5);
console.log(grid3.caculateDistanceFromOrigin({x: 10, y: 10}));











