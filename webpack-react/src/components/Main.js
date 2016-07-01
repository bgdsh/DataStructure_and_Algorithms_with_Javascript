require('normalize.css/normalize.css');
require('styles/App.css');
import {createStore} from 'redux'
import React from 'react';
function counter(state=0,action) {
  switch (action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}
let store=createStore(counter);
store.subscribe(()=>
  console.log('当前state',store.getState())
);
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
