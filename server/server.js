'use strict'

const express = require('express')
const path = require('path')
const app = express()
const views = require('./routes/views/view.js')

app.use(express.static(path.join(__dirname, '../build')))
app.use('/', views)

app.listen(3000, function () {
    console.log('hello, eupt!')
})