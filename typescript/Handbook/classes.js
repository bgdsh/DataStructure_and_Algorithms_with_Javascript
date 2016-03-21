var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by bgd on 16/3/21.
 */
/** 不用等ES6支持 **/
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter("world");
console.log(greeter.greet());
/** 继承 **/
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + " m.");
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("Galloping....");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
var Animal1 = (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    return Animal1;
})();
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, 'Rhino');
    }
    return Rhino;
})(Animal1);
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
})();
var animal = new Animal1("Goat");
var rhino = new Rhino();
animal = rhino;
//animal=new Employee("Bob"); //employee 和 rhino源于不同的类,虽然结构一样,也不能赋值.
var Animal2 = (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + " m.");
    };
    return Animal2;
})();
var passcode = "secret passcode";
var Employee1 = (function () {
    function Employee1() {
    }
    Object.defineProperty(Employee1.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error:");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee1;
})();
var employee = new Employee1();
employee.fullName = "白不菜";
if (employee.fullName) {
    console.log(employee.fullName);
}
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.caculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
})();
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.caculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.caculateDistanceFromOrigin({ x: 10, y: 10 }));
var gridMaker = Grid;
gridMaker.origin = { x: 5, y: 5 };
var grid3 = new gridMaker(5);
console.log(grid3.caculateDistanceFromOrigin({ x: 10, y: 10 }));
//# sourceMappingURL=classes.js.map