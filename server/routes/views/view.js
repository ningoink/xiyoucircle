'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'index.html'))
});

router.get('/about', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../build/html', 'about.html'))
});

module.exports = router;