'use strict'

const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.js')

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    openPage: 'html/index.html'
  }
})
