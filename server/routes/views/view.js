'use strict'

const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'index.html'))
})

router.get('/index.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'index.html'))
})

router.get('/lab.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'lab.html'))
})

router.get('/info.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'info.html'))
})

router.get('/roadmap.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'roadmap.html'))
})

router.get('/leader.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'leader.html'))
})

router.get('/about.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'about.html'))
})

module.exports = router
