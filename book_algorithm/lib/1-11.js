/**
* 1-11 滥用全局变量的恶果
*/
function showScope(){
	scope="local";
	return scope;
}
scope="global";
console.log(scope);
console.log(showScope());
console.log(scope);