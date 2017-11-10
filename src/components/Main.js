require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');


imageDatas = (function genImageURL(imageDataArr){
  for(let i = 0,j = imageDataArr.length; i<j; i++){
    //采用一个中间变量，改变数组的值再赋值
    let singleImageData = imageDataArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
})(imageDatas);

var ImgFigure = React.createClass({
  render: function(){
     return (
       <figure className="img-figure">
         <img src = {this.props.data.imageURL} style = {{width:'200px',height:'130px'}}/>
         <figcaption>
            <h2 className="img-title">{this.props.data.title}</h2>
         </figcaption>
       </figure>
     );
  }
});

class AppComponent extends React.Component {
  Constant = {
    centerPos : {
      left : 0,top:0
    },
    hPosRange: {
      leftSecX: [0,0],
      rightSecX: [0,0],
      y: [0,0]
    },
    vPosRange: {
      x: [0,0],
      topY: [0,0],

    }
  };


  //组件加载以后，为每张图片计算其位置范围
  componentDidMount(){
    
  }

  render() {

    let controllerUnits = [],
        imgFigures = [];

    imageDatas.forEach(function(element) {
      imgFigures.push(<ImgFigure data = {element}/>);
    }, this);

    return (
     <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
     </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
