import 'core-js/fn/object/assign';
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
const appEl=document.getElementById('app');
const store=createStore(counter);
// Render the main component into the dom
function realRender() {
  render(<Counter
    value={store.getState()}
    onIncrement={()=>store.dispatch({type:'INCREMENT'})}
    onDecrement={()=>store.dispatch({type:'DECREMENT'})}
     />, appEl);
}
realRender();
store.subscribe(realRender);
