const express = require('express')

// 创建路由对象
const router = express.Router()

const routerHandler = require('../router_handler/userinfo')


// 获取用户的基本信息
router.get('/getuserinfo', routerHandler.getuserinfo)


module.exports = router