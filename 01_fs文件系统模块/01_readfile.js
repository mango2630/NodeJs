const fs = require('fs');

fs.readFile('./words.txt', 'utf8', function(err, dataStr){
    console.log(err);
    console.log(dataStr);
})

/*  
    读取成功：
        err: null
        dataStr: value
    读取失败：
        err: 错误对象
        dataStr: undefined
*/