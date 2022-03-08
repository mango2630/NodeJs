const path = require('path')

const fpath = '/a/b/c/index.html'

// 输出文件名
var fullName = path.basename(fpath);
console.log(fullName);

// 不输出扩展名
const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt);