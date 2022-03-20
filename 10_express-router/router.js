const express = require('express')
// 创建路由对象
const router = express.Router()

// 挂在具体路由
router.get('/', (req, res)=>{
    res.send('get')
})

router.post('/', (req, res)=>{
    res.send('post')
})

// 导出
module.exports = router