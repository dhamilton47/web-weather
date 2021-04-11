const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index1.js',
  devServer: {
  //  contentBase: './public',
    contentBase: path.join(__dirname, 'public'),
    port: 3001,
  //  hotOnly: true
  },
  devtool: 'inline-source-map',
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
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
    publicPath: '/'
    // publicPath: '/dist/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Dan's Weather Test Page",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: { extensions: ['*', '.js', '.jsx'] }, //, '.ts', '.tsx'] },
//  plugins: [new webpack.HotModuleReplacementPlugin()]
};
