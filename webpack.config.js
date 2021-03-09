const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/'
  },
  module: {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }/*,
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      }*/
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] }, //, '.ts', '.tsx'] },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
