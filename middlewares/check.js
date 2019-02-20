module.exports = {
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            res.send('未登录')
            return res.redirect('/loginin')
        }
        next()
    },
    checkNotLogin: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            res.send('已登录')
            return res.redirect('back') //返回之前的页面
        }
        next()
    }
}
