const fs = require('fs')

// 移植性非常差！
fs.readFile('F:\\Web_design\\nodejs\\01_fs文件系统模块\\newScore.txt', 'utf8', function(err, str){
    console.log('绝对路径' + str);
})


// __dirname 表示当前文件所处的目录
console.log(__dirname);

fs.readFile(__dirname + '/newScore.txt', 'utf8', function(err, str){
    console.log('__dirname' + str);
})