var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build'); // 发布文件所存放的目录

module.exports = {
  // 页面入口文件配置
  entry: {
    index : './index.js'
  },
  // 入口文件输出配置
  output: {
    path: BUILD_PATH, // 编译到 build 目录
    filename: '[name].bundle.js'// 编译后的文件名字
  },
  // 插件项
  plugins: [
    new CleanWebpackPlugin(['build']), // 每次打包时清除旧的打包文件
    // 这个 HtmlWebpackPlugin 使用自己的 index.html 模板
    new HtmlWebpackPlugin({ // 自动生成打包后的 index.html 入口模板
      title: 'CS Web App', // 用来生成页面的 title 元素
      template: 'public/index.html', // 使用自己写的 index.html 模板, 通过 inject 注入相关链接
      filename: 'index.html', // 输出的 HTML 文件名
      inject: 'body', // 注入所有的资源到特定的 template 中,这里所有的 javascript 资源将被放置到 body 元素的底部
      showErrors: 'false', // 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
      minify:{ // 压缩HTML文件
        removeComments: false, // 移除HTML中的注释
        collapseWhitespace: false // 删除空白符与换行符
      }
    }),
  ],
  // 加载器配置,告知 webpack 每一种文件都需要使用什么加载器来处理
  module: {
    // 以下 "-loader" 可以省略不写的，多个 loader 之间用 “!” 连接起来。
    loaders: [{
      // .css 文件使用 style-loader 和 css-loader 来处理
      test: /\.css$/,
      exclude: /^node_modules$/,
      loader: 'style-loader!css-loader',
      include: [SRC_PATH]
    }, {
      // .js 文件使用 babel 来编译处理
      test: /\.js$/,
      exclude: /^node_modules$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
      include: [SRC_PATH]
    }, {
      // .scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
      test: /\.scss$/,
      exclude: /^node_modules$/,
      loader: 'style!css!sass?sourceMap',
      include: [SRC_PATH]
    }, {
      // 图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      test: /\.(png|jpg)$/,
      exclude: /^node_modules$/,
      loader: 'url-loader?limit=8192',
      include: [SRC_PATH]
    }
    ]
  }
};