const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.send("这是注册测试")
})

module.exports = router