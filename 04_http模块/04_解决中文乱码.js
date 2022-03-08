const http = require('http')

const server = http.createServer()

server.on('request', (req, res)=>{
    const url = req.url;
    const method = req.method;

    const str = `乱码：your request url is ${url}, method: ${method}`
    console.log(str);

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str);
})

server.listen(8080, function(){
    console.log('server running at http://127.0.0.1:8080');
})