'use strict'

const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'index.html'))
})

router.get('/lab', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'lab.html'))
})

router.get('/info', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'info.html'))
})

router.get('/roadmap', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'roadmap.html'))
})

router.get('/leader', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'leader.html'))
})

router.get('/about', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'about.html'))
})

module.exports = router
