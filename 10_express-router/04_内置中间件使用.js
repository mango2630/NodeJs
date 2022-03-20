const express = require('express')
const app = express()

// 定义一个简单的中间件函数
const mv = function(req, res, next){
    next();
}

// 注册为全局生效的中间件
app.use(mv) 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) { 
    console.log(req.body);
    res.send('home page')
})

app.post('/user', function (req, res) { 
    console.log(req.body);
    res.send('user page')
})


app.listen(8080, ()=>{
    console.log('start succdeed');
})

