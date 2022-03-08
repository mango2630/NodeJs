const path = require('path')

const fpath = '/a/b/c/index.html'

// 输出文件名
var extName = path.extname(fpath);
console.log(extName);
