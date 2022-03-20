const express = require('express')
const app = express()

// 导入路由模块
const router = require('./router')
// 注册路由模块
app.use('/api', router)


app.listen(8080, ()=>{
    console.log('start succdeed');
})

