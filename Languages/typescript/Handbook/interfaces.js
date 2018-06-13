/**
 * Created by bgd on 16/3/20.
 */
/** 最简写形式 **/
function printLabel(labelledObject) {
    console.log(labelledObject.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
printLabel1(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySearch = 
//参数名称并不一定完全符合
//参数名称并不一定完全符合
function (source, substring) {
    var result = source.search(substring);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
var Clock1 = (function () {
    function Clock1(h, m) {
    }
    return Clock1;
})();
//如果new\constructor不一致,就会报错
//This is because when a class implements an interface,
// only the instance side of the class is checked.
var cs = Clock1;
var newClock = new cs(7, 30);
var square = {};
square.color = "blue";
square.sideLength = 10;
var c;
c(10);
c.reset();
c.interval = 5.0;
//# sourceMappingURL=interfaces.js.map