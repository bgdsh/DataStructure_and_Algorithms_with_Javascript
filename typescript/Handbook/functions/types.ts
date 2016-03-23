/**
 * Created by bgd on 16/3/24.
 */
function add(x:number, y:number):number {
    return x + y;
}
var myAdd:(x:number, y:number)=>number = function (x:number, y:number):number {
    return x + y;
};
//可选参数
function buildName(firstName:string, lastName?:string):string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}