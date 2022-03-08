const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, '/index.html'), 'utf8', function(err, data){
    if(err){
        return console.log(err);
    }
    resolveCSS(data);
    resolveScript(data)
    resolveHTML(data)
})


// 定义处理css样式的方法
function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr);

    const newCss = r1[0].replace('<style>', '').replace('</style>', '');

    fs.writeFile(path.join(__dirname, '/index.css'), newCss, function(err){
        if(err) return console.log(err);
        console.log('写入成功');
    })
}

function resolveScript(htmlStr){
    const r1 = regScript.exec(htmlStr);

    const newJS = r1[0].replace('<script>', '').replace('</script>', '');

    fs.writeFile(path.join(__dirname, '/index1.js'), newJS, function(err){
        if(err) return console.log(err);
        console.log('写入成功');
    })
}

function resolveHTML(htmlStr){
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index1.js"></script>')

    fs.writeFile(path.join(__dirname, '/index.html'), newHtml, function(err){
        if(err) return console.log(err);
        console.log('写入成功');
    })
}