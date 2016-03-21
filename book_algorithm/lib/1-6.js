/**
* 1-6 while循环
*/
var number=1;
var sum=0;
while(number<11){
	sum+=number;
	++number;
}
console.log(sum);//55
/**
* 1-7 for循环
*/
number=1;
sum=0;
for(var number=1;number<11;number++){
	sum+=number;
}
console.log(sum);//55
/**
* 1-8 for循环访问数组
*/
var numbers=[3,7,12,22,100];
sum=0;
for(var i=0;i<numbers.length;++i){
	sum+=numbers[i];
}
console.log(sum);//144