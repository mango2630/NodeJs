const express = require('express')

const app = express()

const router = require('./apiRouter')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', router)

// jsonp
app.get('/api/getjsonp', (req, res)=>{
    // 1. 得到函数名称
    const funcName = req.query.callback
    // 2. 定义要发送到客户端的数据对象
    const data = {name: 'zs', age: 12}
    const scriptSrc = `${funcName}(${data})`;
    res.send(scriptSrc)
})

const cors = require('cors')
app.use(cors)

app.listen(8080, ()=>{
    console.log('start success');
})