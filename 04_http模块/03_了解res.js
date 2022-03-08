const http = require('http')

const server = http.createServer()

server.on('request', (req, res)=>{
    const url = req.url;
    const method = req.method;

    const str = `your request url is ${url}, method: ${method}`
    console.log(str);

    // 服务器返回！！！，并结束这次响应的内容。
    res.end(str)
})

server.listen(8080, function(){
    console.log('server running at http://127.0.0.1:8080');
})