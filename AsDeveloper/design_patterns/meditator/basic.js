var mediator=(function() {
	//存储可以被广播或者监听的topic
	var topics={};
	var subscribe=function(topic,fn){
		if(!topics[topic]){
			topics[topic]=[];
		}
		topics[topic].push({context:this,callback:fn});
		return this;
	}
	var publish=function(topic){
		var args;
		if(topics[topic]){
			return false;
		}
		args=Array.prototype.slice.call(arguments,1);//这句需要解释
		for (var i = 0; i < topics[topic].length; i++) {
			var subscription=topics[topic][i];
			subscription.callback.apply(subscription.context,args);//这句也需要解释
		}
		return this;
	}

	return {
		Publish:publish,
		Subscribe:subscribe,
		installTo:function(obj){
			obj.subscribe=subscribe;
			obj.publish=publish;
		}
	}
})();