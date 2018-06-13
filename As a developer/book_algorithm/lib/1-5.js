/**
* 1-5 switch语句
* 
*/
var readline=require("readline");
var r1=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
r1.question("输入一个月份序号：",function(answer){
	var monthNum = answer;
	var monthName;
	switch(monthNum){
		case "1":
			monthName = "一月";
			break;
		case "2":
			monthName = "二月";
			break;
		case "3":
			monthName = "三月";
			break;
		case "4":
			monthName = "四月";
			break;
		case "5":
			monthName = "五月";
			break;
		case "6":
			monthName = "六月";
			break;
		case "7":
			monthName = "七月";
			break;
		case "8":
			monthName = "八月";
			break;
		case "9":
			monthName = "九月";
			break;
		case "10":
			monthName = "十月";
			break;
		case "11":
			monthName = "十一月";
			break;
		case "12":
			monthName = "十二月";
			break;
		default:
			monthName="非法输入";
	}
	console.log(monthName);

});
