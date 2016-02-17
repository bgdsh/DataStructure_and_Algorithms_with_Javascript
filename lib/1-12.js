function Checking(amount){
	this.balance=amount;
	this.deposit=deposit;
	this.withdraw=withdraw;
	this.toString=toString;
}
function deposit(amount){
	this.balance+=amount;
}
function withdraw(amount){
	if(amount<=this.balance){
		this.balance-=amount;
	}
	if(amount>this.balance){
		console.log("钱不够了");
	}
}
function toString(){
	return "余额："+this.balance;
}
var amount=new Checking(500);
amount.deposit(1000);
console.log(amount.toString());
amount.withdraw(750);
console.log(amount.toString());
amount.withdraw(800);
console.log(amount.toString());
