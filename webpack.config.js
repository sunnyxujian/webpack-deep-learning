/*
 * @Description: webpack配置文件
 * @Author: xujian
 * @Date: 2020-10-26 16:09:11
 */
const path = require('path');

module.exports = {
  // entry: JavaScript 执行入口文件
/* 没有配置output的filename时，Webpack 会为每个生成的 Chunk 取一个名称，Chunk 的名称和 Entry 的配置有关：
• 如果 entry 是一个 string 或 array，就只会生成一个 Chunk，这时 Chunk 的名称是 main；
• 如果 entry 是一个 object，就可能会出现多个 Chunk，这时 Chunk 的名称是 object 键值对里键的名称。*/
// * entery 可以接受的数据类型：string，array<string>，object，function，promise
  entry: {
    main:'./main.js',
    module:'./module.js'
  },
  // context:设置上下文为指定目录
  /* 注意：context必须是一个绝对路径的字符串
  还可以通过在启动 Webpack 时带上参数 webpack --context 来设置 context*/
  context: path.resolve(__dirname, 'src'),
  output: {
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, 'dist_[hash:8]'),
    // 设置文件名
    filename:'[name]_[chunkhash:8].js',
    // 配置cdn公共路径
    publicPath: 'https://cdn.example.com/assets/',
    // 用于配置这个异步插入的script标签的 crossorigin 值
    crossOriginLoading:'use-credentials',
    // 编写的库将通过 var 被赋值给通过 library 指定名称的变量
    library: 'LibraryName',
    // 配置以何种方式导出库
    libraryTarget: 'var' | 'commonjs' | 'commonjs2' | 'this' | 'window' | 'global',
    // output.libraryExport 配置要导出的模块中哪些子模块需要被导出。 它只有在 output.libraryTarget 被设置成 commonjs 或者 commonjs2 时使用才有意义。
    libraryExport:'show'
  }
};