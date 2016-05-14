import Reflux from 'reflux'
import actions from '../actions/actions'
 Array.prototype.remove=function(dx){
   if(isNaN(dx)||dx>this.length){return false;}
   for(var i=0,n=0;i<this.length;i++){
     if(this[i]!=this[dx]){
       this[n++]=this[i];
     }
   }
 }
 export default Reflux.createStore({
   items:[],
   listenables:[actions],
   onGetAll(){
     this.trigger({list:this.items});
   },
   onAdd(item){
     this.items.push({name:item});
     this.trigger({list:this.items});
   },
   onRemove(i){
     this.items.remove(i);
     this.trigger({list:this.items});
   }
 });
