const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// extract-text-webpack-plugin 会将所有的入口 css 移动到分开的 css 文件，不再内联到 js 中
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build') ;// 发布文件所存放的目录

let entries = {};// 入口文件集合
let HTMLPlugins = []; // HTML 插件集合

// 获取所有 html 入口页面
const htmls = fs.readdirSync(ROOT_PATH + '/src/html').filter((f) => {
  return f.endsWith('.html')
}).map((f) => {
  return f.slice(0, -5)
});

// 遍历每一个 HTML 文件
htmls.forEach((pageName) => {
  // 这个 HtmlWebpackPlugin 使用自己的 html 模板
  const htmlPlugin = new HtmlWebpackPlugin({
    title: pageName, // 用来生成页面的 title 元素
    template: path.resolve(__dirname, `src/html/${pageName}.html`), // HTML 模板来源
    filename: `html/${pageName}.html`,
    inject: 'body', // 注入所有的资源到特定的 template 中
    // showErrors 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
    showErrors: 'false',
    minify: { // 压缩 HTML 文件
      removeComments: false, // 移除 HTML 中的注释
      collapseWhitespace: false // 删除空白符与换行符
    },
    chunks: [pageName, 'common']
  });
  HTMLPlugins.push(htmlPlugin);
  entries[pageName] = path.resolve(__dirname, `src/script/entryjs/${pageName}.js`)
});

module.exports = {
  // 页面入口文件配置
  entry: entries,
  // 入口文件输出配置
  output: {
    path: BUILD_PATH, // 编译到 build 目录
    filename: 'script/[name].bundle.js'// 编译后的文件名字
  },
  // 插件项
  plugins: [
    new CleanWebpackPlugin(['build']), // 每次打包时清除旧的打包文件
    new ExtractTextPlugin('style/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    ...HTMLPlugins
  ],
  // 加载器配置,告知 webpack 每一种文件都需要使用什么加载器来处理
  module: {
    // 以下 "-loader" 可以省略不写的，多个 loader 之间用 “!” 连接起来。
    loaders: [
      {
        // .css 文件使用 style-loader 和 css-loader 来处理
        test: /\.css$/,
        exclude: /^node_modules$/,
        include: path.resolve(__dirname, `src/style/`),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [{
            loader: 'css-loader'
          }]
        })
      },
      {
        // .js 文件使用 babel 来编译处理
        test: /\.js$/,
        exclude: /^node_modules$/,
        include: path.resolve(__dirname, `src/script/`),
        use: {
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-2'] }
        }
      },
      {
        // 图片文件使用 url-loader 来处理，小于8kb的直接转为base64
        test: /\.(png|jpg)$/,
        exclude: /^node_modules$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'image/'
          }
        }
      }
    ]
  }
};
