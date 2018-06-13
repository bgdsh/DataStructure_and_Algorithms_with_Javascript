var co=require('co');
co(function* (){
	var promise=new Promise(function(resolve,reject){
		resolve("abc");
	});
	return yield promise;
}).then(function(val){
	console.log(val);
});

var fn=co.wrap(function* (val){
	if(val>10){
		return yield Promise.resolve(val);
	}else{
		return yield Promise.reject(val);
	}
});
fn(10).then(function(val){
	console.log(val+'合法');
},function(val){
	console.log(val+'不合法');
})

co(function* (){
	var res=yield {
		1:Promise.resolve(1),
		2:Promise.resolve(2)
	};
	console.log(res);
})