module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/main')
    })
    app.use('/register', require('./register'))

}
