/**
 * Created by bgd on 16/3/20.
 */
var isDone = false;
var height = 6;
var name = "bob";
name = "白国栋";
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
var colorName = Color[2];
console.log(colorName);
var arr3 = [1, true, "aaa"];
arr3[1] = "我还是字符串";
function warnUser() {
    console.log("aaa");
}
//# sourceMappingURL=basic_types.js.map