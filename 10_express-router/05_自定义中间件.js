const express = require('express')
const app = express()
const qs = require('querystring')

// 解析表单数据的中间件【自定义事件】
app.use((req, res, next) => {
    // 定义中间件具体的业务逻辑
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end', ()=>{
        console.log(str);
        const body = qs.parse(str);
        req.body = body
    })
})

app.post('/', function (req, res) { 
    console.log(req.body);
    res.send('home page')
})


app.listen(8080, ()=>{
    console.log('start succdeed');
})

