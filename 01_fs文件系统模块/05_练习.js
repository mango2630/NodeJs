const fs = require('fs')

fs.readFile('./成绩.txt', 'utf-8', function(err, str){
    if(err){
        return console.log('读取失败！！');
    }

    // 1. 先把成绩，按照空格进行分割。
    const scoreOld = str.split(' ');
    console.log(scoreOld);

    // 2. 循环分割数组
    const scoreNew = [];
    scoreOld.forEach(item => {
        scoreNew.push(item.replace('=', ':'));
    })
    console.log(scoreNew);

    // 合并: join(将数组作为字符串返回)
    const newStr = scoreNew.join('\r\n')
    console.log(newStr);

    fs.writeFile('./newScore.txt', newStr, 'utf-8', function(err){
        if(err){
            return console.log('写入文件失败');
        }
        console.log('成绩写入成功！');
    })
})

