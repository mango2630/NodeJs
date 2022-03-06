const fs = require('fs');

fs.writeFile('./wordsTest.txt', "add test me", 'utf-8', function(err){
    console.log(err); // null
})
