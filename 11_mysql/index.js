const mysql = require('mysql')

// 建立于mysql 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'heima_nodejs'
})

// 测试 mysql 模块能否正常工作
db.query('SELECT 1', (err, res) => {
    if(err) return console.log(err.message);
    console.log(res);
})

// 查询users表中所有数据
const sqlStr = 'select * from users'
db.query(sqlStr, (err, res)=>{
    if(err) return console.log(err.message);
    console.log(res);
})

// 插入数据
// const user = {
//     username: 'denny',
//     password: 'pccse'
// }
// const sqlStr1 = 'INSERT INTO users (username, password) VALUES (?, ?)'
// db.query(sqlStr1, [user.username, user.password], (err, res)=>{
//     if(err) return console.log(err.message);
//     if(res.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })

// 插入数据的便捷方式
// const user1 = {
//     username: 'denny',
//     password: '9999'
// }
// const sqlStr2 = 'INSERT INTO users SET ?'
// db.query(sqlStr2, user1, (err, res)=>{
//     if(err) return console.log(err.message);
//     if(res.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })

// 更新数据
// const user2 = {
//     username: 'jenny',
//     password: '9999'
// }
// const sqlStr3 = 'UPDATE users SET username=? where password=?'
// db.query(sqlStr3, [user2.username, user2.password], (err, res)=>{
//     if(err) return console.log(err.message);
//     if(res.affectedRows === 2){
//         console.log('更新数据成功');
//     }
// })

// way2
// const user2 = {
//     username: 'jenny',
//     password: '9999'
// }
// const sqlStr3 = 'UPDATE users SET username=? where password=?'
// db.query(sqlStr3, [user2, user2.password], (err, res)=>{
//     if(err) return console.log(err.message);
//     if(res.affectedRows === 2){
//         console.log('更新数据成功');
//     }
// })


// 删除数
const sqlStr4 = 'DELETE FROM users where password=?'
db.query(sqlStr4, '9999', (err, res)=>{
    if(err) return console.log(err.message);
    console.log(res);
    if(res.affectedRows === 2){
        console.log('删除数据成功');
    }
})