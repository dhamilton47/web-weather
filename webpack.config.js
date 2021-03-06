const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    // contentBase: './dist',
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/public/',
    hotOnly: true
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
    //publicPath: '/'
    //publicPath: '/dist/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Dan's Weather Test Page",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: { extensions: ['*', '.js', '.jsx'] }, //, '.ts', '.tsx'] },
};
