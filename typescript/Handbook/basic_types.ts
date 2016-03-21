/**
 * Created by bgd on 16/3/20.
 */
var isDone:boolean = false;
var height:number = 6;
var name:string = "bob";
name = "白国栋";
var arr1:number[] = [1, 2, 3, 4];
var arr2:Array<number> = [1, 2, 3, 4];
enum Color {Red, Green, Blue}
var c:Color = Color.Green;

enum Color1{Red=1,Green,Blue}
var c1:Color1=Color1.Green;
var colorName:String = Color[2];
console.log(colorName);

var arr3:any[]=[1,true,"aaa"];
arr3[1]="我还是字符串"

function warnUser():void{
    console.log("aaa");
}