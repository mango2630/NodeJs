const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
const ejwt = require('express-jwt')

const cors = require('cors')
app.use(cors)


// 解析 post 表单数据的中间件
const bodyParser = require('body-parser')


