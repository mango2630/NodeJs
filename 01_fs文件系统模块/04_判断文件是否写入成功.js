const fs = require('fs');

fs.writeFile('./wordsTest.txt', "add test me", 'utf-8', function(err){
    if(err){
        console.log('文件写入失败！');
    }
    console.log('文件写入成功！');
})
