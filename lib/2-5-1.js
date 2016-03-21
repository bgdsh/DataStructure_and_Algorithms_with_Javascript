/**
* forEach
*/
function square(num){
	console.log(num,num*num);
}
var nums=[1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);
/**
*  every
*/
function isEven(num) {
	return num % 2 == 0;
}
var nums=[2,4,6,9,10];
var even=nums.every(isEven);
if(even){
	console.log("都是偶数！");
}else{
	console.log("存在奇数");
}
/**
* some
*/
var someEven=nums.some(isEven);
if(someEven){
	console.log("存在奇数");
}else{
	console.log("不存在奇数");
}
/**
* reduce
*/
//1、数字求和
function add(runningTotal,currentValue){
	return runningTotal+currentValue;
}
var nums=[1,2,3,4,5,6,7,8,9,10];
var sum=nums.reduce(add);
console.log("由reduce方法求得的sum："+sum);
//2、连接字符串
function concat(accumulatedString,item) {
	return accumulatedString+item;
}
var words=["我","是","好","人"];
var sentence=words.reduce(concat);
console.log(sentence);

/**
* reduce right
*/
var sentenceRight=words.reduceRight(concat);
console.log("反方向来一次："+sentenceRight);




