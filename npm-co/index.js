var co=require('co');
co(function* (){
	return yield Promise.resolve(1);
}).then(function(val){
	console.log(val);
},function(err){

});
