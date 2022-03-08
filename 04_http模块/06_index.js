const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res)=>{  
    
    const url = req.url;
    let fpath = '';

    // 读取文件内容并响应给客户端
    if(url === '/'){
        fpath = path.join(__dirname, './clock/index.html')
        console.log(fpath);
    }else{
        fpath = path.join(__dirname, './clock', url)
    }

    fs.readFile(fpath, 'utf-8', function(err, str){
        if(err) return console.log(err);

        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(str);
    })
})

server.listen(8080, ()=>{
    console.log('server runnin http://127.0.0.1:8080');
})