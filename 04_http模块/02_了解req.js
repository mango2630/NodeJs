const http = require('http')

const server = http.createServer()

server.on('request', (req) => {
    const url = req.url;
    const method = req.method;

    const str = `your request url is ${url}, method: ${method}`
    console.log(str);
})

server.listen(8080, ()=>{
    console.log('server running at http://127.0.0.1:8080');
})