(function(root){
	function guidGenerator(){

	}
	function Subscriber(fn,options,context) {	
		if(!this instanceof Subscriber){
			return new Subscriber(fn,context,options);
		}else{
			this.id=guidGenerator();
			this.fn=fn;
			this.options=options;
			this.context=context;
			this.topic=null;
		}
	}
	function Topic(namespace) {
		if(!this instanceof Topic){
			return new Topic(namespace);
		}else{
			this.namespace=namespace || "";
			this._callbacks=[];
			this._topics=[];
			this.stoped=false;
		}
	}
	Topic.prototype={
		AddSubscriber:function(fn,options,context){
			var callback=new Subscriber(fn,options,context);
			this._callbacks.push(callback);
			callback.topic=this;
			return callback;
		},
		StopPropagation:function() {
			this.stoped=true;
		}
	};
})();

