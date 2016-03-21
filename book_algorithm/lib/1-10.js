/**
* 1-10 按值传参数和按引用传参数
* 值类型传递值
* 引用类型传递引用
*/
function curve(arr,amount){
	for(var i = 0;i < arr.length; i++){
		arr[i] += amount;
	}
}
var grades=[77,73,74,81,90];
curve(grades,22);
console.log(grades);

function add1(num){
	num++;
}
var iNum=1;
add1(iNum);
console.log(iNum);
add1(iNum);
console.log(iNum);