const express = require('express')
const app = express()

// 定义一个简单的中间件函数
const mv = function(req, res, next){
    const time = Date.now();
    req.startTime = time;
    next();
}

// 注册为全局生效的中间件
app.use(mv) 

app.get('/', function (req, res) {  
    res.send('home page' + req.startTime)
    // res.send('home page')
})
app.post('/user', function (req, res) {  
    res.send('user page' + req.startTime)
})


app.listen(8080, ()=>{
    console.log('start succdeed');
})

