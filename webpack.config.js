/*
 * @Description: webpack配置文件
 * @Author: xujian
 * @Date: 2020-10-26 16:09:11
 */
const path = require('path');

module.exports = {
  // JavaScript 执行入口文件
  entry: './src/main.js',
  // 设置上下文为src
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  }
};