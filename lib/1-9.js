/**
* 1-9 有返回值的函数
*/
function factorial(number){
	var product=1;
	for(var i=number;i>=1;--i){
		product *= i;
	}
	return product;
}
console.log(factorial(4));//24
console.log(factorial(5));//120
console.log(factorial(10));//3628800
console.log(factorial(120));//6.689502913449135e+198