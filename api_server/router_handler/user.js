// 导入数据库操作模块
const db = require('../db/index')

// 导入bcrypt 加密
const bcrypt = require('bcryptjs')

// 导入 jsonwebtoken
const jwt = require('jsonwebtoken')

// 导入密钥
const config = require('../config')

exports.regUser = (req, res)=>{
    
    // 接受表单数据
    const userInfo = req.body;
    console.log(userInfo);
    // 判断数据合法性
    if(!userInfo.username || !userInfo.password){
        // return res.send({
        //     status: 1,
        //     meg: '用户名或密码不合法'
        // })
        res.cc('用户名或密码不合法')
    }

    // 定义sql语句，查询用户名是否被占用
    const sqlStr = 'select * from ev_users where username=?'
    db.query(sqlStr, userInfo.username, (err, results)=>{
        if(err){
            // return res.send({
            //     status: 1,
            //     msg: err.message
            // })
            return res.cc(err)
        }
        // 判断用户名是否被占用
        if(results.length > 0){
            // return res.send({
            //     status: 1,
            //     msg: '用户名被占用，请更换其他用户名'
            // })
            return res.cc('用户名被占用，请更换其他用户名')
        }

        // 用户名可以使用：
        // 1. 加密
        userInfo.password = bcrypt.hashSync(userInfo.password, 10);
        // 2. 写入数据库
        const sqlStrInsert = 'insert into ev_users set ?'
        db.query(sqlStrInsert, {username:userInfo.username, password:userInfo.password}, function (err, results) {
            if(err){
                // return res.send({
                //     status: 1,
                //     msg: err.message
                // })
                return res.cc(err)
            }
            if(results.affectedRows !== 1){
                // return res.send({
                //     status: 1,
                //     msg: '注册用户失败，稍后再试'
                // })
                return res.cc("注册用户失败，稍后再试")
            }

            // 注册用户成功
            // res.send({
            //     status: 0,
            //     msg: '注册用户成功'
            // })
            res.cc('注册用户成功', 0)
        })
    })

    // res.send('register ok')
}

exports.login = (req, res)=>{
    const userInfo = req.body;
    if(!userInfo.username || !userInfo.password){
        res.cc('用户名或密码不合')
    }
    const sqlLogin = 'select * from ev_users where username=?'
    db.query(sqlLogin, userInfo.username, (err, results)=>{
        if(err) return res.cc(err);
        if(results.length !== 1) return res.cc('登陆失败');

        // 判断密码是否正确
        const compareResult = bcrypt.compareSync(userInfo.password, results[0].password);
        if(!compareResult) return res.cc('登陆失败！')

        // 生成token字符串
        // 剔除敏感信息
        const user = {...results[0], password: '', user_pic: ''}
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '10h'
        })
        // console.log(token);
        res.send({
            status: 0,
            message: '登陆成功！',
            token: 'Bearer ' + tokenStr
        })
    })
    // res.send('login ok！！')
}