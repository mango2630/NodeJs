// 这是包的入口文件
const dateFormat = require('./src/dateFormat')
const htmlEscape = require('./src/htmlEscape')

// console.log(dateFormat); // { dateFormat: [Function: dateFormat] }


// 向外暴露需要的成员
module.exports = {
    ...dateFormat,
    ...htmlEscape
}