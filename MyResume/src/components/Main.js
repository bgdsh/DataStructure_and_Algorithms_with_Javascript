//require('normalize.css/normalize.css');
require('styles/App.customized.css');
import React from 'react';
import {Carousel } from 'antd';
import 'antd/dist/antd.css';
import Profile from './Profile'
import Experience from './Experience'
import Opinion from './Opinion'
import Job from './Job'
class AppComponent extends React.Component {
  render() {
    return (
      <Carousel>
        <div><Profile></Profile></div>
        <div><Experience></Experience></div>
        <div><Opinion></Opinion></div>
        <div><Job></Job></div>
      </Carousel>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
