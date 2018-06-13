/**
 * Created by bgd on 16/3/25.
 */
function identify<T>(arg:T):T {
    return arg;
}
let output:string = identify<string>("myString");
console.log(output);

function genArr1<T>(arg:T[]):T[] {
    return arg;
}
function genArr2<T>(arg:Array<T>):Array<T> {
    return arg;
}