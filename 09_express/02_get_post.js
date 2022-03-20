const express = require('express')

// 创建web服务器
const app = express();

// 启动web服务器
app.listen(8080, ()=>{
    console.log('express server running at http://127.0.0.1:8080');
})


// 监听get请求
app.get('/user', (req, res)=>{
    // 调用 express 提供的 res.send() 方法，向客户端相应一个 JSON 对象
    res.send({
        name: 'zs',
        ageL: 12
    })
})

// 监听post请求
app.post('/user', (req, res)=>{
    res.send('请求成功')
})

// 获取query参数
app.get('/', (req, res)=>{
    console.log(req.query);
    res.send(req.query)
})

// 获取url中的动态参数 params
app.get('/users/:id/:name', (req, res)=>{
    console.log(req.params);
    res.send(req.params)
})