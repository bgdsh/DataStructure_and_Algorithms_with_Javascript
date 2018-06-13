var path=require('path')
var webpack=require('webpack')
module.exports={
  entry:{
    app:path.join(__dirname,'src'),
    vendors:['react','reflux','react-mixin']
  },
  output:{
    path:path.join(__dirname,'dist'),
    filename:'[name].js'
  },
  module:{
    loaders:[
      {
        test:/\.js?$/,
        exclude:/node_modules/,
        loaders:'babel',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js')
  ]
};
