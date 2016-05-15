require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Hello</div>
        <div className="notice">请编辑 <code>src/components/Main.js</code> 来开始！</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
