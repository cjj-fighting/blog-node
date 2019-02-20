const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

router.get('/', function(req, res, next) {
    res.send('这是文章列表页')
})

router.post('/s', function(req, res, next) {
    res.send('这是文章列表页')
})

module.exports = router