const express = require('express')
const app = express()

// 监听多个
app.use(express.static('./public'))
app.use('/file', express.static('./files'))

// 启动服务器
app.listen(8080, ()=>{
    console.log('start success');
})