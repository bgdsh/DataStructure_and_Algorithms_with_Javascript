/**
 * Created by bgd on 16/3/20.
 */
/** 最简写形式 **/
function printLabel(labelledObject:{label:string}):void {
    console.log(labelledObject.label)
}
var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
/** interface形式 **/
interface LabelledValue {
    label:string
}
function printLabel1(labelledObj:LabelledValue) {
    console.log(labelledObj.label);
}
printLabel1(myObj);
/** 可空属性 **/
interface SquareConfig {
    color?:string,
    width?:number
}
function createSquare(config:SquareConfig):{color:string;area:number} {
    var newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({color: "black"});

interface SearchFunc {
    (source:string, substring:string):boolean
}

var mySearch:SearchFunc =
    //参数名称并不一定完全符合
    function (source:string, substring:string) {
        var result = source.search(substring);
        if (result == -1) {
            return false;
        } else {
            return true;
        }
    };
interface StringArray {
    [index:number]:string;
    length:number
}
interface ClockInterface {
    currentTime:Date;
    setTime(d:Date);
}
class Clock implements ClockInterface {
    setTime(d:Date) {
        this.currentTime = d;
    }

    currentTime:Date;

    constructor(h:number, m:number) {

    }
}
interface ClockStatic {
    new (hour:number, minute:number);
}
class Clock1 {
    currentTime:Date;

    constructor(h:number, m:number) {

    }
}
//如果new\constructor不一致,就会报错
//This is because when a class implements an interface,
// only the instance side of the class is checked.
var cs:ClockStatic = Clock1;
var newClock = new cs(7, 30);

/** 接口拓展 **/
interface Shape {
    color:string
}
interface Square extends Shape {
    sideLength:number
}
var square = <Square>{};
square.color = "blue";
square.sideLength = 10;

interface PenStroke {
    penWidth:number;
}
interface Square1 extends Shape,PenStroke {
    sideLength:number;
}

/** Hybrid Types **/
interface Counter {
    (start:number):string;
    interval:number;
    reset():void;
}
var c:Counter;
c(10);
c.reset();
c.interval = 5.0;













