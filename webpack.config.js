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
    main: './main.js',
    module: './module.js'
  },
  // context:设置上下文为指定目录
  /* 注意：context必须是一个绝对路径的字符串
  还可以通过在启动 Webpack 时带上参数 webpack --context 来设置 context*/
  context: path.resolve(__dirname, 'src'),
  output: {
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, 'dist'),
    // 设置文件名
    filename: '[name].js',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/')
    },
    mainFields: ['browser', 'main']
  },
  module: {
    noParse: /jquery|chartjs/,
    rules: [
      {
        // 命中 JavaScript 文件
        test: /\.js$/,
        // 用 babel-loader 转换 JavaScript 文件
        // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
        use: ['babel-loader?cacheDirectory'],
        // 只命中src目录里的js文件，加快 Webpack 搜索速度
        include: path.resolve(__dirname, 'src')
      },
      {
        // 命中 SCSS 文件
        test: /\.scss$/,
        // 使用一组 Loader 去处理 SCSS 文件。
        // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // 排除 node_modules 目录下的文件
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        // 对非文本文件采用 file-loader 加载
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        use: ['file-loader'],
      },
    ]
  },
  // 数组里每一项都是一个要使用的 Plugin 的实例，Plugin 需要的参数通过构造函数传入。
  plugins: [],
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]lodash/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}`;
          },
          chunks: 'all'
        },
        jquery: {
          test: /[\\/]node_modules[\\/]jquery/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}`;
          },
          chunks: 'all'
        }
      }
    }
  }
}