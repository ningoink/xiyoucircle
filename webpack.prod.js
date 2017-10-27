const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(commonConfig, {
  plugins: [
    new UglifyJSPlugin()
  ]
})
