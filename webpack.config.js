/*
 * @Description: feature name
 * @Author: xujian
 * @Date: 2020-11-03 17:11:36
 */
const path = require('path');

module.exports = {
  // 执行入口文件
  entry: './main',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    // 先尝试 ts 后缀的 TypeScript 源码文件
    extensions: ['.jsx', '.js',]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test:/(\.jsx|\.js)$/,
        loader: 'babel-loader'
      }
    ]
  }
}