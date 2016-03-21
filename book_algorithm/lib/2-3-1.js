var readline=require("readline");
var r1=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
var names=["aa","bb","ab"]
r1.question("输入你要查找的名字：",function(answer){
	var position=names.indexOf(answer);
	if(position>=0){
		console.log(position);
	}else{
		console.log("没找到");
	}
});