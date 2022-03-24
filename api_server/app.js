const express = require('express')
const app = express()

// 跨域解决
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件
// 该中间件只能解析： application/x-www-form...
app.use(express.urlencoded({extended:false}))

// 一定要在路由之前配置解析 token 的中间件
const expressJWT = require('express-jwt')
const config = require('./config')
// app.use(expressJWT({
//     secret: config.jwtSecretKey,
//     algorithms: ['H3256']
// }).unless({path: [/^\/api/]}))
app.use(expressJWT({ 
    secret: config.jwtSecretKey,
    algorithms: ['HS256'] 
}).unless({ path: [/^\/api\//] }))

// 一定要在路由之前，封装 res.cc 函数 [中间件函数！]
app.use((req, res, next) => {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        }) 
    }
    next();
})

// 导入并使用用户路由模块
// http://127.0.0.1:3007/api  
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 导入userinfo模块
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)

// 定义错误级别中间件
app.use((err, req, res, next)=>{
    // console.log(res);
    // console.log(err.name);
    // console.log(req);
    // 验证失败导致的错去
    if(err.name === 'UnauthorizedError') return res.send('token验证失败！')

    res.cc('未知错误！')
})


// 启动服务器
app.listen(3007, (req, res)=>{
    console.log('start suceess');
})