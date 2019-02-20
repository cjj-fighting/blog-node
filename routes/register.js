const express = require('express')
const router = express.Router()
// const md5 = require('md5')

const bodyParser = require('body-parser')
const u = bodyParser.urlencoded({ extended: true })

const UserModel = require('../models/users')

router.get('/test/:name', function(req, res) {
    res.send('这是注册测试')
})

router.post('/', u, function(req, res, next) {
    console.log(req.body)
    // res.end('测试')

    UserModel.create(req.body)
        .then(function(result) {
            // 跳转到首页
            res.end('注册成功')
            // res.end({
            //     success: true,
            //     code: 200,
            //     msg: "注册成功"
            // })
        })
        .catch(function(e) {
            res.end('err')
            next(e)
        })
})

module.exports = router
