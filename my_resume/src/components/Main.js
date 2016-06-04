//require('normalize.css/normalize.css');
require('styles/App.customized.css');
import React from 'react';
import {Carousel } from 'antd';
import 'antd/dist/antd.css';
import Profile from './Profile'

class AppComponent extends React.Component {
  render() {
    return (
      <Carousel>
        <div><Profile></Profile></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
