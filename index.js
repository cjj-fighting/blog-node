const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('hello, express')
})

app.get('/a', function(req, res) {
    let data = {
        success: true,
        data: null,
        code: 200,
        msg: 'hello, 这是我用node获取的数据哦^v^'
    }
    res.send(data)
})

app.listen(3000, function(req, res) {
    console.log('The sever is running at port 3000')
})
