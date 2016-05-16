require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

let imagesData=require('../data/imagesData.json')
let images=(function genImageUrls(imagesDataArr){
  for (var i = 0; i < imagesDataArr.length; i++) {
    var singleImageData = imagesDataArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);
    imagesDataArr[i]=singleImageData;
  }
  return imagesDataArr;
})(imagesData);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
