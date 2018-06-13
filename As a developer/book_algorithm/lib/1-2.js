/**
* 1-2 简单的if语句
*/
var mid=25;
var high=50;
var low=1;
var current=13;
var found=-1;
if(current<mid){
	mid=(current-low)/2
}
/**
* 1-2 if-else语句
*/
if(current<mid){
	mid=(current-low)/2;
}else{
	mid=(current+high)/2;
}
/**
* 1-3 if-else if 语句
*/
if(current<mid){
	mid=(current-low)/2;
}else if(current>mid){
	mid=(current+high)/2;
}else{
	found=current;
}