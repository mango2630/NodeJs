const itheima = require('mango-tools')

// 格式化时间
console.log(itheima.dateFormat(new Date()));

// html转义
const htmlStr = '<h1>这是一次test</h1>';
console.log(itheima.htmlEscape(htmlStr));