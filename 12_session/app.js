const express = require('express')
const app = express();

// 1. 导入session中间件
var session = require('express-session')

// 2. 配置Session中间件
app.use(session({
    secret: 'keyword cat',
    resave: false,
    saveUninitialized: true
}))

// 托管静态页面
app.use(express.static('./pages'))
// 解析 post 提交过来的表单数据
app.use(express.urlencoded({extended: false}))

// 登录API
app.post('/api/login', (req, res) => {
    // 判断用户提交的登录信息是否正确
    if(req.body.username !== 'admin' || req.body.password !== '000000'){
        return res.send({status: 1, msg: '登陆失败'});
    }

    // 将登陆成功后的用户信息，保存到session中
    req.session.user = req.body;
    req.session.islogin = true;

    rs.send({
        status: 0,
        msg: '登陆成功'
    })
})


// 获取用户姓名的接口
app.get('/api/username', (req, res)=>{
    if(!req.session.islogin){
        return res.send({status: 1, msg: 'fail'})
    }

    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    })
})

// 退出登录接口——清空session
app.post('/api/logout', (req, res)=>{
    req.session.destroy();
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})

app.listen(8080, (req, res)=>{
    console.log('start succeed');
})