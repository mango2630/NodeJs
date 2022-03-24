const express = require('express')

// 创建路由对象
const router = express.Router()

// 导入路由处理函数模块
const userHandler = require('../router_handler/user')

// 注册新用户
router.post('/register', userHandler.regUser)

// 登录
router.post('/login', userHandler.login)

module.exports = router