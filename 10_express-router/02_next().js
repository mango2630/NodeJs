const express = require('express')
const app = express()

// 定义一个简单的中间件函数
const mv = function(req, res, next){
    console.log('这是在最简单的中间件函数');
    next();
}

// 注册为全局生效的中间件
app.use(mv) 

app.get('/', function (req, res) {  
    res.send('home page')
})
app.post('/', function (req, res) {  
    res.send('user page')
})


app.listen(8080, ()=>{
    console.log('start succdeed');
})

