const path = require('path');
const fs = require('fs')

const pathStr = path.join('/a', '/b/c', '../', './d');
console.log(pathStr); // \a\b\d

// console.log(__dirname);

const pathStr2 = path.join(__dirname, './text.txt')
// console.log(pathStr2);


fs.readFile(path.join(__dirname, '/text.txt'), 'utf8', function(err, str){
    if(err){
        return console.log(err);
    }
    console.log(str);
})